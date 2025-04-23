import { useEffect } from "react";

export default function ScrollBlocker() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflowY = "hidden";
    body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      html.style.overflowY = "auto";
      body.style.overflowY = "auto";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
