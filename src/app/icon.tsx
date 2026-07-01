import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121212",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          border: "1px solid rgba(201, 168, 76, 0.3)",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 48 56"
          width="24"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="iconGold" x1="0.1" y1="0.1" x2="0.9" y2="0.9">
              <stop offset="0%" stopColor="#FFF2D4" />
              <stop offset="50%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#8C6F1E" />
            </linearGradient>
            <linearGradient id="iconGoldLight" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#E8C96D" />
              <stop offset="100%" stopColor="#FFFDF7" />
            </linearGradient>
          </defs>

          {/* Left Stroke of the geometric V */}
          <path
            d="M8 12 L20 44 L25 44 L13 12 Z"
            fill="url(#iconGold)"
          />
          {/* Right Stroke of the geometric V */}
          <path
            d="M23 44 L35 12 L31 12 L19 44 Z"
            fill="url(#iconGoldLight)"
            opacity="0.85"
          />
          {/* Elegant four-pointed vital spark / AI star */}
          <path
            d="M34 10 Q34 16 40 16 Q34 16 34 22 Q34 16 28 16 Q34 16 34 10 Z"
            fill="url(#iconGold)"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
