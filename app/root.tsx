import type { ReactNode } from 'react';
import type {
	ActionArgs,
	LinksFunction,
	LoaderArgs,
} from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import tailwindStylesheet from '~/styles/tailwind.css';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
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
		const newCustomerState = formData.get('state');

		if (newCustomerState === '') {
			return {
				data: null,
				errors: [
					{
						status: 400,
						message: 'Please provide vaild State.',
					},
				],
			};
		}

		const profiles: {
			data: Array<GetProfileProps> | undefined;
		} = (await getProfiles({
			filters: newCustomerEmail
				? 'filter=equals(email,"' + newCustomerEmail + '")'
				: null,
			context,
		})) as { data: Array<GetProfileProps> | undefined };

		console.log('GET PROFILES:', profiles);

		if (profiles.data && profiles.data.length === 0) {
			const response = await createProfile({ data: formData, context });
			if (response?.errors && response.errors.length > 0) {
				console.log('UPDATE PROFILE ERRORS:', response.errors);
				return {
					data: null,
					errors: response.errors.map((error) => {
						return {
							status: error?.status ?? 400,
							message:
								error?.detail ??
								'Oops! Something went wrong. Please email us at hello@anrd.app',
						};
					}),
				};
			}

			return { data: response, errors: [] };
		}

		if (profiles.data && profiles.data.length > 0) {
			const phone_number = String(
				formData?.get('phone') ? '+1' + formData.get('phone') : ''
			)?.replace('-', '');
			const updateProfileData: UpdateProfileInputProps = {
				id: profiles.data[0].id,
				type: 'profile',
				attributes: {
					email: profiles.data[0].attributes.email,
					phone_number,
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

			const updates: { data: any; errors?: [] } = (await updateProfile({
				data: updateProfileData,
				context,
			})) as { data: any; errors?: [] };

			if (updates?.errors && updates.errors.length > 0) {
				console.log('UPDATE PROFILE ERRORS:', updates.errors);
				return {
					data: null,
					errors: updates.errors.map((error) => {
						return {
							status: error?.status ?? 400,
							message:
								error?.detail ??
								'Oops! Something went wrong. Please email us at hello@anrd.app',
						};
					}),
				};
			}

			return { data: updates.data, errors: [] };
		}

		return { data: profiles.data };
	} catch (error) {
		return { error };
	}
}

export async function loader({ request, context }: LoaderArgs) {
	const { env } = context;
	const klaviyoSiteId = env?.KLAVIYO_SITE_ID ?? null;
	return {
		klaviyoSiteId,
	};
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
	const loaderData = useLoaderData();
	console.log('loaderData', loaderData.klaviyoSiteId);
	return (
		<html lang='en'>
			<head>
				<Meta />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1.0'></meta>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-F2RGHYQ3XF'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-F2RGHYQ3XF');`,
					}}
				/>
				<Links />
			</head>
			<body className='w-full h-screen grid grid-cols-1'>
				{children}
				<ScrollRestoration />
				<Scripts />
				<script
					type='text/javascript'
					src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${loaderData.klaviyoSiteId}`}></script>
				<LiveReload />
			</body>
		</html>
	);
}
