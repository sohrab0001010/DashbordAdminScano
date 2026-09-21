import React from "react";
import { PulsingBorder } from "@paper-design/shaders-react"

const GlowingBorder = ({ children }) => {
  return (
    <div className="relative w-full h-full">

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Animated Border */}
      <PulsingBorder
        colors={[
          "#38BDF8",
          "#A855F7",
          "#22C55E",
          "#FACC15"
        ]}
        colorBack="rgba(0,0,0,0)"
        roundness={0.2}
        thickness={0.08}
        softness={0.7}
        intensity={0.4}
        bloom={0.6}
        spots={3}
        spotSize={0.5}
        pulse={0}
        smoke={0.35}
        smokeSize={0.63}
        speed={1}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

    </div>
  );
};

export default GlowingBorder;