import { useAddressContext } from "../def-hooks/addressContext";
import { IgntCard, IgntClipboard, IgntQRCode, IgntTabs } from "@ignt/react-library";
import IgntSend from "./IgntSend";
interface IgntTransferProps {
  className?: string;
}
export default function IgntTransfer(props: IgntTransferProps) {
  const { address } = useAddressContext();
  return (
    <IgntTabs
      tabHeaderClasses={["text-3xl", "font-semibold", "p-0", "m-0", "mb-2.5", "flex-1"]}
      tabLinkClasses={["pr-4"]}
      inactiveLinkClasses={["text-gray-400"]}
      activeLinkClasses={["text-black"]}
      className={props.className ?? ""}
    >
      <div className="" title="Send">
        {address && <IgntSend />}
      </div>
      <div className="" title="Receive">
        {address && (
          <IgntCard
            header={
              <div className="flex bg-gray-100 align-center items-center justify-center w-full py-10">
                <IgntQRCode value={address} color="#000" width={112} />
              </div>
            }
          >
            <div className="p-5 break-all">{address}</div>
            <div className="p-5 pt-0 text-right">
              <IgntClipboard text={address} />
            </div>
          </IgntCard>
        )}
      </div>
    </IgntTabs>
  );
}
