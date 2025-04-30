import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, game_title, date, city, country, total_spots, latitude, longitude } = body;

    // to get tournament games
    const tournament = db.prepare('SELECT * FROM tournaments WHERE id = ?').get(id);
    if (!tournament) {
      return NextResponse.json({ error: 'Tournament not found' }, { status: 404 });
    }

    // calculate remaining_spots
    const spotsDifference = total_spots - tournament.total_spots;
    const newRemainingSpots = tournament.remaining_spots + spotsDifference;

    if (newRemainingSpots < 0) {
      return NextResponse.json({ error: 'Cannot have negative remaining spots' }, { status: 400 });
    }

    //to update tournament
    db.prepare(`
      UPDATE tournaments
      SET 
        game_title = ?, 
        date = ?, 
        city = ?, 
        country = ?, 
        total_spots = ?, 
        remaining_spots = ?, 
        latitude = ?, 
        longitude = ?
      WHERE id = ?
    `).run(
      game_title,
      date,
      city,
      country,
      total_spots,
      newRemainingSpots,
      latitude,
      longitude,
      id
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Edit tournament error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

