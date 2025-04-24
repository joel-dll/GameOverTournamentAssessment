import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const gameTitle = searchParams.get('game_title');
  const date = searchParams.get('date');
  const location = searchParams.get('location');

  let query = `SELECT * FROM tournaments WHERE 1=1`;
  const params = [];

  if (gameTitle) {
    query += ` AND LOWER(game_title) LIKE ?`;
    params.push(`%${gameTitle.toLowerCase()}%`);
  }

  if (date) {
    query += ` AND date = ?`;
    params.push(date);
  }

  if (location) {
    query += ` AND (LOWER(city) LIKE ? OR LOWER(country) LIKE ?)`;
    params.push(`%${location.toLowerCase()}%`, `%${location.toLowerCase()}%`);
  }

  const results = db.prepare(query).all(...params);

  return NextResponse.json(results);
}
