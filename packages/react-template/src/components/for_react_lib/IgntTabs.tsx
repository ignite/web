/* eslint-disable jsx-a11y/anchor-is-valid */
import { Children, cloneElement, ReactElement, ReactNode, useRef, useState } from "react";
import "./IgntTabs.css";

interface IgntTabsProps {
  className?: string;
  tabHeaderClasses?: string[];
  tabLinkClasses?: string[];
  activeLinkClasses?: string[];
  inactiveLinkClasses?: string[];
  tabContentClasses?: string[];
  children?: ReactNode;
}
export default function IgntTabs(props: IgntTabsProps) {
  const [active, setActive] = useState(0);
  const tabs = Children.toArray(props.children);
  const tabElement = useRef<HTMLDivElement>(null);

  return (
    <div className={props.className ?? ""}>
      <div className={props.tabHeaderClasses?.join(" ")}>
        {Children.map(tabs, (tab, index) => (
          <a
            href="javascript:void(0)"
            className={
              active != index
                ? [...(props.tabLinkClasses || []), ...(props.inactiveLinkClasses || [])].join(" ")
                : [...(props.tabLinkClasses || []), ...(props.activeLinkClasses || [])].join(" ")
            }
            key={"tab_" + index}
            onClick={() => {
              setActive(index);
            }}
          >
            {((tab as ReactElement).props as any).title}
          </a>
        ))}
      </div>
      <div className={"tabsContent " + (props.tabContentClasses || []).join(" ")} ref={tabElement}>
        {Children.map(props.children, (child, index) => {
          if (active == index) {
            return cloneElement(
              child as ReactElement,
              {
                ...(child as ReactElement).props,
                className: (((child as ReactElement).props as any).className ?? "") + " is-active",
              },
              (child as ReactElement).props.children,
            );
          } else {
            return child;
          }
        })}
      </div>
    </div>
  );
}
IgntTabs.defaultProps = {
  tabHeaderClasses: [],
  tabLinkClasses: [],
  activeLinkClasses: [],
  inactiveLinkClasses: [],
  tabContentClasses: [],
};
