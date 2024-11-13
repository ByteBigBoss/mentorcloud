"use client"
import React from "react";
import WrapperBody from '@/components/wrappers/WrapperBody';
import { Site } from "@/config/site";
import { Topics } from "@/data/topics";
import TopicCard from "@/components/topic/TopicCard";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col  items-center">
      <WrapperBody>
        <div>
          <div className="text-[3rem] text-center font-bold pt-[100px]">{Site.siteName}</div>
          <div className="text-[1.2rem] font-medium opacity-60  pb-4 text-center">The way of learning!</div>

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

          <div className="w-full flex flex-col items-start pt-[20px]">
            <div className="p-[4px] border rounded-full">
              <div
                className="text-[14px] w-4/12 dark:bg-white/20 bg-black/10 font-semibold px-[24px] py-[8px] border rounded-full  "
              >Topics</div>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-4 pt-[20px] gap-[20px] mobile:grid-cols-1 mid:grid-cols-2 tab:grid-cols-3">
            {Topics.map((data, index) => (
              <TopicCard {...data} key={index} />
            ))}
          </div>

        </div>
      </WrapperBody>
    </div>
  );
}
