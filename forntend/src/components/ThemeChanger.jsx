import { useEffect, useState } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";

const colors = [
  { name: "Gold", value: "#D6B875" },
  { name: "Green", value: "#A8EB12" },
  { name: "Blue", value: "#38BDF8" },
  { name: "Purple", value: "#C084FC" },
  { name: "Pink", value: "#F472B6" },
  { name: "Orange", value: "#FB923C" },
  { name: "Red", value: "#F87171" },
  { name: "Yellow", value: "#FACC15" },
  { name: "Cyan", value: "#22D3EE" },
];

export default function ThemeChanger() {
  const [color, setColor] = useState(
    () => localStorage.getItem("portfolioTheme") || "#D6B875"
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
    localStorage.setItem("portfolioTheme", color);
  }, [color]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen && (
        <div className="mb-4 w-64 rounded-2xl border border-white/10 bg-[#071A2F] p-5 text-white shadow-2xl">
          <h3 className="mb-1 text-lg font-bold">Change Theme</h3>

          <p className="mb-4 text-sm text-gray-400">
            Choose your favorite color
          </p>

          <div className="grid grid-cols-4 gap-3">
            {colors.map((item) => (
              <button
                key={item.value}
                type="button"
                title={item.name}
                aria-label={`Choose ${item.name} theme`}
                onClick={() => setColor(item.value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 transition hover:scale-110"
                style={{ backgroundColor: item.value }}
              >
                {color.toLowerCase() === item.value.toLowerCase() && (
                  <FaCheck className="text-black" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <label className="mb-2 block text-sm text-gray-300">
              Custom Color
            </label>

            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-10 w-12 cursor-pointer rounded"
                aria-label="Choose custom color"
              />

              <span className="text-sm uppercase">{color}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setColor("#D6B875")}
            className="mt-4 w-full rounded-lg border border-white/20 py-2 text-sm transition hover:bg-white/10"
          >
            Reset Default
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-2 text-sm text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        title="Change Theme Color"
        aria-label="Open theme color settings"
        className="flex h-14 w-14 items-center justify-center rounded-full text-2xl text-[#051937] shadow-xl transition hover:scale-110"
        style={{ backgroundColor: "var(--theme-color)" }}
      >
        <FaPalette />
      </button>
    </div>
  );
}