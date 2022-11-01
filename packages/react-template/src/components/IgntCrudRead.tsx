import { Menu, Transition } from "@headlessui/react";
import { useClient } from "../hooks/useClient";
import { useAddressContext } from "../def-hooks/addressContext";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { IgntFileIcon, IgntDotsIcon } from "@ignt/react-library";

interface IgntCrudReadProps {
  className?: string;
  storeName: string;
  itemName: string;
  commandName: string;
  createItem: () => void;
  editItem: (item: any) => void;
  deleteItem: (item: any) => void;
}

const IgntCrudRead = forwardRef((props: IgntCrudReadProps, ref) => {
  const { className, storeName, itemName, commandName, editItem, deleteItem } = props;
  const client = useClient();
  const { address } = useAddressContext();
  const loggedIn = useMemo(() => {
    return address != "";
  }, [address]);
  const itemFields = (
    client[
      storeName as keyof Omit<
        typeof client,
        "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
      >
    ] as any
  ).structure[itemName];
  const [items, setItems] = useState<any>([]);
  const fetch = async () => {
    return (
      await (
        client[
          storeName as keyof Omit<
            typeof client,
            "plugins" | "env" | "signer" | "registry" | "plugin" | "signAndBroadcast" | "useSigner" | "useKeplr"
          >
        ] as any
      ).query[commandName]()
    ).data[itemName];
  };
  const refetch = async () => {
    setItems(await fetch());
  };
  useImperativeHandle(ref, () => ({
    refetch,
  }));
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={className ?? ""}>
      {items && (
        <>
          <div className="max-w-xl">
            {items.map((item: any) => (
              <div key={item.id} className="flex justify-between mb-6 items-start">
                <div className="w-10 bg-gray-100 flex items-center justify-center h-10 rounded-lg mr-4">
                  <IgntFileIcon className="text-3xl" />
                </div>
                <div className="flex-1">
                  {itemFields.fields.map((field: any) => (
                    <div key={"field_" + field.name}>
                      <div className="text-sm text-gray-400 font-semibold capitalize">{field.name}</div>
                      <div className="mb-3 text-base">{item[field.name]}</div>
                    </div>
                  ))}
                </div>
                {address != "" && (
                  <div className="relative">
                    <Menu>
                      <Menu.Button>
                        <IgntDotsIcon className="hover:bg-gray-100 rounded-lg text-3xl" />
                      </Menu.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Menu.Items className="absolute shadow-std px-3 w-40 rounded-lg">
                          <Menu.Item
                            disabled={!loggedIn}
                            as="div"
                            className="cursor-pointer py-2 my-2 text-sm text-gray-500 ui-active:text-black ui-active:font-medium"
                            onClick={() => editItem(item)}
                          >
                            Edit
                          </Menu.Item>
                          <Menu.Item
                            disabled={!loggedIn}
                            as="div"
                            className="cursor-pointer py-2 my-2 text-sm text-red-500 ui-active:font-medium"
                            onClick={() => deleteItem(item)}
                          >
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
            ))}
            {(items || []).length === 0 && (
              <div>
                <div className="my-4" />
                <div>No items</div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
});

IgntCrudRead.displayName = "IgntCrudRead";
export default IgntCrudRead;
