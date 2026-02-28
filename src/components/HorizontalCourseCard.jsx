import { Clock, ShoppingCart, Users, Star } from "lucide-react";
import { useState } from "react";

export default function HorizontalCourseCard({ course, sectionTitle }) {
  const [touched, setTouched] = useState(false);

  const isNewLaunch = sectionTitle === "New Launches";

  return (
    <div className="shrink-0 w-85 sm:w-95">
      <div
        onTouchStart={() => setTouched(true)}
        onTouchEnd={() => setTimeout(() => setTouched(false), 180)}
        className={`
          relative
          bg-white
          rounded-2xl
          border mt-4 mb-2
          p-3
          flex gap-3 items-start
          transition-all duration-300
          group
          cursor-pointer
          ${
            isNewLaunch
              ? `
                border-[#E5E5E5]
                hover:border-blue-500
                hover:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]
                ${touched ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" : ""}
              `
              : `
                border-[#E5E5E5]
                hover:border-purple-500
                hover:shadow-[0_0_0_3px_rgba(168,85,247,0.18)]
                ${touched ? "border-purple-500 shadow-[0_0_0_3px_rgba(168,85,247,0.18)]" : ""}
              `
          }
        `}
      >
        {course.tag && (
          <img
            src="/selling-fast.png"
            alt="Selling Fast"
            className="absolute -top-4 -left-2 h-8 w-auto z-20 select-none pointer-events-none drop-shadow-sm"
          />
        )}

        {/* image */}
        <div className="relative w-35 h-23.75 rounded-xl overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* content */}
        <div className="flex-1 text-left">
          {/* rating */}
          <div className="text-[12px] text-[#6F6F6F] flex items-center gap-1 mb-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span>4.9 | 200+ learners</span>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-1 mb-1">
            <span className="px-2 py-0.5 text-[10px] rounded-full border border-blue-300 text-blue-600 bg-blue-50">
              {course.category[0]}
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded-full border border-pink-300 text-pink-600 bg-pink-50">
              {course.category[1]}
            </span>
            <span className="px-2 py-0.5 text-[10px] rounded-full border border-yellow-400 text-yellow-700 bg-yellow-50">
              {course.category[2]}
            </span>
          </div>

          {/* title */}
          <h3 className="text-[13px] font-semibold text-[#2A2A2A] line-clamp-2">
            {course.title}
          </h3>

          {/* author */}
          <p className="text-[11px] text-[#6F6F6F] mt-1">
            By: <span className="font-medium">Daniel james</span>
          </p>

          {/* footer */}
          <div className="flex items-center justify-between mt-2 text-[12px] text-[#444]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Users size={13} /> {course.age}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} /> {course.lessons}
              </span>
              <span className="font-semibold">₹ {course.price}</span>
            </div>

            <button className="h-8 w-8 rounded-full bg-[#F3F3F3] flex items-center justify-center hover:bg-[#EAEAEA] transition">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
