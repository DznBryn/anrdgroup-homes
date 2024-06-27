import { create } from "zustand";
import type { FormProps, ModalProps } from "~/libs/type";

type Props = {
  entries: {
    modal: ModalProps
    form: FormProps
  };
};

const store = (set: (fn: (state: Props) => Props) => void) => ({
  entries: {
    modal: {
      modal: "",
      onChange: (modal: string) => {
        set((state: Props) => {
          return {
            entries: {
              ...state.entries,
              modal: {
                ...state.entries.modal,
                modal,
              },
            },
          }
        });
      },
    },
    form: {
      user: null,
      onUserChange (user: object | null) {
        set((state: Props) => {
          return {
            entries: {
              ...state.entries,
              form: {
                ...state.entries.form,
                user,
              },
            },
          }
        });
      }
    }
  }
});

export const useStore = create(store)