import type { ReactNode } from 'react';
import type { ActionArgs, LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import tailwindStylesheet from '~/styles/tailwind.css';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import Modals from './components/Modals/Modals';
import Layout from './components/Layouts/Layout';
import {
	createProfile,
	getProfiles,
	updateProfile,
} from './utils/api/klaviyo/profile';
import type { GetProfileProps, UpdateProfileInputProps } from './libs/type';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: tailwindStylesheet },
];

export async function action({ request, context }: ActionArgs) {
	try {
		const [formData] = await Promise.all([request.formData()]);

		const newCustomerEmail = formData.get('email');

		const profiles: {
			data: Array<GetProfileProps> | undefined;
		} = (await getProfiles({
			filters: newCustomerEmail
				? 'filter=equals(email,"' + newCustomerEmail + '")'
				: null,
			context,
		})) as { data: Array<GetProfileProps> | undefined };

		console.log('================>>>', context.env.KLAVIYO_TEST_API_KEY);
		console.log('================>>>', profiles);
		if (profiles.data && profiles.data.length === 0) {
			const response = await createProfile({ data: formData, context });
			return { data: response };
		}

		if (profiles.data && profiles.data.length > 0) {
			const updateProfileData: UpdateProfileInputProps = {
				id: profiles.data[0].id,
				type: 'profile',
				attributes: {
					email: profiles.data[0].attributes.email,
					phone_number: profiles.data[0].attributes.phone_number,
					first_name: profiles.data[0].attributes.first_name,
					last_name: profiles.data[0].attributes.last_name,
					organization: profiles.data[0].attributes.organization,
					title: profiles.data[0].attributes.title,
					image: profiles.data[0].attributes.image,
					location: profiles.data[0].attributes.location,
					properties: {
						...profiles.data[0].attributes.properties,
						[`property_address_${
							Object.keys(profiles.data?.[0]?.attributes?.properties).length + 1
						}`]: `${formData.get('address')}, ${formData.get(
							'city'
						)}, ${formData.get('state')}, ${formData.get('zip')}`,
					},
				},
			};
			console.log('updateProfileData', formData);
			const updates: { data: any } = await updateProfile({
				data: updateProfileData,
				context,
			}) as { data: any };

			return { data: formData };
		}

		return { data: profiles.data };
	} catch (error) {
		return { error };
	}
}

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
			<Modals />
		</Document>
	);
}

type DocumentProps = {
	children: ReactNode;
};

function Document({ children }: DocumentProps) {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1.0'></meta>
				<Links />
			</head>
			<body className='w-full h-screen grid grid-cols-1'>
				{children}
				<ScrollRestoration />
				<Scripts />
				<script
					type='text/javascript'
					src='//static.klaviyo.com/onsite/js/klaviyo.js?company_id=VB6Uwr'></script>
				<LiveReload />
			</body>
		</html>
	);
}
