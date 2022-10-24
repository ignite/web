import { useState } from "react";
import { useClient } from "../hooks/useClient"

export const useAddress = () => {
  const client = useClient();
	const [address, setAddress] = useState({
		address: '',
		shortAddress: ''
	})
	const getAddress = async () => {
		console.log("called");
		console.log(client.signer);
		if (client.signer) {
			const [{ address: rawAddress }] = await client.signer.getAccounts();
			return {
        address: rawAddress,
        shortAddress:
          rawAddress.substring(0, 10) + "..." + rawAddress.slice(-4),
      };
		} else {
			return {
        address: "",
        shortAddress: "",
      };		
		}
  };
	client.on("signer-changed", async () => {		
		console.log('sc')
		const newAddress = await getAddress();
    setAddress({...newAddress});
  });
	window.addEventListener("keplr_keystorechange", async () => {
		console.log("kc");
		const newAddress = await getAddress();
    setAddress({ ...newAddress });
  });

	(async () => { 
		const newAddress = await getAddress();
		setAddress({ ...newAddress });
	})();

  return address;
};
