import { Clock, ShoppingCart, Users, Star } from "lucide-react";
import { useState } from "react";

export default function CourseCard({ course, sectionTitle }) {
  const [touched, setTouched] = useState(false);

  const isNewLaunch = sectionTitle === "New Launches";

  return (
    <div className="shrink-0 w-65 sm:w-70 lg:w-75 py-2">
      <div className="text-[13px] text-[#6F6F6F] flex items-center justify-end gap-1 mb-2">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        <span>4.9 | 200+ learners</span>
      </div>

      <div
        onTouchStart={() => setTouched(true)}
        onTouchEnd={() => setTimeout(() => setTouched(false), 180)}
        className={`
          relative
          bg-white
          rounded-[22px]
          p-3
          cursor-pointer
          border
          transition-all
          duration-300
          group
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
            className="absolute -top-3 -left-1 h-8 w-auto z-20 select-none pointer-events-none"
          />
        )}

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 text-xs rounded-full border border-blue-300 text-blue-600 bg-blue-50">
            {course.category[0]}
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-pink-300 text-pink-600 bg-pink-50">
            {course.category[1]}
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-yellow-400 text-yellow-700 bg-yellow-50">
            {course.category[2]}
          </span>
        </div>

        <h3 className="mt-3 text-[15px] font-semibold text-[#2A2A2A] line-clamp-2">
          {course.title}
        </h3>

        <p className="mt-2 text-[13px] text-[#6F6F6F] line-clamp-2">
          Build circuits & smart projects like alarms, weather stations, etc
        </p>

        {!isNewLaunch && (
          <div className="flex items-center gap-2 mt-3">
            <img
              src="/avatar.png"
              alt="teacher"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-[#444]">
              By: <span className="font-medium">Daniel james</span>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 text-sm text-[#444]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Users size={16} /> {course.age}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {course.lessons}
            </span>
            <span className="flex items-center gap-1 font-semibold">
              ₹ {course.price}
            </span>
          </div>

          <button className="h-9 w-9 rounded-full bg-[#F3F3F3] flex items-center justify-center hover:bg-[#EAEAEA] transition">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}