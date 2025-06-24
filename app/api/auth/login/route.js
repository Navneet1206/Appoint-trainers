import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '@/lib/db';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = users.find(u => u.email === email && u.verified);
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' }); // Replace 'secret_key' with a secure key in production
  return NextResponse.json({ token });
}