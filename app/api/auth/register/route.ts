import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUser } from '@/lib/db';
import { encrypt, login } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await createUser({
      name,
      email,
      password: hashedPassword,
    });

    // Create session
    const token = await encrypt({ id: user.id, email: user.email });
    
    // Create response with auth cookie
    const response = NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email }
    });
    
    // Set auth cookie
    await login(response, token);

    return response;
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: error.message === 'User already exists' ? 400 : 500 }
    );
  }
}