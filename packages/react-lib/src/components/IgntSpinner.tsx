import { useEffect, useState } from "react";
import "./IgntSpinner.css";
interface IgntSpinnerProps {
  size?: number;
  className?: string;
}
export default function IgntSpinner(props: IgntSpinnerProps) {
  const [strokeWidth, setStrokeWidth] = useState(4);
  useEffect(() => {
    if (props.size && props.size > 32) {
      setStrokeWidth(3);
    } else {
      setStrokeWidth(4);
    }
  }, [props.size]);
  return (
    <svg
      className={`animate-spin ${props.className ? props.className : ""}`}
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: props.size + "px", height: props.size + "px" }}
    >
      <path
        d="M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30"
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
IgntSpinner.defaultProps = {
  size: 32,
};
