import { useState } from "react";

export default function EffectiveCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      onPointerMove={handlePointerMove}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          background: "lime",
          borderRadius: "50%",
          left: -10,
          top: -10,
          width: "20px",
          height: "20px",
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
