"use client";

import React, { useEffect, useRef, useState } from "react";

// TODO: make distance dynamic
export default function DistanceCompleted({ distance = 7000 }) {
  const totalDistance = 7875;
  const percentage = Math.min(distance / totalDistance, 1);

  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="bg-dusty-blue flex h-32 w-60 items-center justify-center rounded-xl">
      <svg width="240" height="180" viewBox="0 0 240 180">
        <g transform="scale(0.8) translate(10, -25)">
          {/* Track */}
          <path
            ref={pathRef}
            d="M40,120
            L100,80
            Q120,60 180,90
            L230,120
            Q270,150 220,180
            L160,200
            Q120,200 110,190
            L50,160
            Q30,150 40,120 Z"
            fill="none"
            stroke="lightgray"
            strokeWidth="12"
          />
          {/* Progress */}
          <path
            d="M40,120
            L100,80
            Q120,60 180,90
            L230,120
            Q270,150 220,180
            L160,200
            Q120,200 110,190
            L50,160
            Q30,150 40,120 Z"
            fill="none"
            stroke="#8E9FCA"
            strokeWidth="12"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - percentage)}
            strokeLinecap="round"
          />
        </g>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fill="white"
        >
          {distance.toFixed(2)} km
        </text>
      </svg>
    </div>
  );
}
