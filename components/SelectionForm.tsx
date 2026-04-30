"use client";

import { useState } from "react";

type SelectionFormProps = {
  title: string;
  options: string[];
  cta: string;
};

export default function SelectionForm({ title, options, cta }: SelectionFormProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (opt: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return next;
    });
  };

  return (
    <div>
      <h2
        className="text-[#000E47] font-bold mb-5"
        style={{ fontSize: "18px", lineHeight: "26px" }}
      >
        {title}
      </h2>

      {/* Grille 2 colonnes — multi-select */}
      <div className="grid grid-cols-2 gap-3 mb-7">
        {options.map((opt) => {
          const isOn = selected.has(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className={[
                "flex items-center gap-3 text-left px-4 py-3 rounded-xl border-2 transition-all duration-150",
                isOn
                  ? "border-[#005EFF] bg-[#E1F3FF]"
                  : "border-[#E9E9E9] bg-white hover:border-[#C5D8FF] hover:bg-[#F2F9FD]",
              ].join(" ")}
            >
              {/* Case à cocher */}
              <div
                className={[
                  "w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-150",
                  isOn ? "border-[#005EFF] bg-[#005EFF]" : "border-[#BABFD6] bg-white",
                ].join(" ")}
              >
                {isOn && (
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontSize: "13px" }}
                  >
                    check
                  </span>
                )}
              </div>
              <span
                className={[
                  "text-sm font-medium leading-5",
                  isOn ? "text-[#005EFF]" : "text-[#000E47]",
                ].join(" ")}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        type="button"
        disabled={selected.size === 0}
        className={[
          "flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200",
          selected.size > 0
            ? "bg-[#005EFF] text-white hover:bg-[#0044CC] cursor-pointer"
            : "bg-[#E9E9E9] text-[#BABFD6] cursor-not-allowed",
        ].join(" ")}
      >
        {cta}
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
          arrow_forward
        </span>
      </button>
    </div>
  );
}
