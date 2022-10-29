import { useState } from "react";

type ClipboardOptions = {
  resetAfter?: number;
};

export const useClipboard = (options?: ClipboardOptions) => {
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const [hasCopied, setHasCopied] = useState(false);

  async function copy(value: string) {
    if (isSupported) {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, options?.resetAfter ?? 1000);
    }
  }
  return {
    isSupported,
    copy,
    hasCopied,
  };
};
