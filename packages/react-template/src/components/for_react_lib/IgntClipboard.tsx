import { useClipboard } from "../../def-hooks/useClipboard";
import IgntCopyIcon from "./icons/IgntCopyIcon";
import IgntButton from "./IgntButton";

interface IgntClipboardProps {
  text?: string;
  className?: string;
}
export default function IgntClipboard(props: IgntClipboardProps) {
  const { copy } = useClipboard();
  return (
    <IgntButton onClick={() => copy(props.text ?? "")} type="plain" className={props.className ?? ""}>
      <IgntCopyIcon />
    </IgntButton>
  );
}
IgntClipboard.defaultProps = {
  text: "",
};
