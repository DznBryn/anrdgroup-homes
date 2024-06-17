import React from 'react';
import Icons from '../Icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
import DropDown, { DropDownItem } from '../DropDown/DropDown';

interface Props {
	pathname: string | null;
};

export default function Header({pathname}: Props) {
	return (
		<div className='w-full md:w-1/2 h-auto p-6 flex justify-between items-center absolute z-50'>
			<div className='w-full h-auto grid grid-cols-2 gap-x-6'>
				<div className='w-16 md:w-20 h-auto'>
					<Icons variant='logo' color='fill-white' />
				</div>
			</div>
			<div className='w-auto h-auto'>
				<div className='w-max h-auto'>
					<DropDown
						text={
							<p className='text-white'>
								Call or Text Today <br />
								<span className='font-bold'>(609) 858-8881</span>
							</p>
						}
						className={'grid grid-cols-1'}>
						<DropDownItem>
							<a
								className='flex items-center gap-2 px-4 py-4 hover:bg-green hover:text-white'
								href='tel:+16098588881'>
								<FontAwesomeIcon className='hover:fill-white' icon={faPhone} />
								Call
							</a>
						</DropDownItem>
						<DropDownItem>
							<a
								className='flex items-center gap-2 px-4 py-4 hover:bg-green hover:text-white'
								href='sms:+16098588881'>
								<FontAwesomeIcon className='' icon={faMessage} />
								Text
							</a>
						</DropDownItem>
					</DropDown>
				</div>
			</div>
		</div>
	);
}
