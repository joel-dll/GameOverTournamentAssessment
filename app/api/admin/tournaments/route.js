import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function GET() {
  try {
    const tournaments = db.prepare('SELECT * FROM tournaments').all();
    return NextResponse.json(tournaments);
  } catch (error) {
    console.error('Fetch tournaments error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
