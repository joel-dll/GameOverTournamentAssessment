import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';


const dbPath = path.join(process.cwd(), 'public', 'GameOverTournament.db');
const db = new Database(dbPath);

export async function POST(req) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    if (status !== 'active' && status !== 'cancelled') {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // update tournament status
    db.prepare(`
      UPDATE tournaments
      SET status = ?
      WHERE id = ?
    `).run(status, id);

    // update registrations depending on tournament status
    if (status === 'cancelled') {
      db.prepare(`
        UPDATE registrations
        SET status = 'cancelled'
        WHERE tournament_id = ?
      `).run(id);
    } else if (status === 'active') {
      db.prepare(`
        UPDATE registrations
        SET status = 'registered'
        WHERE tournament_id = ?
      `).run(id);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Toggle tournament status API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
