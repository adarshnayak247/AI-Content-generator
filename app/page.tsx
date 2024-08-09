"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to AI Content Generator
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">
        Click the button below to navigate to the dashboard
      </h2>
      <Button onClick={handleClick} className="bg-blue-500 text-white hover:bg-blue-600">
        Dashboard
      </Button>
    </div>
  );
}
