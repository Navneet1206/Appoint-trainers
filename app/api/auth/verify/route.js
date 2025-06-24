import { NextResponse } from 'next/server';
import { users } from '@/lib/db';

export async function POST(request: Request) {
  const { email, code } = await request.json();
  const user = users.find(u => u.email === email);
  if (!user || user.verified) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  if (user.verificationCode === code) {
    user.verified = true;
    delete user.verificationCode;
    return NextResponse.json({ message: 'Email verified' });
  } else {
    return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
  }
}