import React from 'react'

const HomeWorks = ({ ...homeworks }: Homeworks) => {
    return (
        <div className='flex flex-col w-full rounded-[24px] '>
            <div className='text-[12px] font-mono px-4 py-1 border rounded-full w-fit'>{homeworks.title}</div>
            <div className='text-[12px] font-medium opacity-80 pt-3'>{homeworks.description}</div>

            <div className='flex gap-[10px] flex-col items-center mt-4'>
                {homeworks.days.map((day, index) => (
                    <div className='p-4 border rounded-[12px] w-full' key={index}>
                        <div className='text-[14px] font-bold opacity-60 uppercase'>{day.day}</div>
                        <div className='text-[12px] font-medium opacity-80 pt-2'>{day.title}</div>

                        {/* TASKS */}
                        <div className='pt-3 flex flex-col gap-[10px]'>
                            {day.tasks.map((task, i) => (
                                <div key={i} className='p-4 dark:bg-white/5 bg-black/5 rounded-lg'>
                                    <div className='text-[12px] font-mono px-3 py-[2px]  border rounded-full w-fit'>{task.task}</div>
                                    <div className='pt-3 text-[15px] font-medium'>{task.title}</div>
                                    <div className='text-[14px] font-medium opacity-70 pt-1'>{task.description}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default HomeWorks
