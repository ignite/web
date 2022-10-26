/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import IgntAssets from "../components/IgntAssets";
import { useAddressContext } from "../def-hooks/addressContext";

export default function PortfolioView() {
  const address = useAddressContext();
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>{address.address && <IgntAssets className="px-2.5 mb-10" displayLimit={3} />}</div>
        </div>
      </div>
    </div>
  );
}
