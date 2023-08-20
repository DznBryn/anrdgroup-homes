import React from 'react';
import Icons from '../Icons/Icons';

type Props = {};

export default function Header({}: Props) {
	return (
		<div className='w-full md:w-1/2 h-auto p-6 flex justify-between items-center absolute z-50'>
			<div className='w-full h-auto grid grid-cols-2 gap-x-6'>
				<div className='w-20 h-auto'>
					<Icons variant='logo' color='fill-white' />
				</div>
			</div>
			<div className='w-auto h-auto'>
				<div className='w-max h-auto'>
					<p className='text-white'>
						Call or Text Today <br />
						<a href='tel:+16098588881' className='font-bold'>
							(609) 858-8881
						</a>
						{/* <a href='sms:+16098588881' className='font-bold'>
							(609) 858-8881
						</a> */}
					</p>
				</div>
			</div>
		</div>
	);
}
