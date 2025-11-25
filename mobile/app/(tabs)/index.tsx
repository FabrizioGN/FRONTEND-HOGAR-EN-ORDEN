import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { accessToken } = useAuth();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (accessToken) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [ready, accessToken]);

  return null;
}
