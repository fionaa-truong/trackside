export default function RacesCompleted() {
  const totalRaces = 24;
  const completed = 12; // TODO: make dynamic
  const percentage = completed / totalRaces;

  // Gauge math
  const radiusOuter = 100;
  const radiusInner = 80;
  const angle = percentage * 180;
  const angleRad = Math.PI - (angle * Math.PI) / 180;

  // Needle geometry
  const needleLength = 98;
  const baseThin = 4;
  const midThick = 8;
  const midPos = 25;

  // Points of needle
  const tipX = 130 + needleLength * Math.cos(angleRad);
  const tipY = 130 - needleLength * Math.sin(angleRad);

  const midLeftX =
    130 +
    midPos * Math.cos(angleRad) +
    (midThick / 2) * Math.cos(angleRad + Math.PI / 2);
  const midLeftY =
    130 -
    midPos * Math.sin(angleRad) -
    (midThick / 2) * Math.sin(angleRad + Math.PI / 2);

  const midRightX =
    130 +
    midPos * Math.cos(angleRad) +
    (midThick / 2) * Math.cos(angleRad - Math.PI / 2);
  const midRightY =
    130 -
    midPos * Math.sin(angleRad) -
    (midThick / 2) * Math.sin(angleRad - Math.PI / 2);

  const baseLeftX = 130 + (baseThin / 2) * Math.cos(angleRad + Math.PI / 2);
  const baseLeftY = 130 - (baseThin / 2) * Math.sin(angleRad + Math.PI / 2);

  const baseRightX = 130 + (baseThin / 2) * Math.cos(angleRad - Math.PI / 2);
  const baseRightY = 130 - (baseThin / 2) * Math.sin(angleRad - Math.PI / 2);

  const tickInterval = 2;
  const ticks = Array.from(
    { length: totalRaces / tickInterval + 1 },
    (_, i) => i * tickInterval
  );

  return (
    // stack for small screens and make width wider
    <div className="bg-dusty-blue flex h-32 w-60 items-center justify-center rounded-2xl p-2">
      <svg width="260" height="140" viewBox="0 0 260 140">
        <path d="M 30 130 A 100 100 0 0 1 230 130 L 130 130 Z" fill="white" />

        <path
          d={`M ${130 - radiusInner} 130 
              A ${radiusInner} ${radiusInner} 0 0 1 ${130 + radiusInner} 130 
              L 130 130 Z`}
          fill="#333"
        />

        <polygon
          points={`
            ${baseLeftX},${baseLeftY}
            ${midLeftX},${midLeftY}
            ${tipX},${tipY}
            ${midRightX},${midRightY}
            ${baseRightX},${baseRightY}
          `}
          fill="red"
        />

        {ticks.map((tick) => {
          const tickAngle = (tick / totalRaces) * Math.PI;
          const x1 = 130 + radiusOuter * Math.cos(Math.PI - tickAngle);
          const y1 = 130 - radiusOuter * Math.sin(tickAngle);
          const x2 = 130 + (radiusOuter - 10) * Math.cos(Math.PI - tickAngle);
          const y2 = 130 - (radiusOuter - 10) * Math.sin(tickAngle);

          const labelX =
            130 + (radiusOuter + 15) * Math.cos(Math.PI - tickAngle);
          const labelY = 130 - (radiusOuter + 15) * Math.sin(tickAngle);

          return (
            <g key={tick}>
              {tick !== 0 && tick !== totalRaces && (
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="black"
                  strokeWidth={tick % 6 === 0 ? 2 : 1}
                />
              )}

              {tick % 6 === 0 && (
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="14"
                  fill="black"
                >
                  {tick}
                </text>
              )}
            </g>
          );
        })}

        <text x="130" y="100" textAnchor="middle" fontSize="28" fill="white">
          {completed}/{totalRaces}
        </text>
        <text x="130" y="120" textAnchor="middle" fontSize="16" fill="white">
          Races Completed
        </text>
      </svg>
    </div>
  );
}
