/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import IgntAssets from "../components/IgntAssets";
import IgntTransactions from "../components/IgntTransactions";
import IgntTransfer from "../components/IgntTransfer";

export default function PortfolioView() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <IgntAssets className="px-2.5 mb-10" displayLimit={3} />
            <IgntTransactions className="px-2.5" />
          </div>
          <IgntTransfer className="px-2.5 w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}
