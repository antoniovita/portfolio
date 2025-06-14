'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  timeline: TimelineItem[];
};

export default function Timeline({ timeline }: TimelineProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-16 z-40 items-center flex flex-col bg-transparent">
      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />
        <div className="flex flex-col gap-[200px] relative">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="w-full flex justify-between items-center relative"
                data-aos="fade-up"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-black z-10" />
                <div className={`w-1/2 px-6 ${isLeft ? 'text-right' : 'text-left'} ${isLeft ? '' : 'order-2'}`}>
                  <span className="text-yellow-400 text-sm block mb-1">{item.year}</span>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <div className="w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
