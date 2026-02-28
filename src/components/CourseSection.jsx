import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import CourseCard from "./CourseCard";

export default function CourseSection({ title, courses }) {
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
    <section
      className={`py-12 sm:py-14 ${
        title === "New Launches" ? "bg-[#F3F3F3]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-['Baloo_2'] text-[28px] sm:text-[32px] lg:text-[36px] text-[#2A2A2A] flex items-center justify-center gap-2">
          {title} <Star className="text-yellow-400 fill-yellow-400" size={24} />
        </h2>

        <p className="text-center mt-2 text-[#6F6F6F] text-sm">
          Our most loved courses that kids absolutely adore!
        </p>

        <div className="relative mt-8">
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
            <style>
              {`
                div::-webkit-scrollbar { display: none; }
              `}
            </style>

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                sectionTitle={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
