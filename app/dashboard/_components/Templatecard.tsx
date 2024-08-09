import React from 'react'
import { Template } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function Templatecard({ name, desc, icon, slug }: Template) {
  return (
    <Link href={`/dashboard/content/${slug}`} passHref>
      <div className='p-6 shadow-lg rounded-lg border border-gray-200 bg-white flex flex-col gap-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
        <Image src={icon} alt={`${name} icon`} width={50} height={50} className='mb-4 object-cover' />
        <h2 className='font-semibold text-xl mb-2'>{name}</h2>
        <p className='text-gray-600 line-clamp-3'>{desc}</p>
      </div>
    </Link>
  )
}

export default Templatecard
