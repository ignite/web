import SVG from "react-inlinesvg";
import { MD5 } from "crypto-js";
import avatar from "gradient-avatar";
import "./IgntProfileIcon.css";

export default function IgntProfileIcon({ className, address }: { className?: string; address: string }) {
  const getAvatar = () => {
    return avatar(MD5(address) + "", 64);
  };
  return (
    <div className={"avatar " + className}>
      <SVG src={getAvatar()}></SVG>
    </div>
  );
}
