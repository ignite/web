import { ReactNode } from "react";

interface IgntCardProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export default function IgntCard(props: IgntCardProps) {
  return (
    <div className={`rounded-lg border border-gray-100 bg-white-1000 ${props.className ?? ""}`}>
      {props.header}
      {props.children}
      {props.footer}
    </div>
  );
}
