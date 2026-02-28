import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

export default function Categories() {
  const [activeId, setActiveId] = useState();
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const courseScrollRef = useRef(null);
  const [courseCanLeft, setCourseCanLeft] = useState(false);
  const [courseCanRight, setCourseCanRight] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Coding",
      image: "/coding.png",
      activeBg: "bg-[#FF7A21]",
      glow: "shadow-[0_20px_40px_rgba(255,122,33,0.35)]",
    },
    {
      id: 2,
      name: "Public speaking",
      image: "/speaking.png",
      activeBg: "bg-[#10B981]",
      glow: "shadow-[0_20px_40px_rgba(16,185,129,0.35)]",
    },
    {
      id: 3,
      name: "Chess",
      image: "/chess.png",
      activeBg: "bg-[#FBBF24]",
      glow: "shadow-[0_20px_40px_rgba(251,191,36,0.35)]",
    },
    {
      id: 4,
      name: "Home work help",
      image: "/homework.png",
      activeBg: "bg-[#3B82F6]",
      glow: "shadow-[0_20px_40px_rgba(59,130,246,0.35)]",
    },
    {
      id: 5,
      name: "App building",
      image: "/app.png",
      activeBg: "bg-[#EF4444]",
      glow: "shadow-[0_20px_40px_rgba(239,68,68,0.35)]",
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
    setCourseCanLeft(el.scrollLeft > tolerance);
    setCourseCanRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance
    );
  };

  useEffect(() => {
    update();
    updateCourses();

    const el = scrollRef.current;
    const courseEl = courseScrollRef.current;
    if (!el || !courseEl) return;

    el.addEventListener("scroll", update);
    courseEl.addEventListener("scroll", updateCourses);
    window.addEventListener("resize", update);
    window.addEventListener("resize", updateCourses);

    return () => {
      el.removeEventListener("scroll", update);
      courseEl.removeEventListener("scroll", updateCourses);
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", updateCourses);
    };
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir * 240,
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
    <section className="py-14 sm:py-16 bg-[#F3F3F3]">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Baloo_2'] text-[28px] sm:text-[32px] lg:text-[36px] text-[#2A2A2A]">
          Popular Categories
        </h2>

        <p className="mt-2 text-[#6F6F6F] text-sm sm:text-base">
          Pick what you love most! These categories have everything you need to
          learn something awesome ✨
        </p>

        <div className="relative mt-12">
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
            className="flex justify-start lg:justify-center gap-5 py-16 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {categories.map((cat) => {
              const active = activeId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`
                    relative
                    min-w-45
                    h-27.5
                    rounded-2xl overflow-visible
                    border
                    flex items-center
                    px-5
                    transition-all duration-300
                    group
                    ${
                      active
                        ? `${cat.activeBg} ${cat.glow} border-transparent text-white`
                        : "bg-white border-[#E5E5E5] hover:shadow-md"
                    }
                  `}
                >
                  <span
                    className={`text-[15px] font-semibold text-left pr-16 leading-tight ${
                      active ? "text-white" : "text-[#2A2A2A]"
                    }`}
                  >
                    {cat.name}
                  </span>

                  <div className="absolute -right-1 bottom-6 w-24.5 h-24.5 flex items-end justify-center pointer-events-none">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`
                        max-w-full max-h-full object-contain
                        transition-all duration-300
                        ${
                          active
                            ? "-translate-y-10 scale-110"
                            : "group-hover:-translate-y-4"
                        }
                      `}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* COURSES CAROUSEL */}
        <div className="relative mt-6">
          {courseCanLeft && (
            <button
              onClick={() => scrollCourses(-1)}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft />
            </button>
          )}

          {courseCanRight && (
            <button
              onClick={() => scrollCourses(1)}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight />
            </button>
          )}

          <div
            ref={courseScrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
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