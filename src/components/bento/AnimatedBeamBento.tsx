import React, { forwardRef, useRef, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const GmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42">
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          fill="#4285f4"
          d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
        />
        <path
          fill="#34a853"
          d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
        />
        <path
          fill="#fbbc04"
          d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
        />
      </g>
      <path
        fill="#ea4335"
        d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
      />
      <path
        fill="#c5221f"
        fillRule="nonzero"
        d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
      />
    </g>
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 256 259"
    width="256"
    height="259"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
      fill="#00E676"
    />
    <path
      d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
      fill="#FFF"
    />
  </svg>
);

// Animation wrapper component for circles that follow a quadratic bezier path
const PathFollowingCircle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    containerRef: React.RefObject<HTMLDivElement | null>;
    fromRef: React.RefObject<HTMLDivElement | null>;
    toRef: React.RefObject<HTMLDivElement | null>;
    curvature?: number;
    delay?: number;
    cloneIcon?: boolean;
  }
>(
  (
    {
      className,
      children,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      delay = 0,
      cloneIcon = true,
    },
    ref
  ) => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [isCloneVisible, setIsCloneVisible] = useState(false);
    const [clone, setClone] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
      const circle = circleRef.current;
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;

      if (!circle || !container || !from || !to) return;

      // Create a clone that will move along the path
      if (cloneIcon && !clone) {
        const newClone = circle.cloneNode(true) as HTMLDivElement;
        newClone.style.position = "absolute";
        newClone.style.pointerEvents = "none";
        newClone.style.zIndex = "20";
        container.appendChild(newClone);
        setClone(newClone);
      }

      // Function to calculate point on quadratic bezier curve
      const getQuadraticBezierXY = (
        t: number,
        sx: number,
        sy: number,
        cx: number,
        cy: number,
        ex: number,
        ey: number
      ) => {
        return {
          x:
            Math.pow(1 - t, 2) * sx +
            2 * (1 - t) * t * cx +
            Math.pow(t, 2) * ex,
          y:
            Math.pow(1 - t, 2) * sy +
            2 * (1 - t) * t * cy +
            Math.pow(t, 2) * ey,
        };
      };

      // Animation function
      const animateAlongPath = () => {
        const containerRect = container.getBoundingClientRect();
        const fromRect = from.getBoundingClientRect();
        const toRect = to.getBoundingClientRect();

        // Calculate start and end points relative to container
        const startX = fromRect.left - containerRect.left + fromRect.width / 2;
        const startY = fromRect.top - containerRect.top + fromRect.height / 2;
        const endX = toRect.left - containerRect.left + toRect.width / 2;
        const endY = toRect.top - containerRect.top + toRect.height / 2;

        // Calculate control point for the quadratic bezier (matching the beam)
        const controlY = startY - curvature;
        const controlX = (startX + endX) / 2;

        let start = performance.now() + delay * 1000;
        const duration = 3000; // 3 seconds for the animation

        // Show the clone
        if (clone) {
          clone.style.opacity = "1";
          setIsCloneVisible(true);
        }

        const animate = (time: number) => {
          if (time < start) {
            requestAnimationFrame(animate);
            return;
          }

          const elapsed = time - start;
          let progress = Math.min(elapsed / duration, 1);

          // Calculate current position on the path
          const point = getQuadraticBezierXY(
            progress,
            startX,
            startY,
            controlX,
            controlY,
            endX,
            endY
          );

          // Apply position to clone
          if (clone) {
            clone.style.transform = `translate(${
              point.x - clone.offsetWidth / 2
            }px, ${point.y - clone.offsetHeight / 2}px) scale(${
              1 - progress * 0.5
            })`;
            clone.style.opacity = (1 - progress).toString();
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Reset for next animation
            setTimeout(() => {
              if (clone) {
                // Teleport clone back to start (with no animation)
                clone.style.transition = "none";
                clone.style.transform = `translate(${
                  startX - clone.offsetWidth / 2
                }px, ${startY - clone.offsetHeight / 2}px) scale(1)`;
                clone.style.opacity = "0";

                // Force reflow
                clone.offsetHeight;

                // Restore transition
                clone.style.transition = "transform 3s, opacity 3s";

                // Start next cycle
                requestAnimationFrame(animateAlongPath);
              }
            }, 500);
          }
        };

        requestAnimationFrame(animate);
      };

      // Start the animation after a delay
      const timer = setTimeout(() => {
        if (clone) {
          clone.style.transition = "transform 3s, opacity 3s";
          animateAlongPath();
        }
      }, 100);

      return () => {
        // Clean up
        clearTimeout(timer);
        if (clone && container.contains(clone)) {
          container.removeChild(clone);
        }
      };
    }, [containerRef, fromRef, toRef, curvature, delay, cloneIcon, clone]);

    return (
      <div
        ref={(node) => {
          // Handle both refs
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          circleRef.current = node;
        }}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

PathFollowingCircle.displayName = "PathFollowingCircle";

// Regular Circle component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  // Curvature values for each beam
  const curvatures = [0, 0, 0, 0];

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden h-full p-2",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <PathFollowingCircle
            ref={div1Ref}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div5Ref}
            curvature={curvatures[0]}
            delay={0}
          >
            <img src="/icons/excel.webp" alt="Excel Icon" title="Excel Icon" />
          </PathFollowingCircle>
          <PathFollowingCircle
            ref={div2Ref}
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div5Ref}
            curvature={curvatures[1]}
            delay={1.5}
          >
            <GmailIcon />
          </PathFollowingCircle>
          <PathFollowingCircle
            ref={div3Ref}
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div5Ref}
            curvature={curvatures[2]}
            delay={3}
          >
            <WhatsAppIcon />
          </PathFollowingCircle>
          <PathFollowingCircle
            ref={div4Ref}
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div5Ref}
            curvature={curvatures[3]}
            delay={4.5}
          >
            <img src="/icons/pdf.webp" alt="PDF Icon" />
          </PathFollowingCircle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div5Ref} className="aspect-[512/512] size-24 p-1">
            <img
              src="/logo/logo_hd_opt.png"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={curvatures[0]}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div5Ref}
        curvature={curvatures[1]}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div5Ref}
        curvature={curvatures[2]}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={curvatures[3]}
        duration={3}
      />
    </div>
  );
}
