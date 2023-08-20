import type { MouseEvent, ReactNode } from 'react'
import { useStore } from '~/utils/zustand/store';

type Props = {
	modal?: string;
  classNames?: string;
	children?: ReactNode;
};

export default function Button({
  modal,
  classNames,
  children
}: Props) {
  const { onChange } = useStore((store) => store.entries.modal);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onChange && modal) {
			onChange(modal.toLowerCase()); // Toggle the state
		}
	};
  return (
		<button
			type='button'
			onClick={handleClick}
			className={`
      rounded-md bg-dark px-12 h-14 py-3 flex justify-center items-center text-white transition-all ease-in-out duration-300 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-5 ${
				classNames ?? ''
			}`}>
			{children}
		</button>
	);
}