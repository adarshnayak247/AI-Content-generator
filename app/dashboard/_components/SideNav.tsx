"use client";
import { IconJarLogoIcon } from '@radix-ui/react-icons';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import React from 'react';

function SideNav() {
  const router = useRouter(); // Initialize useRouter
  const path = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
  ];

  const handleClick = (path: string) => {
    router.push(path); // Navigate to the selected path
  };

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src={'/logoipsum-287.svg'} alt='logo' width={100} height={100} />
      </div>
      <hr className='border my-6' />
      <div className='mt-3'>
        {MenuList.map((menu) => (
          <div
            key={menu.path}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path ? 'bg-primary text-white' : ''}`}
            onClick={() => handleClick(menu.path)} // Add onClick handler
          >
            <menu.icon className='h-6 w-6' />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
