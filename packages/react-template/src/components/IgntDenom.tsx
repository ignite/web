import { useMemo } from "react";
import { useDenom } from "../def-hooks/useDenom";

import "./IgntDenom.css";

type Modifier = "avatar" | "path" | "base";
type Size = "small" | "medium" | "large";
interface IgntDenomProps {
  denom: string;
  modifier?: Modifier;
  size?: Size;
  shorten?: boolean;
  className?: string;
}
export default function IgntDenom(props: IgntDenomProps) {
  const { normalized, pathExtracted } = useDenom(props.denom);
  const short = useMemo(() => {
    if (normalized.length > 15) {
      return normalized.slice(0, 4) + "..." + normalized.slice(-4);
    } else {
      return normalized;
    }
  }, [normalized]);

  return (
    <>
      {props.modifier === "base" && (
        <span title={normalized} className={props.className ?? ""}>
          {props.shorten ? short : normalized}
        </span>
      )}
      {props.modifier === "path" && pathExtracted && pathExtracted.length > 0 && (
        <span title={normalized} className={props.className ?? ""}>
          Channels
          {pathExtracted.map((channel, index) => (
            <span key={index}>{channel}</span>
          ))}
        </span>
      )}
      {props.modifier === "avatar" && (
        <div className={`token-avatar token-avatar--${props.size} ${props.className ?? ""}`} title={normalized}>
          {short.slice(0, 1)}
        </div>
      )}
    </>
  );
}
IgntDenom.defaultProps = {
  modifier: "base",
  size: "medium",
  shorten: true,
};
