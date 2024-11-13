import React from 'react'

const LessonCard = ({...lesson}:Lesson) => {
  return (
    <div className='w-full rounded-[24px] border p-5'>
      <div className='text-[12px] font-mono px-4 py-1 border rounded-full w-fit'>{lesson.lesson}</div>
      <div className='text-[18px] font-semibold pt-2'>{lesson.title}</div>
      <div className='text-[14px] font-medium opacity-80 pt-1'>{lesson.description}</div>
    </div>
  )
}

export default LessonCard
