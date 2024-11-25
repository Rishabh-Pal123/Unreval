import { useEffect, useState } from "react";

export const useLazyMedia = (ref: React.RefObject<HTMLElement>) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const currentElement = ref.current;
    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [ref]);

  return { visible };
};
