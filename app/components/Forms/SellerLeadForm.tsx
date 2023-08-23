import { useEffect, useState } from 'react';
import { useFetcher } from '@remix-run/react';
import Button from '../Buttons/Button';
import { Input } from '../Inputs/Input';
import { InputProperty } from '../Inputs/InputProperty';

type Props = {};

export default function LeadForm({}: Props) {
	const fetcher = useFetcher();
	const [response, setResponse] = useState({
		data: {},
		errors: [],
	});
	useEffect(
		function () {
			if (fetcher.data && fetcher.data?.data) {
				setResponse({
					data: fetcher.data.data,
					errors: [],
				});
			} else if (fetcher.data?.errors && fetcher.data?.errors) {
				setResponse({
					data: {},
					errors: fetcher.data.errors,
				});
			}
		},
		[fetcher.state]
	);
		console.log(response);
	return (
		<fetcher.Form
			className='w-full grid grid-cols-1 gap-6'
			action='/'
			method='post'>
			<InputProperty
				type='text'
				name='address'
				placeholder='Property Address - Include: City, State, Zip'
				required
			/>
			<div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
				<Input
					type='text'
					name='first_name'
					placeholder='First Name'
					required
				/>
				<Input type='text' name='last_name' placeholder='Last Name' required />
			</div>
			<Input type='text' name='email' placeholder='Email' required />
			<Input type='text' name='phone' placeholder='Phone' required />
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
	);
}
