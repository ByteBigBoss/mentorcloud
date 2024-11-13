"use client"
import LessonCard from '@/components/topic/LessonCard';
import WrapperBody from '@/components/wrappers/WrapperBody';
import { Topics } from '@/data/topics';
import { Loader } from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BorderBeam } from '@/components/ui/border-beam';
import TaskCard from '@/components/topic/TaskCard';
import HomeWorks from '@/components/topic/HomeWorks';
import { motion } from 'framer-motion';
import SuspenseWrapper from '@/components/wrappers/SuspenseWrapper';

const Week = () => {

  const router = useRouter();

  const searchParams = useSearchParams();

  const [topic, setTopic] = useState<TopicProps>();
  const [week, setWeek] = useState<Week>();

  useEffect(() => {
    const t = searchParams.get("t");
    const w = searchParams.get("w");

    if (t === undefined || t === null) {
      router.replace("/");
    } else {
      const topicData = Topics.find(tp => tp.id === t);
      setTopic(topicData);

      if (w === undefined || w === null) {
        router.replace(`/topic/t=${t}`);
      } else {
        const weekData = topicData?.weeks.find(wk => wk.week === w);
        setWeek(weekData);
      }
    }


  }, [searchParams, router]);

  if (topic && week) {
    return (
      <div className='min-h-screen w-full pt-[120px] pb-[60px]'>
        <WrapperBody>
          <div className='flex flex-col items-center'>

            {/* WEEK */}
            <div className='text-[14px] px-4 py-1 rounded-full border font-bold uppercase'>{week.week}</div>

            {/* TITLE */}
            <div className='text-[1.4rem] font-semibold pt-4'>{week.main.title}</div>
            <div className='text-[14px] font-medium opacity-80 pt-1'>{week.main.subtitle}</div>

            <div className='flex gap-[10px] items-center flex-wrap justify-center pt-[30px]'>
              {/* RANGE */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[10px] font-medium opacity-60'>Start Time: </div>
                <div className='text-[10px] font-medium text-purple-400'>{week.main.start_time}</div>
              </div>
              {/* MENTOR */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[10px] font-medium opacity-60'>Mentor: </div>
                <div className='text-[10px] font-medium text-rose-400'>{week.main.end_time}</div>
              </div>
            </div>

            

            <div className='w-[50%] mobile:w-full'>

              {/* LESSONS */}
            <div
              className="w-full flex flex-col items-start pt-[30px] group">
              <div className="p-[4px] border rounded-full relative group-hover:bg-purple-500/10 transition-transform-colors duration-200">
                <div
                  className="text-[14px] w-4/12 dark:bg-white/10 bg-black/5 font-semibold px-[24px] py-[8px]  rounded-full  "
                >Lessons</div>
              </div>
            </div>
            <div className='w-full flex flex-col items-center gap-[20px] pt-3'>
              {week.main.lessons.map((lesson, index) => (
                <LessonCard {...lesson} key={index} />
              ))}
            </div>

            {/* TASKS */}
            <div
              className="w-full flex flex-col items-start pt-[30px] group">
              <div className="p-[4px] border rounded-full relative group-hover:bg-purple-500/10 transition-transform-colors duration-200">
                <div
                  className="text-[14px] w-4/12 dark:bg-white/10 bg-black/5 font-semibold px-[24px] py-[8px]  rounded-full  "
                >Tasks</div>
              </div>
            </div>
            <div className='w-full flex flex-col items-center gap-[20px] pt-3'>
              {week.main.tasks.map((lesson, index) => (
                <TaskCard {...lesson} key={index} />
              ))}
            </div>

            <div className="rounded-full flex border p-2 mt-4 w-full relative">
              <motion.div
                initial={{ x: "0%" }}
                animate={{
                  x: ["0%", "100%", "0%"], // Move to right, then back to start
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="p-2 w-5 rounded-full bg-blue-500"
              ></motion.div>
            </div>

            {/* HOMEWORKS */}
            <div
              className="w-full flex flex-col items-start pt-[30px] group">
              <div className="p-[4px] border rounded-full relative group-hover:bg-purple-500/10 transition-transform-colors duration-200">
                <BorderBeam size={40} duration={2} delay={3} />
                <div
                  className="text-[14px] w-4/12 dark:bg-white/10 bg-black/5 font-semibold px-[24px] py-[8px]  rounded-full  "
                >HomeWorks</div>
              </div>
            </div>
            <div className='w-full flex flex-col items-center gap-[20px] pt-3'>
              <HomeWorks {...week.homeworks} />
            </div>
            </div>

          </div>
        </WrapperBody>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Loader />
    </div>
  )
}

const wrapper = ()=>(
  <SuspenseWrapper>
    <Week />
  </SuspenseWrapper>
)

export default wrapper
