"use client";

import * as React from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeInUp({
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 24,
  ...props
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxLayer({
  children,
  className,
  offset = 60,
}: ParallaxContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function HeroParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="h-full w-full object-cover will-change-transform"
      />
    </div>
  );
}

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let frameId: number;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
