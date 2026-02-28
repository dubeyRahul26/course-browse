import { useState } from "react";

export default function Hero() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#4A148C] via-[#3C1361] to-[#2E0F4F]">
      <div className="relative mx-auto max-w-360 px-4 sm:px-6 md:px-10 lg:px-29 py-14 sm:py-16 lg:py-28">
        <div className="relative z-10 text-center max-w-205 mx-auto">
          <h1 className="font-['Baloo_2'] text-white text-[24px] leading-snug sm:text-[28px] lg:text-[40px]">
            Learn a New Skill
          </h1>

          <p className="mt-2 font-['Baloo_2'] text-[#E6FF4B] text-[20px] leading-snug sm:text-[28px] lg:text-[40px]">
            Everyday, Anytime, and Anywhere.
          </p>

          <div className="hidden lg:flex mt-10 mx-auto items-center bg-white rounded-full p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] max-w-130">
            <div className="flex items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-4 text-[#6F6F6F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="flex-1 px-4 py-3 text-base outline-none rounded-full text-[#6F6F6F]"
              />
            </div>
            <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#57029C] to-[#F700AC] text-white font-semibold">
              Search
            </button>
          </div>

          <button
            onClick={() => setOpenSearch(true)}
            className="lg:hidden mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </div>

        {openSearch && (
          <div className="fixed inset-0 z-999 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-24 px-4 lg:hidden">
            <div className="w-full max-w-md bg-white rounded-2xl p-3 shadow-2xl">
              <div className="flex items-center bg-white rounded-full border border-gray-200">
                <input
                  autoFocus
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="flex-1 px-4 py-3 text-sm outline-none rounded-full text-[#6F6F6F]"
                />
                <button className="mr-1 px-5 py-2 rounded-full bg-linear-to-r from-[#57029C] to-[#F700AC] text-white text-sm font-semibold">
                  Search
                </button>
              </div>
              <button
                onClick={() => setOpenSearch(false)}
                className="mt-3 w-full text-sm text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <img
          src="/boy.png"
          alt="boy"
          className="absolute bottom-0 -left-4 w-35 sm:w-42.5 md:w-50 lg:left-0 lg:w-[320px] pointer-events-none"
        />

        <img
          src="/girl.png"
          alt="girl"
          className="absolute bottom-0 -right-px w-48 sm:w-50 md:w-60 lg:right-0 lg:w-105 pointer-events-none"
        />

        <div className="flex flex-col items-center absolute left-4 top-4 sm:left-8 sm:top-6 md:left-28 md:top-8 lg:left-45 lg:top-10 rounded-full border border-[#6F6F6F] bg-white/15 backdrop-blur-md px-2 py-2 sm:px-3 sm:py-4 text-white">
          <span className="font-['Poppins'] font-bold text-[14px] sm:text-[16px] lg:text-[20px]">
            500+
          </span>
          <span className="font-['Poppins'] text-[10px] sm:text-[11px] lg:text-[12px] opacity-90">
            Courses
          </span>
        </div>

        <div className="flex items-center gap-2 absolute left-16 bottom-5 sm:left-24 sm:bottom-7.5 md:left-24 md:bottom-12.5 lg:left-52.5 lg:bottom-7.5 rounded-[40px] border border-[#6F6F6F] bg-white/15 backdrop-blur-[0.5px] px-3 py-1.5 sm:px-5 sm:py-2 text-white">
          <img
            src="rating.gif"
            alt="rating"
            className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-['Poppins'] font-semibold text-[12px] sm:text-[14px] lg:text-[16px]">
              4.9
            </span>
            <span className="font-['Poppins'] text-[10px] sm:text-[11px] lg:text-[12px] opacity-90">
              Rating
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 absolute right-2 top-6 sm:right-8 sm:top-8 md:right-12 md:top-10 lg:right-15 lg:top-35 rounded-[40px] border border-[#6F6F6F] bg-white/15 backdrop-blur-md px-3 py-1.5 sm:px-5 sm:py-2 animate-[float-slow_4s_ease-in-out_infinite] [animation-delay:1.2s]">
          <img
            src="happykids.gif"
            alt="happy kids"
            className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-11 lg:h-11 object-contain shrink-0"
          />
          <div className="flex flex-col leading-[1.3] text-white">
            <span className="font-['Poppins'] font-bold text-[14px] sm:text-[18px] lg:text-[24px]">
              10k+
            </span>
            <span className="font-['Poppins'] text-[10px] sm:text-[11px] lg:text-[12px] opacity-90">
              Happy kids
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
