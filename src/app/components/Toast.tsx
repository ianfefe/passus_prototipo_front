import { useState, useEffect } from "react";

export function Toast({ message, onClose }: { message: string, onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-[#1E3A5F] text-white px-6 py-3 rounded-2xl shadow-xl z-[999] font-bold text-sm flex items-center gap-2">
      <span className="text-emerald-400">✓</span> {message}
    </div>
  );
}