import { useEffect, useRef, useState } from 'react';
import { useFetcher } from '@remix-run/react';
import Button from '../Buttons/Button';
import Input from '../Inputs/Input';
import Select from '../Select/Select';
import { US_STATES } from '~/libs/conts';
import InputPhone from '../Inputs/InputPhone';
import InputPostal from '../Inputs/InputPostal';

export default function LeadForm() {
	const fetcher = useFetcher();
	const [response, setResponse] = useState({
		data: null,
		errors: [],
	});
	const stateRef = useRef<HTMLSelectElement | null>(null);
	useEffect(
		function () {
			// if (fetcher?.data && fetcher.data?.id) {
			// 	setResponse({
			// 		data: fetcher.data,
			// 		errors: [],
			// 	});
			// } else if (fetcher?.data && fetcher.data?.errors) {
			// 	setResponse({
			// 		data: {},
			// 		errors: fetcher.data.errors,
			// 	});
			// }
			console.log('SHow Respone', fetcher.data);
		},
		[fetcher.state]
	);

	return !response.data ? (
		<>
			<h3 className='font-bold text-dark'>Let's Get Started!</h3>
			<fetcher.Form
				className='w-full grid grid-cols-1 gap-6'
				action='/'
				method='post'>
				<div className='w-full h-auto grid grid-cols-1 gap-6'>
					<Input
						type='text'
						name='address'
						placeholder='Address (e.g 123 Main St)'
						required
					/>
					<div className='w-full h-auto grid grid-cols-3 gap-2 sm:gap-6'>
						<Input type='text' name='city' placeholder='City' required />
						<Input
							type='hidden'
							name='state'
							value={stateRef?.current?.value ?? ''}
						/>
						<Select ref={stateRef}>
							{US_STATES.map((state, index) => (
								<option key={`state-${index}`} value={state}>
									{state}
								</option>
							))}
						</Select>
						<InputPostal
							type='text'
							name='zip'
							placeholder='Zip Code'
							required
						/>
					</div>
				</div>
				<div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<Input
						type='text'
						name='first_name'
						placeholder='First Name'
						required
					/>
					<Input
						type='text'
						name='last_name'
						placeholder='Last Name'
						required
					/>
				</div>
				<Input type='text' name='email' placeholder='Email' required />
				<InputPhone
					type='text'
					name='phone'
					placeholder='Phone'
					maxLength={14}
					required
				/>
				{response.errors.length > 0 &&
					response.errors.map(
						(
							error: {
								detail?: string;
							},
							index
						) => (
							<p key={index} className='text-red text-sm text-center italic'>
								{error?.detail ?? null}
							</p>
						)
					)}
				<Button type='submit' disabled={fetcher.state !== 'idle'}>
					get my offer today
				</Button>
				<p className='text-light-grey text-sm text-center italic'>
					we do not share, spam, or sell your information with anyone
				</p>
			</fetcher.Form>
		</>
	) : (
		<div className='w-full h-auto grid grid-cols-1 gap-6'>
			<p className='text-center text-dark'>
				Thank you for sumbitting your information. We will be in touch shortly.{' '}
				<br />( Tap or click anywhere to close this window.)
			</p>
		</div>
	);
}
