import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

export default function WebinarSection() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = scrollRef.current;
    if (!el) return;

    const tolerance = 2;
    setCanLeft(el.scrollLeft > tolerance);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
  };

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir * 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 sm:py-16 bg-[#a46bc81a]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        {/* ===== Heading ===== */}
        <div className="relative mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-6">
            {/* left dotted line */}
            <div className="flex items-center gap-1 sm:gap-2 flex-1 max-w-30 sm:max-w-50 justify-end">
              <div className="h-0.5 w-full border-t-2 border-dashed border-[#7C3AED]/60" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#7C3AED]" />
            </div>

            {/* title */}
            <h2
              className="
        font-['Baloo_2']
        text-center
        leading-tight
        text-[20px]
        sm:text-[26px]
        md:text-[30px]
        lg:text-[36px]
        text-[#2A2A2A]
        px-2
      "
            >
              Webinar starting within 24 hrs
            </h2>

            {/* right dotted line */}
            <div className="flex items-center gap-1 sm:gap-2 flex-1 max-w-30 sm:max-w-50">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#7C3AED]" />
              <div className="h-0.5 w-full border-t-2 border-dashed border-[#7C3AED]/60" />
            </div>
          </div>

          {/* clock icon */}
          <img
            src="/watch.png"
            alt="watch"
            className="
      pointer-events-none opacity-80
      absolute right-0 -top-3 -translate-y-1/2
      w-8 sm:w-12 md:w-14 lg:w-16
    "
          />
        </div>
        {/* Carousel */}
        <div className="relative mt-10">
          {canLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft />
            </button>
          )}

          {canRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
