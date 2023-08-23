import type { MouseEvent, ReactNode } from 'react';
import { useStore } from '~/utils/zustand/store';

type Props = {
	modal?: string;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
  classNames?: string;
	children?: ReactNode;
};

export default function Button({
	modal,
	type = 'button',
  disabled=false,
	classNames,
	children,
}: Props) {
	const { onChange } = useStore((store) => store.entries.modal);
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onChange && modal) {
			onChange(modal.toLowerCase()); // Toggle the state
		}
	};
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`
      rounded-md bg-dark px-12 h-14 py-3 flex justify-center items-center text-white transition-all ease-in-out duration-300 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-5 disabled:bg-light-grey ${
				classNames ?? ''
			}`}
      disabled={disabled}>
			{children}
		</button>
	);
}
