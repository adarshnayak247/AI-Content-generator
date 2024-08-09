import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import Templatecard from './Templatecard'

export interface Template {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}

function TemplateListSection({ userSearchInput }: { userSearchInput: string }) {
  const [templateList, setTemplateList] = useState<Template[]>(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = Templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className='p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {templateList.map((item, index) => (
          <Templatecard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default TemplateListSection;
