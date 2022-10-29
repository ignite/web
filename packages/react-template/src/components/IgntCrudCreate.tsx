import { useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import {IgntModal} from "@ignt/react-lib";
interface IgntCrudCreateProps {
  className?: string;
  storeName: string;
  itemName: string;
  commandName: string;
  close: () => void;
}
export default function IgntCrudCreate(props: IgntCrudCreateProps) {
  const [formData, setFormData] = useState<any>({});
  const { address } = useAddressContext();
  const client = useClient();
  // computed
  const itemFields = (
    client[
      props.storeName as keyof Omit<
        typeof client,
        "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
      >
    ] as any
  ).structure[props.itemName];

  const itemFieldsFiltered = useMemo(
    () => itemFields.fields.filter((f: any) => f.name !== "id" && f.name !== "creator") as any[],
    [props.itemName],
  );
  const creator = address;

  const submitItem = async () => {
    await (
      client[
        props.storeName as keyof Omit<
          typeof client,
          "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
        >
      ] as any
    ).tx[props.commandName]({
      value: { ...formData, creator },
    });
    props.close();
  };
  return (
    <IgntModal
      visible={true}
      title={`Create ${props.itemName}`}
      closeIcon={true}
      submitButton={true}
      cancelButton={true}
      className="text-center"
      close={() => props.close()}
      submit={submitItem}
      body={
        <>
          <div className="my-4" />
          {itemFieldsFiltered.map((field) => (
            <div key={"create_field_" + field.name}>
              <label htmlFor={`p${field.name}`} className="sp-label capitalize-first-letter">
                {field.name}
              </label>
              <input
                id={`p${field.name}`}
                value={formData[field.name]}
                placeholder={`Enter ${field.name}`}
                type="text"
                name={`p${field.name}`}
                className="sp-input"
                onChange={(evt) => {
                  setFormData((oldForm: any) => ({ ...oldForm, [field.name]: evt.target.value }));
                }}
              />
              <div className="my-4" />
            </div>
          ))}
        </>
      }
    />
  );
}
