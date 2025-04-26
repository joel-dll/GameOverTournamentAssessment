import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, game_title, date, city, country, total_spots, latitude, longitude } = body;

    db.prepare(`
      UPDATE tournaments
      SET game_title = ?, date = ?, city = ?, country = ?, total_spots = ?, latitude = ?, longitude = ?
      WHERE id = ?
    `).run(game_title, date, city, country, total_spots, latitude, longitude, id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Edit tournament error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
