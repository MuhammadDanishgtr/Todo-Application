'use client';

import { RegisterForm } from '@/components/auth/register-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (email: string, password: string) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    // Redirect to dashboard on success
    router.push('/dashboard');
  };

  const handleSwitchToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm
            onSubmit={handleRegister}
            onSwitchToLogin={handleSwitchToLogin}
          />
        </CardContent>
      </Card>
    </div>
  );
}
