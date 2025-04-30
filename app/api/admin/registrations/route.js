import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

// Database connection
const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function GET() {
  try {
    const registrations = db.prepare(`
      SELECT r.id, r.user_id, r.game_title, r.date, r.status
      FROM registrations r
      ORDER BY r.date ASC
    `).all();

    return NextResponse.json(registrations);
  } catch (error) {
    console.error('Fetch registrations error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
