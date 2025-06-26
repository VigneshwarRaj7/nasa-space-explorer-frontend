// components/HoverDialog.jsx
import React, { useEffect, useState } from "react";

export default function HoverDialogue({ text, visible }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (visible) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 40); // typing speed
      return () => clearInterval(interval);
    } else {
      setDisplayedText("");
    }
  }, [visible, text]);

  

  return visible ? (
    <div id="card-purple" className=" mt-40 ml-50  w-max backdrop-blur-sm bg-opacity-70 text-white text-sm p-2 rounded-md shadow-md z-50 font-orbitron">
      {displayedText}
    </div>
  ) : null;
}