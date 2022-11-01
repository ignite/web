import { Link } from "react-router-dom";
import cx from "classnames";
import { ReactNode, useRef } from "react";
interface IgntButtonProps {
  link?: string;
  href?: string;
  target?: string;
  type?: string;
  disabled?: boolean;
  busy?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function IgntButton(props: IgntButtonProps) {
  const { link, disabled, type, busy, target, href, children, onClick, className } = props;
  const [dots, setDots] = useState("");
  const waiting = () => {
    if (dots.current == "...") {
      dots.current = "";
    } else {
      dots.current += ".";
    }
    setTimeout(waiting, 750);
  };
  waiting();
  console.log(type == "primary" && !busy && !disabled);
  return link ? (
    <Link
      to={!disabled && !busy ? link : ""}
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2":
          type == "primary" && !busy && !disabled,
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2":
          type == "secondary" && !busy && !disabled,
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain" && !busy && !disabled,
        "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50":
          type == "primary" && (busy || disabled),
        "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50":
          type == "secondary" && (busy || disabled),
        "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50":
          type == "plain" && (busy || disabled),
        [className ?? ""]: !!className,
      })}
    >
      {!busy ? <span>{children}</span> : <div>{dots.current}</div>}
    </Link>
  ) : href ? (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={!disabled && !busy ? href : undefined}
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2":
          type == "primary" && !busy && !disabled,
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2":
          type == "secondary" && !busy && !disabled,
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain" && !busy && !disabled,
        "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50":
          type == "primary" && (busy || disabled),
        "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50":
          type == "secondary" && (busy || disabled),
        "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50":
          type == "plain" && (busy || disabled),
        [className ?? ""]: !!className,
      })}
      target={target}
    >
      {!busy ? <span>{children}</span> : <div>{dots.current}</div>}
    </a>
  ) : (
    <button
      type="button"
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2":
          type == "primary" && !busy && !disabled,
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2":
          type == "secondary" && !busy && !disabled,
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain" && !busy && !disabled,
        "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50":
          type == "primary" && (busy || disabled),
        "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50":
          type == "secondary" && (busy || disabled),
        "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50":
          type == "plain" && (busy || disabled),
        [className ?? ""]: !!className,
      })}
      onClick={onClick}
      disabled={disabled || busy}
    >
      {!busy ? <span>{children}</span> : <div>{dots.current}</div>}
    </button>
  );
}
IgntButton.defaultProps = {
  type: "primary",
  disabled: false,
  busy: false,
};
