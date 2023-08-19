import { create } from "zustand";

type Props = {
  entries: {
    modal: ModalProps
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
              modal: {
                ...state.entries.modal,
                modal,
              },
            },
          }
        });
      },
    }
  }
});

export const useStore = create(store)