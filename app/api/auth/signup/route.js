import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { users } from '@/lib/db';
import { generateVerificationCode, sendVerificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  const { email, password, name, phone, address, city } = await request.json();

  if (users.find(user => user.email === email)) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationCode = generateVerificationCode();
  const user = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    name,
    phone,
    address,
    city,
    verified: false,
    verificationCode,
  };
  users.push(user);

  await sendVerificationEmail(email, verificationCode);
  return NextResponse.json({ message: 'Verification code sent' });
}