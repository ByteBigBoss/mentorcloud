import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const WeekCard = ({ ...week }: Week) => {

  const [dailyTasks, setDailyTasks] = useState(0);
  const [currentTopic, setCurrentTopic] = useState<string| null>("");

  const searchParams = useSearchParams();

  useEffect(()=>{
    week.homeworks.days.forEach(day=>setDailyTasks((prev)=>prev+day.tasks.length));

    const topic = searchParams.get("t");
    setCurrentTopic(topic);
  },[]);

  return (
    <Link href={"/topic/week?t=" + currentTopic+"&w="+week.week} className='flex flex-col items-center'>
      <Button className="bg-transparent max-w-[80%] mobile:max-w-[100%] min-w-0 min-h-0 p-0 m-0 h-auto rounded-[24px] border">
        <div className='flex flex-col bg-[#fafafa] dark:bg-[#111111] items-start w-full rounded-[24px] p-[20px]'>
          <div className='flex items-center justify-between w-full'>
            {/* TITLE */}
            <div className='text-[14px] font-semibold'>{week.title}</div>

            {/* WEEK */}
            <div className='font-semibold uppercase text-[14px] opacity-80'>{week.week}</div>
          </div>
          {/* DESCRIPTION */}
          <div className='text-[12px] font-medium opacity-60 pt-1'>{week.description}</div>

          <div className='flex flex-wrap gap-[10px] mt-[12px]'>
            {/* STATUS */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Status: </div>
              <div className='text-[10px] font-medium text-orange-400'>{week.status}</div>
            </div>
            {/* RANGE */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Range: </div>
              <div className='text-[10px] font-medium text-purple-400'>{week.range}</div>
            </div>
            {/* MENTOR */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Mentor: </div>
              <div className='text-[10px] font-medium text-rose-400'>{week.mentor}</div>
            </div>
            {/* MAIN LESSONS */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Lessons: </div>
              <div className='text-[10px] font-medium text-emerald-400'>{week.main.lessons.length}</div>
            </div>
            {/* LIVE TASKS */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Live Tasks: </div>
              <div className='text-[10px] font-medium text-fuchsia-400'>{week.main.tasks.length}</div>
            </div>
             {/* HOMEWORKS */}
             <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Homeworks: </div>
              <div className='text-[10px] font-medium text-amber-400'>{week.homeworks.days.length}</div>
            </div>
                  {/* DAILY TASKS */}
            <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
              <div className='text-[10px] font-medium opacity-60'>Daily Tasks: </div>
              <div className='text-[10px] font-medium text-sky-400'>{dailyTasks}</div>
            </div>
          </div>
        </div>
      </Button>
    </Link>
  )
}

export default WeekCard
