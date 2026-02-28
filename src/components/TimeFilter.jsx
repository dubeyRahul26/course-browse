import { useEffect, useRef, useState } from "react";
import {
  Sun,
  Sunset,
  Moon,
  MoonStar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HorizontalCourseCard from "./HorizontalCourseCard";
import { courses } from "../data/courses";

export default function TimeFilter() {
  const [activeId, setActiveId] = useState();
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const courseScrollRef = useRef(null);
  const [courseLeft, setCourseLeft] = useState(false);
  const [courseRight, setCourseRight] = useState(false);

  const slots = [
    {
      id: 1,
      title: "Morning classes",
      time: "8am - 12pm",
      icon: Sun,
      activeBg: "bg-[#E8F4FF]",
      glow: "shadow-[0_30px_70px_rgba(59,130,246,0.45)]",
      border: "border-blue-400",
    },
    {
      id: 2,
      title: "Afternoon classes",
      time: "12pm - 4pm",
      icon: Sunset,
      activeBg: "bg-[#FFF4CC]",
      glow: "shadow-[0_30px_70px_rgba(251,191,36,0.45)]",
      border: "border-yellow-400",
    },
    {
      id: 3,
      title: "Evening classes",
      time: "4pm - 8pm",
      icon: Moon,
      activeBg: "bg-[#FFE9D6]",
      glow: "shadow-[0_30px_70px_rgba(249,115,22,0.45)]",
      border: "border-orange-400",
    },
    {
      id: 4,
      title: "Late evening classes",
      time: "8pm - 11pm",
      icon: MoonStar,
      activeBg: "bg-[#F3E8FF]",
      glow: "shadow-[0_30px_70px_rgba(168,85,247,0.45)]",
      border: "border-purple-400",
    },
  ];

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;
    const tolerance = 2;
    setCanLeft(el.scrollLeft > tolerance);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
  };

  const updateCourses = () => {
    const el = courseScrollRef.current;
    if (!el) return;
    const tolerance = 2;
    setCourseLeft(el.scrollLeft > tolerance);
    setCourseRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
  };

  useEffect(() => {
    update();
    updateCourses();

    const el = scrollRef.current;
    const el2 = courseScrollRef.current;

    if (el) el.addEventListener("scroll", update);
    if (el2) el2.addEventListener("scroll", updateCourses);

    window.addEventListener("resize", update);
    window.addEventListener("resize", updateCourses);

    return () => {
      if (el) el.removeEventListener("scroll", update);
      if (el2) el2.removeEventListener("scroll", updateCourses);
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", updateCourses);
    };
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir * 280,
      behavior: "smooth",
    });
  };

  const scrollCourses = (dir) => {
    courseScrollRef.current?.scrollBy({
      left: dir * 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 sm:py-16 bg-[#4f80992c]">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Baloo_2'] text-[28px] sm:text-[32px] lg:text-[36px] text-[#2A2A2A]">
          Filter with Time
        </h2>

        <p className="mt-2 text-[#6F6F6F] text-sm sm:text-base">
          Choose the perfect time that fits your child’s schedule
        </p>

        {/* TIME CAROUSEL */}
        <div className="relative mt-10 mb-10">
          {canLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-2 sm:left-0 top-16 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft />
            </button>
          )}

          {canRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-2 sm:right-0 top-16 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible lg:justify-center py-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] pb-24 px-6"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {slots.map((slot) => {
              const active = activeId === slot.id;
              const Icon = slot.icon;

              return (
                <button
                  key={slot.id}
                  onClick={() => setActiveId(slot.id)}
                  className={`relative min-w-65 sm:min-w-67.5 lg:min-w-0 lg:w-67.5 h-22.5 rounded-2xl overflow-hidden border flex items-center justify-between px-5 text-left transition-all duration-300 group ${
                    active
                      ? `${slot.activeBg} ${slot.glow} ${slot.border}`
                      : "bg-white border-[#E5E5E5] hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="text-[15px] font-semibold text-[#2A2A2A]">
                      {slot.title}
                    </div>
                    <div className="text-[13px] text-[#6F6F6F] mt-1">
                      {slot.time}
                    </div>
                  </div>

                  <div
                    className={`absolute right-4 -bottom-2 transition-all duration-300 ease-out ${
                      active
                        ? "-translate-y-10 scale-110"
                        : "group-hover:-translate-y-10"
                    }`}
                  >
                    <Icon size={36} className="text-[#2A2A2A] opacity-90" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* COURSE CAROUSEL  */}
        <div className="relative mt-4">
          {courseLeft && (
            <button
              onClick={() => scrollCourses(-1)}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft />
            </button>
          )}

          {courseRight && (
            <button
              onClick={() => scrollCourses(1)}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={courseScrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {courses.map((course) => (
              <HorizontalCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
