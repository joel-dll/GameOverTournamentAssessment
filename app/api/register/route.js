import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

// ✅ Database from /data folder (not /public)
const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
    try {
      const { user_id, tournament_id, game_title } = await req.json();
  
      // Check if tournament exists
      const tournament = db.prepare('SELECT * FROM tournaments WHERE id = ?').get(tournament_id);
      if (!tournament) {
        return NextResponse.json({ error: 'Tournament not found' }, { status: 404 });
      }
  
      if (tournament.remaining_spots <= 0) {
        return NextResponse.json({ error: 'No spots remaining' }, { status: 400 });
      }
  
      // 🔍 Insert user into users table if not exists
      const userExists = db.prepare('SELECT 1 FROM users WHERE user_id = ?').get(user_id);
      if (!userExists) {
        db.prepare(`
          INSERT INTO users (user_id, email, role)
          VALUES (?, ?, 'player')
        `).run(user_id, user_id); // we use email as user_id
      }
  
      // Prevent duplicate registrations
      const alreadyRegistered = db.prepare(
        'SELECT 1 FROM registrations WHERE user_id = ? AND tournament_id = ?'
      ).get(user_id, tournament_id);
      if (alreadyRegistered) {
        return NextResponse.json({ error: 'You are already registered for this tournament.' }, { status: 400 });
      }
  
      // Insert into registrations
      db.prepare(`
        INSERT INTO registrations (user_id, tournament_id, status, game_title, date)
        VALUES (?, ?, 'registered', ?, ?)
      `).run(user_id, tournament_id, game_title, tournament.date);
  
      // Update spots
      db.prepare(`
        UPDATE tournaments
        SET remaining_spots = remaining_spots - 1
        WHERE id = ?
      `).run(tournament_id);
  
      return NextResponse.json({ success: true });
  
    } catch (error) {
      console.error('Registration error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  