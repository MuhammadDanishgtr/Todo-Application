'use client';

import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    const result = await authClient.signIn.email({
      email,
      password,
    });

    if (result.error) {
      throw new Error(result.error.message || 'Login failed');
    }

    // Redirect to dashboard on success
    router.push('/dashboard');
  };

  const handleSwitchToRegister = () => {
    router.push('/auth/register');
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm
            onSubmit={handleLogin}
            onSwitchToRegister={handleSwitchToRegister}
          />
        </CardContent>
      </Card>
    </div>
  );
}
