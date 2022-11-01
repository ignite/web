import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import { IgntButton, IgntModal, IgntTrashIcon } from "@ignt/react-library";

interface IgntCrudDeleteProps {
  className?: string;
  storeName: string;
  itemName: string;
  itemData: any;
  commandName: string;
  close: () => void;
}
export default function IgntCrudDelete(props: IgntCrudDeleteProps) {
  const { address } = useAddressContext();

  const client = useClient();

  const deleteItem = async () => {
    await (
      client[
        props.storeName as keyof Omit<
          typeof client,
          "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
        >
      ] as any
    ).tx[props.commandName]({
      value: { creator: address, id: props.itemData.id },
    });
    props.close();
  };
  return (
    <IgntModal
      visible={true}
      closeIcon={true}
      cancelButton={false}
      submitButton={false}
      close={() => props.close()}
      submit={() => props.close()}
      header={
        <div className="flex flex-col items-center w-96">
          <IgntTrashIcon className="my-6 text-[48px]" />
          <div className="text-2xl font-bold">Delete this item?</div>
        </div>
      }
      body={
        <>
          <div className="text-center my-8">
            <div>This item will be deleted.</div>
            <div>You can’t undo this action.</div>
          </div>
          <div className="text-center my-8">
            <div className="flex justify-center gap-3">
              <IgntButton type="secondary" onClick={() => props.close()} className="w-40">
                Cancel
              </IgntButton>
              <IgntButton type="primary" onClick={deleteItem} className="w-40">
                Delete
              </IgntButton>
            </div>
          </div>
        </>
      }
    ></IgntModal>
  );
}
