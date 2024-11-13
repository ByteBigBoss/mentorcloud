"use client"
import WeekCard from '@/components/topic/WeekCard'
import SuspenseWrapper from '@/components/wrappers/SuspenseWrapper'
import WrapperBody from '@/components/wrappers/WrapperBody'
import { Topics } from '@/data/topics'
import { Loader } from '@mantine/core'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const TopicDetails = () => {

  const router = useRouter();

  const searchParams = useSearchParams();

  const [topic, setTopic] = useState<TopicProps>();

  useEffect(() => {
    const t = searchParams.get("t");
    if (t === undefined || t === null) {
      router.replace("/");
    } else {
      const topicData = Topics.find(tp => tp.id === t);
      setTopic(topicData);
    }
  }, [searchParams, router]);


  if (topic) {

    const Icon = topic.icon;
    return (
      <div className='min-h-screen pt-[120px]'>
        <WrapperBody>
          <div className='flex flex-col items-center'>
            {/* TITLTE AND DESCRIPTION */}
            <div className='flex flex-col items-center to-current'>
              <div className='text-[1.6rem] font-bold flex flex-col items-center gap-2'><Icon size={64} />{topic?.topic}</div>
              <div className='text-[14px] font-medium opacity-60 pt-1'>{topic?.description}</div>
            </div>

            {/* CHIPS */}
            <div className='flex w-full justify-center pt-4 items-center flex-wrap gap-[10px] mt-[12px]'>
              {/* STATUS */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[12px] font-medium opacity-60'>Status: </div>
                <div className='text-[12px] font-medium text-orange-400'>{topic?.status}</div>
              </div>
              {/* START DATE */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[12px] font-medium opacity-60'>Start Date: </div>
                <div className='text-[12px] font-medium text-purple-400'>{topic?.start_date}</div>
              </div>
              {/* END DATE */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[12px] font-medium opacity-60'>End Date: </div>
                <div className='text-[12px] font-medium text-rose-400'>{topic?.end_date}</div>
              </div>
              {/* START DATE */}
              <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                <div className='text-[12px] font-medium opacity-60'>Weeks: </div>
                <div className='text-[12px] font-medium text-emerald-400'>{topic?.weeks.length}</div>
              </div>
            </div>

            {/* CONTENT */}
            <div className='flex flex-col items-center w-full gap-[20px]  pt-[30px] '>
              {topic.weeks.map((week, index) => (
               <WeekCard {...week} key={index}/>
              ))}
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
    <TopicDetails />
  </SuspenseWrapper>
)

export default wrapper
