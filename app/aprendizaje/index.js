import { useEffect } from "react";
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/aprendizaje/lessons');
        }, 0);
        return () => clearTimeout(timer);
    }, [router]);

    return null;
}