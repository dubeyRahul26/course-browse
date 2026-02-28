import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AgeFilter() {
  const [selectedAge, setSelectedAge] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  const ages = [
    { label: "1-2", color: "yellow" },
    { label: "2-3", color: "yellow" },
    { label: "3-4", color: "yellow" },
    { label: "4-5", color: "orange" },
    { label: "5-6", color: "orange" },
    { label: "6-7", color: "orange" },
    { label: "7-8", color: "pink" },
    { label: "8-9", color: "pink" },
    { label: "9-10", color: "pink" },
    { label: "10-11", color: "pink" },
    { label: "11-12", color: "pink" },
    { label: "12-13", color: "green" },
    { label: "13-14", color: "green" },
    { label: "14-15", color: "green" },
    { label: "15-16", color: "green" },
    { label: "16-17", color: "blue" },
    { label: "17-18", color: "blue" },
    { label: "18-19", color: "blue" },
    { label: "19-20", color: "blue" },
  ];

  const styles = {
    yellow: {
      border: "border-[#FACC15]",
      active: "bg-[#FACC15] text-black border-[#FACC15]",
      hover: "hover:border-[#FACC15]",
    },
    orange: {
      border: "border-[#FB923C]",
      active: "bg-[#FB923C] text-black border-[#FB923C]",
      hover: "hover:border-[#FB923C]",
    },
    pink: {
      border: "border-[#E879F9]",
      active: "bg-[#E879F9] text-black border-[#E879F9]",
      hover: "hover:border-[#E879F9]",
    },
    green: {
      border: "border-[#34D399]",
      active: "bg-[#34D399] text-black border-[#34D399]",
      hover: "hover:border-[#34D399]",
    },
    blue: {
      border: "border-[#38BDF8]",
      active: "bg-[#38BDF8] text-black border-[#38BDF8]",
      hover: "hover:border-[#38BDF8]",
    },
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const tolerance = 2;

    setCanScrollLeft(el.scrollLeft > tolerance);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance,
    );
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="bg-[#ffffff] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Baloo_2'] text-[#2A2A2A] text-[28px] sm:text-[32px] lg:text-[40px]">
          How Old Are You? 🎯
        </h2>

        <p className="mt-2 text-[#6F6F6F] text-sm sm:text-base">
          Pick your age and find the perfect courses just for you! ✨
        </p>

        <div className="relative mt-8">
          {canScrollLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-110 active:scale-95 transition"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth p-2"
          >
            {ages.map((age) => {
              const isActive = selectedAge === age.label;
              const theme = styles[age.color];

              return (
                <button
                  key={age.label}
                  onClick={() => setSelectedAge(age.label)}
                  className={`
                    shrink-0
                    min-w-18 sm:min-w-20.5
                    px-3 sm:px-4 py-2 sm:py-2.5
                    rounded-xl border-2
                    text-xs sm:text-sm font-medium
                    transition-all duration-200
                    transform
                    ${
                      isActive
                        ? `${theme.active} scale-105 shadow-md`
                        : `bg-white ${theme.border} ${theme.hover} text-[#2A2A2A] hover:scale-105`
                    }
                  `}
                >
                  <span className="block leading-tight">{age.label}</span>
                  <span className="block text-[10px] sm:text-[11px] text-[#2A2A2A]">
                    Years
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
