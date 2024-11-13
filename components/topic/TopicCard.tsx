import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'



const TopicCard = ({ ...topic }: TopicProps) => {

    const Icon = topic.icon;

    return (
       <Link href={"/topic?t="+topic.id}>
        <Button className="bg-transparent min-w-0 mobile:w-full min-h-0 p-0 m-0 h-auto rounded-[24px] border">
            <div className='flex flex-col bg-[#fafafa] dark:bg-[#111111] items-start w-full rounded-[24px] p-[20px]'>
                <div className='flex items-center gap-2'>
                <Icon size={16}/>
                <div className='text-[14px] font-semibold'>{topic.topic}</div>
                </div>
                <div className='text-[12px] font-medium opacity-60 pt-1'>{topic.description}</div>

                <div className='flex flex-wrap gap-[10px] mt-[12px]'>
                    {/* STATUS */}
                    <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                        <div className='text-[10px] font-medium opacity-60'>Status: </div>
                        <div className='text-[10px] font-medium text-orange-400'>{topic.status}</div>
                    </div>
                      {/* START DATE */}
                      <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                        <div className='text-[10px] font-medium opacity-60'>Start Date: </div>
                        <div className='text-[10px] font-medium text-purple-400'>{topic.start_date}</div>
                    </div>
                      {/* END DATE */}
                      <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                        <div className='text-[10px] font-medium opacity-60'>End Date: </div>
                        <div className='text-[10px] font-medium text-rose-400'>{topic.end_date}</div>
                    </div>
                      {/* START DATE */}
                      <div className='flex items-center gap-[4px] rounded-full px-4 py-1 border'>
                        <div className='text-[10px] font-medium opacity-60'>Weeks: </div>
                        <div className='text-[10px] font-medium text-emerald-400'>{topic.weeks.length}</div>
                    </div>
                </div>
            </div>
        </Button>
        </Link>
    )
}

export default TopicCard
