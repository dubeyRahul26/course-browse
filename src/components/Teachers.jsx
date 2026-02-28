import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeacherCard from "./TeacherCard";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "Computer science",
      image: "/teacher.png",
      color: "from-orange-500 to-orange-400",
    },
    {
      id: 2,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "English",
      image: "/teacher.png",
      color: "from-pink-500 to-fuchsia-500",
    },
    {
      id: 3,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "Early educator",
      image: "/teacher.png",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "Coding",
      image: "/teacher.png",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "Computer science",
      image: "/teacher.png",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 6,
      name: "Andy Brew",
      degree: "M.Sc, B.Ed | 15+ Years",
      students: "1000+ Students",
      tag: "Computer science",
      image: "/teacher.png",
      color: "from-indigo-600 to-blue-700",
    },
  ];

  const scrollRef = useRef(null);
  const courseScrollRef = useRef(null);

  const [activeId, setActiveId] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const [courseCanLeft, setCourseCanLeft] = useState(false);
  const [courseCanRight, setCourseCanRight] = useState(false);

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

    const el1 = scrollRef.current;
    const el2 = courseScrollRef.current;

    el1?.addEventListener("scroll", update);
    el2?.addEventListener("scroll", updateCourses);

    window.addEventListener("resize", update);
    window.addEventListener("resize", updateCourses);

    return () => {
      el1?.removeEventListener("scroll", update);
      el2?.removeEventListener("scroll", updateCourses);
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", updateCourses);
    };
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir * 260,
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
    <section className="py-14 sm:py-16 bg-[#ffffff]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Baloo_2'] text-[28px] sm:text-[32px] lg:text-[36px] text-[#2A2A2A]">
          Learn from Top Teachers
        </h2>

        <p className="mt-2 text-[#6F6F6F] text-sm sm:text-base">
          Expert instructors who make learning fun and engaging for every child
        </p>

        {/* TEACHERS CAROUSEL */}
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
            className="flex gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>

            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                active={activeId === teacher.id}
                onClick={() => setActiveId(teacher.id)}
              />
            ))}
          </div>
        </div>

        {/*  COURSES CAROUSEL  */}
        <div className="relative mt-14">
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