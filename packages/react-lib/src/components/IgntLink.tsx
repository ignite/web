import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
interface IgntLinkProps {
  item: MenuItem;
}
export default function IgntLink(props: IgntLinkProps) {
  const location = useLocation();
  const { item } = props;
  const [isActive, setActive] = useState(item.to == location.pathname);

  useEffect(() => {
    setActive(item.to == location.pathname);
  }, [location.pathname]);

  if (item.to) {
    return (
      <Link to={item.to} className={isActive ? "opacity-100 font-medium" : "opacity-50"}>
        {item.label}
      </Link>
    );
  } else {
    return (
      <a href="{item.href}" className={isActive ? "opacity-100 font-medium" : "opacity-50"}>
        {item.label}
      </a>
    );
  }
}
