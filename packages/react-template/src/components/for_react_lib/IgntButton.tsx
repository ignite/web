import { Link } from "react-router-dom";
import cx from "classnames";
import { ReactNode } from "react";
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
  return link ? (
    <Link
      to={!disabled ? link : ""}
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": type == "primary",
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": type == "secondary",
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain",
        [className ?? ""]: !!className,
      })}
    >
      <span className="sp-button__text">{children}</span>
      <div className="sp-button__loading">
        <div className="sp-icon sp-icon-Reload"></div>
      </div>
    </Link>
  ) : href ? (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href={!disabled ? href : undefined}
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": type == "primary",
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": type == "secondary",
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain",
        [className ?? ""]: !!className,
      })}
      target={target}
    >
      <span className="sp-button__text">{children}</span>
      <div className="sp-button__loading">
        <div className="sp-icon sp-icon-Reload"></div>
      </div>
    </a>
  ) : (
    <button
      type="button"
      className={cx({
        "font-normal text-md rounded-lg": true,
        "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": type == "primary",
        "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": type == "secondary",
        "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100":
          type == "plain",
        [className ?? ""]: !!className,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="sp-button__text">{children}</span>
      <div className="sp-button__loading">
        <div className="sp-icon sp-icon-Reload"></div>
      </div>
    </button>
  );
}
IgntButton.defaultProps = {
  type: "primary",
  disabled: false,
};
