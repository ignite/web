/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useClient } from "../hooks/useClient"
import { useAddress } from "../def-hooks/useAddress";
import { useEffect } from "react";
export default function PortfolioView() {
  const client = useClient();
  const address = useAddress();
  const login = () => {
    client.useKeplr();    
  }
	return (
  <div>
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
          <div onClick={login}>
            Address: {address.address}
        </div>
      </div>
    </div>
  </div>)
}