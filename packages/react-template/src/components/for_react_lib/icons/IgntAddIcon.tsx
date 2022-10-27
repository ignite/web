export default function IgntAddIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <circle cx="16" cy="16" r="15.5" stroke="black" strokeOpacity="0.07" />
      <g clipPath="url(#clip0_721_8528)">
        <path
          d="M16 8.5L16 24.5"
          stroke="black"
          strokeOpacity="0.33"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M24 16.5L8 16.5"
          stroke="black"
          strokeOpacity="0.33"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_721_8528">
          <rect width="16" height="16" fill="white" transform="translate(8 8.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
