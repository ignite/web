import { Suspense, useMemo, useRef, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import IgntButton from "./for_react_lib/IgntButton";
import IgntCrudCreate from "./IgntCrudCreate";
import IgntCrudDelete from "./IgntCrudDelete";
import IgntCrudRead from "./IgntCrudRead";
import IgntCrudUpdate from "./IgntCrudUpdate";

interface IgntCrudProps {
  className?: string;
  storeName: string;
  itemName: string;
}

export interface State {
  visibleModal: string;
  activeItem: any;
  moduleAvailable: boolean;
}

const initialState: State = {
  visibleModal: "",
  activeItem: {},
  moduleAvailable: false,
};
export default function IgntCrud(props: IgntCrudProps) {
  const { className, storeName, itemName } = props;

  const reader = useRef<IgntCrudRead>(null);
  const { address } = useAddressContext();
  const client = useClient();
  initialState.moduleAvailable = !!(client as any)[props.storeName];
  // state
  const [state, setState] = useState<State>(initialState);

  // computed
  const moduleNameNormalized = useMemo(() => itemName.replace(/^\w/, (c) => c.toUpperCase()), [itemName]);
  const closeAndReload = () => {
    setState((oldState) => ({ ...oldState, visibleModal: "" }));
    reader.current.refetch();
  };
  return (
    <>
      {state.moduleAvailable && (
        <div className={`container mx-auto ${className ?? ""}`}>
          <div className="flex justify-between pt-10 pb-4">
            <div className="font-bold text-4xl">{moduleNameNormalized} items</div>
            <div className="col-6 text-align--right">
              <IgntButton
                type="primary"
                disabled={!address}
                onClick={() => {
                  setState((oldState) => ({ ...oldState, visibleModal: "create-item" }));
                }}
              >
                Create {moduleNameNormalized}
              </IgntButton>
            </div>
          </div>
          <Suspense>
            <IgntCrudRead
              storeName={storeName}
              itemName={moduleNameNormalized}
              commandName={`query${moduleNameNormalized}All`}
              ref={reader}
              createItem={() => {
                setState((oldState) => ({ ...oldState, visibleModal: "create-item" }));
              }}
              editItem={(item: any) => {
                setState((oldState) => ({ ...oldState, activeItem: item, visibleModal: "edit-item" }));
              }}
              deleteItem={(item: any) => {
                setState((oldState) => ({ ...oldState, activeItem: item, visibleModal: "delete-item" }));
              }}
            />
          </Suspense>
          {state.visibleModal === "create-item" && (
            <IgntCrudCreate
              storeName={storeName}
              itemName={moduleNameNormalized}
              commandName={`sendMsgCreate${moduleNameNormalized}`}
              close={() => {
                setState((oldState) => ({ ...oldState, visibleModal: "" }));
              }}
            />
          )}
          {state.visibleModal === "edit-item" && (
            <IgntCrudUpdate
              storeName={storeName}
              itemName={moduleNameNormalized}
              itemData={state.activeItem}
              commandName={`sendMsgUpdate${moduleNameNormalized}`}
              close={() => {
                setState((oldState) => ({ ...oldState, visibleModal: "" }));
              }}
            />
          )}
          {state.visibleModal === "delete-item" && (
            <IgntCrudDelete
              storeName={storeName}
              itemName={moduleNameNormalized}
              itemData={state.activeItem}
              commandName={`sendMsgDelete${moduleNameNormalized}`}
              close={() => {
                setState((oldState) => ({ ...oldState, visibleModal: "" }));
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
/*
<script setup lang="ts">
import { computed, reactive, ref, toRefs } from "vue";

import { useAddress } from "@/def-composables/useAddress";
import { IgntButton } from "@ignt/vue-library";

import IgntCrudCreate from "./IgntCrudCreate.vue";
import IgntCrudUpdate from "./IgntCrudUpdate.vue";
import IgntCrudDelete from "./IgntCrudDelete.vue";
import IgntCrudRead from "./IgntCrudRead.vue";
import { useClient } from "@/composables/useClient";

export interface State {
  visibleModal: string;
  activeItem: any;
  moduleAvailable: boolean;
}

let initialState: State = {
  visibleModal: "",
  activeItem: {},
  moduleAvailable: false,
};
const reader = ref<any>(null);
const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },
});

// composables
let { address } = useAddress();
const client = useClient();
// state
let state: State = reactive(initialState);

// computed
let moduleNameNormalized = computed(() =>
  props.itemName.replace(/^\w/, (c) => c.toUpperCase())
);

state.moduleAvailable = !!(client as any)[props.storeName];
const { activeItem, moduleAvailable, visibleModal } = toRefs(state);
</script>
*/
