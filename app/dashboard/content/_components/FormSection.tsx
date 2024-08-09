"use client"
import React, { useState } from 'react'
import { Template } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
  selectedTemplate?: Template,
  userFormInput:any
  loading:boolean
}

interface FormData {
  [key: string]: string | undefined;
}

function FormSection({ selectedTemplate ,userFormInput,loading}: PROPS) {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     userFormInput(formData)
    // Handle form submission logic here
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      <Image src={selectedTemplate?.icon || ''} alt='icon' width={70} height={70} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-sm text-grey-500'>
        {selectedTemplate?.desc}
      </p>
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold'>{item.label}</label>
            {item.field === 'input' ? (
              <Input
                className='border-black'
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                className='border-black'
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className='w-full py-6'
        disabled={loading}
        >
          {loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection;
