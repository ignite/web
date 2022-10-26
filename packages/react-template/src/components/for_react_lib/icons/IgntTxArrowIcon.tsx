export default function IgntTxArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
      style={{ width: "1em", height: "1em" }}
    >
      <path
        d="M8 13V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6L8 2L12 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
