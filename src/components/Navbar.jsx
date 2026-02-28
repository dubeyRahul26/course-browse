import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5E7EB] shadow-[0_7px_29px_rgba(100,100,111,0.2)]">
      <div className="mx-auto max-w-360 h-19 px-4 sm:px-6 md:px-10 lg:px-29 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-['Baloo_2'] font-bold text-[#090909] text-xl leading-none">
            Logo
          </div>
          <a className="relative hidden md:inline-block px-2 py-1 font-normal text-[#7110CC]">
            Course
            <span className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#FA127B] to-[#7110CC]" />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <button className="h-9 px-4 rounded-lg font-['Poppins'] font-medium text-[14px] leading-5 text-[#17142A] transition-all duration-200 hover:bg-black/5 active:scale-[0.98]">
            Login
          </button>

          <button className="w-38 h-9 px-4 py-3 rounded-[40px] bg-linear-to-r from-[#57029C] to-[#F700AC] text-white font-medium flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
            Register for free
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#090909] transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#090909] transition-all duration-300 ${
              open && "opacity-0"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#090909] transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-5 flex flex-col gap-3">
            <a className="group relative inline-flex items-center px-3 py-2 font-normal text-[#7110CC] rounded-lg transition-all duration-200 active:scale-[0.98] w-fit">
              Course
              <span className="hidden md:block absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#FA127B] to-[#7110CC]" />
              <span className="absolute inset-0 rounded-lg bg-[#7110CC]/0 group-active:bg-[#7110CC]/10 transition-colors duration-200 md:hidden" />
            </a>

            <button className="text-left px-3 py-2 rounded-lg font-['Poppins'] font-medium text-[14px] leading-5 text-[#17142A] transition-all duration-200 active:bg-black/5 active:scale-[0.98]">
              Login
            </button>

            <button className="mt-2 w-full h-9 px-4 py-3 rounded-[40px] bg-linear-to-r from-[#57029C] to-[#F700AC] text-white font-medium flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
              Register for free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}