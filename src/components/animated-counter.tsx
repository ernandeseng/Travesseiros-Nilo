"use client";

import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  className?: string;
  startOnVisible?: boolean;
};

export function AnimatedCounter({
  target,
  duration = 2000,
  className,
  startOnVisible = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (startOnVisible && !isVisible) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * target));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target, duration, isVisible, startOnVisible]);

  return <span ref={ref} className={className}>{count.toLocaleString('pt-BR')}</span>;
}

function useIntersectionObserver(ref: React.RefObject<Element>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}
