import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    jwt.verify(token, 'secret_key'); // Replace 'secret_key' with your secure key
    const { trainer, date, time } = await request.json();
    // Add booking logic here (e.g., save to a database)
    return NextResponse.json({ message: 'Appointment booked successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}