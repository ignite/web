import { toCanvas } from "qrcode";
import { useRef } from "react";

interface IgntQRCodeProps {
  value?: string;
  width?: number;
  background?: string;
  color?: string;
  className?: string;
}
export default function IgntQRCode(props: IgntQRCodeProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const options = {
    margin: 0,
    width: props.width,
    color: {
      dark: props.color,
      light: props.background,
    },
  };

  toCanvas(canvas.current, props.value ?? "", options);

  return <canvas ref={canvas} className={"qr-code " + (props.className ?? "")} />;
}
IgntQRCode.defaultProps = {
  value: "",
  width: 100,
  background: "#0000",
  color: "#000000ff",
};
