export default function IgntChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 -2 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
      style={{ width: "1em", height: "1em" }}
    >
      <path d="M10 2L6 6L2 2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    </svg>
  );
}
