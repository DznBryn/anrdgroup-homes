import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	backgroundImage?: string;
	styles?: {
		wrapper?: string;
		container?: string;
		backgroundColor?: string;
	};
};

export default function Banner({ children, backgroundImage, styles }: Props) {
	return (
		<div
			className={`w-full h-auto bg-cover bg-left-top sm:bg-center bg-no-repeat flex justify-center ${
				styles?.wrapper && styles.wrapper
			} ${styles?.backgroundColor ? styles.backgroundColor : 'bg-white'}`}
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
			}}>
			<div
				className={`w-full h-auto ${
					styles?.container ? styles.container : ''
				}`}>
				{children}
			</div>
		</div>
	);
}
