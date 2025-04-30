
import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';


const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
  try {
    const { user_id, game_title, date } = await req.json();

    // find tournament id
    const tournament = db.prepare(`
      SELECT id FROM tournaments
      WHERE game_title = ? AND date = ?
    `).get(game_title, date);

    if (!tournament) {
      return NextResponse.json({ error: 'Tournament not found' }, { status: 404 });
    }

    // delete user registration
    const result = db.prepare(`
      DELETE FROM registrations
      WHERE user_id = ? AND tournament_id = ?
    `).run(user_id, tournament.id);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    // update tournament remaining spots
    db.prepare(`
      UPDATE tournaments
      SET remaining_spots = remaining_spots + 1
      WHERE id = ?
    `).run(tournament.id);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('❌ Cancel API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
