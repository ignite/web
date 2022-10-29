/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactNode, useEffect } from "react";
import IgntTimesIcon from "./icons/IgntTimesIcon";
import IgntButton from "./IgntButton";
import IgntCard from "./IgntCard";

interface IgntModalProps {
  visible?: boolean;
  submitButton?: boolean;
  cancelButton?: boolean;
  closeIcon?: boolean;
  title?: string;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  submit?: () => void;
  close?: () => void;
  className?: string;
}
export default function IgntModal(props: IgntModalProps) {
  const escapeHandler = (evt: { key: string }) => {
    if (evt.key === "Escape") props.close && props.close();
  };
  useEffect(() => {
    document.addEventListener("keyup", escapeHandler);
    return () => document.removeEventListener("keyup", escapeHandler);
  }, []);
  return (
    <>
      {props.visible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-330 z-50"
          onClick={() => props.close && props.close()}
        >
          <div
            className={`shadow-std relative max-h-screen ${props.className ?? ""}`}
            role="dialog"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IgntCard
              className="px-6 py-4 max-h-screen overflow-y-auto scroll-smooth"
              header={
                props.header ? (
                  props.header
                ) : (
                  <h3 className="text-center text-2xl font-semibold my-4 mb-6">{props.title || "Default title"}</h3>
                )
              }
              footer={
                props.footer ? (
                  props.footer
                ) : (
                  <div className="flex flex-col">
                    {props.submitButton && (
                      <IgntButton
                        aria-label="Submit"
                        className="mb-2"
                        type="primary"
                        onClick={() => props.submit && props.submit()}
                      >
                        Save changes
                      </IgntButton>
                    )}
                    {props.cancelButton && (
                      <IgntButton
                        aria-label="Close modal"
                        type="secondary"
                        onClick={() => props.close && props.close()}
                      >
                        Cancel
                      </IgntButton>
                    )}
                  </div>
                )
              }
            >
              {props.body}
            </IgntCard>
            {props.closeIcon && (
              <span onClick={() => props.close && props.close()}>
                <IgntTimesIcon className="absolute right-8 top-10 cursor-pointer" />
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
IgntModal.defaultProps = {
  visible: false,
  title: null,
  submitButton: true,
  cancelButton: true,
  closeIcon: true,
};
