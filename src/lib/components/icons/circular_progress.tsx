export default function CircularInfo() {
  return (
    <div className="relative h-40 w-40">
      <svg
        className="h-full w-full"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-gray-700"
          stroke-width="2"
        ></circle>

        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-blue-600 dark:text-blue-500"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset="75"
          ></circle>
        </g>
      </svg>
    </div>
  );
}
