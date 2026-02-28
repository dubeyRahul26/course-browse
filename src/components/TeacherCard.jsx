import { useState } from "react";

export default function TeacherCard({ teacher, active, onClick }) {
  return (
    <div className="shrink-0 w-42.5 sm:w-47.5 pt-14 p-1">
      <div
        onClick={onClick}
        className={`
          relative
          rounded-[22px]
          px-4
          pt-12
          pb-4
          text-center
          cursor-pointer
          transition-all
          duration-300
          overflow-visible
          border
          ${
            active
              ? `bg-linear-to-br ${teacher.color} text-white border-transparent shadow-xl scale-[1.03]`
              : "bg-white border-2 border-[#a7a6a6] hover:shadow-md"
          }
        `}
      >
        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
          <div
            className={`
              h-20 w-20 rounded-full p-0.75
              ${
                active
                  ? `bg-linear-to-br ${teacher.color}` : " bg-gray-300 border-2 border-[#a7a6a6] hover:shadow-md"
              }
            `}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <h3 className="font-semibold text-[15px] mt-2">
          {teacher.name}
        </h3>

        <p
          className={`text-[11px] mt-1 ${
            active ? "text-white/90" : "text-[#6F6F6F]"
          }`}
        >
          {teacher.degree}
        </p>

        <p
          className={`text-[11px] ${
            active ? "text-white/90" : "text-[#6F6F6F]"
          }`}
        >
          {teacher.students}
        </p>

        <div className="mt-2">
          <span
            className={`
              inline-block px-3 py-1 text-[11px] rounded-full
              ${
                active
                  ? "bg-white/20 text-white border border-white/30"
                  : "border border-[#E5E5E5] bg-[#F7F7F7] text-[#444]"
              }
            `}
          >
            {teacher.tag}
          </span>
        </div>
      </div>
    </div>
  );
}