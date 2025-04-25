import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');

let db;
try {
  db = new Database(dbPath);
} catch (err) {
  console.error('❌ Failed to load database:', err);
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
      return NextResponse.json({ error: 'Missing user_id' }, { status: 400 });
    }

    const stmt = db.prepare(`
      SELECT r.game_title, r.date, r.status, t.city, t.country
      FROM registrations r
      JOIN tournaments t ON r.tournament_id = t.id
      WHERE r.user_id = ?
    `);

    const results = stmt.all(user_id);
    return NextResponse.json(results);

  } catch (error) {
    console.error('❌ API /registrations error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
