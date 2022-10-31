export default function IgntTimesIcon({ className }: { className?: string }) {
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
      <path d="M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M15 15L1 1" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
    </svg>
  );
}
