import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    // Optionally: Mark tournament as canceled
    db.prepare(`
      UPDATE tournaments
      SET game_title = game_title || ' (Canceled)'
      WHERE id = ?
    `).run(id);

    // Update registrations related to this tournament
    db.prepare(`
      UPDATE registrations
      SET status = 'Tournament Cancelled'
      WHERE tournament_id = ?
    `).run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cancel tournament error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
