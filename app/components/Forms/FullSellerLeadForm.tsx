import { useFetcher } from '@remix-run/react';
import { useState } from 'react';
import { useStore } from '~/utils/zustand/store';
import Input from '../Inputs/Input';

import Button from '../Buttons/Button';

export default function FullSellerLeadForm() {
	const { user } = useStore((store) => store.entries.form);
	const fetcher = useFetcher();
	const [step, setStep] = useState(1);
	console.log(user);
	return (
		user && (
			<div>
				<h3 className='font-bold text-dark'>
					{user?.attributes?.first_name?.toUpperCase() ?? ''} let's see what you
					have.
				</h3>
				<fetcher.Form
					className='w-full grid grid-cols-1 gap-6'
					action='/'
					method='post'>
					<FormSlider />
					<div className='w-full h-auto grid grid-cols-1 gap-6'>
						{step === 1 && (
							<Button type='submit' className='w-full'>
								Submit
							</Button>
						)}
					</div>
				</fetcher.Form>
			</div>
		)
	);
}

function FormSlider() {
	return (
		<div className='w-full grid grid-cols-1 gap-6'>
			<div className='w-full h-auto grid grid-cols-1 gap-6'>
				<Input
					type='text'
					name='address'
					placeholder='Address (e.g 123 Main St)'
					required
				/>
				<div className='w-full h-auto grid grid-cols-3 gap-2 sm:gap-6'>
					<Input type='text' name='city' placeholder='City' required />
				</div>

				<Input required name='email' type='email' placeholder='Email' />
			</div>
		</div>
	);
}
