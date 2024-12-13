import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET || 'default-secret-key-change-it'
);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secretKey);
}

export async function decrypt(token: string): Promise<any> {
  const { payload } = await jwtVerify(token, secretKey);
  return payload;
}

export async function createAuthCookie(token: string) {
  return {
    name: 'token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 86400, // 24 hours
    path: '/',
  };
}

export async function login(response: NextResponse, token: string) {
  const cookie = await createAuthCookie(token);
  response.cookies.set(cookie);
  return response;
}

export async function logout() {
  (await cookies()).set('token', '', { expires: new Date(0) });
}

export async function getSession() {
  const token = (await cookies()).get('token')?.value;
  if (!token) return null;
  try {
    return await decrypt(token);
  } catch {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;
  try {
    return await decrypt(token);
  } catch {
    return null;
  }
}