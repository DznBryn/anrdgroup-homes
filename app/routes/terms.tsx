import type {LoaderArgs, MetaDescriptor, V2_MetaFunction } from '@remix-run/cloudflare';
import React from 'react';
import Section from '~/components/Section/Section';

export const meta: V2_MetaFunction = ({ data }) => {
	const metaTags: MetaDescriptor[] = [
		{ charset: 'utf-8' },
		{ title: 'ANRD Homes Terms and Conditions' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'anrdhomes.com' },
		{ property: 'og:title', content: 'ANRD Homes Terms and Conditions' },
		{
			property: 'og:description',
			content:
				'Our Terms and Conditions outlines the rules and guidelines that govern the use of our website and the services we offer. It covers essential information such as the property purchase process, cash offers, closing procedures, privacy practices, and limitations of liability.',
		},
		{
			name: 'description',
			content:
				'Our Terms and Conditions outlines the rules and guidelines that govern the use of our website and the services we offer. It covers essential information such as the property purchase process, cash offers, closing procedures, privacy practices, and limitations of liability.',
		},
	];

	if (data?.meta) {
		metaTags.push(...data.meta);
	}

	return metaTags;
};

export async function loader(props: LoaderArgs) {
	return {
		params: props.params,
		meta: [
			{ tagName: 'link', rel: 'canonical', href: props.request.url },
		] satisfies MetaDescriptor[], 
	};
}

export default function Terms({}: Props) {
	return (
		<div className='w-full h-auto grid grid-cols-1 gap-12'>
			<Section header='Terms and Conditions for Cash Property Purchase'>
				These Terms and Conditions ("Terms") govern your use of [Your Company's
				Website] (the "Website") and the services provided by [Your Company
				Name] (the "Company") for the purchase of properties in cash. By
				accessing or using this Website and its services, you agree to be bound
				by these Terms. If you do not agree with these Terms, please do not use
				the Website or its services. 1. Property Purchase Process 1.1. The
				Company offers to purchase properties in cash, subject to satisfactory
				due diligence and agreement on the terms and conditions of the sale.
				1.2. The property seller (the "Seller") agrees to provide accurate and
				complete information about the property, including but not limited to
				its condition, title, and any known issues. 1.3. The Company reserves
				the right to withdraw its cash offer at any time if, in its sole
				discretion, the due diligence process uncovers information that renders
				the property unsuitable for purchase. 2. Cash Offer 2.1. Upon
				satisfactory completion of due diligence, the Company will make a cash
				offer to the Seller. 2.2. The Seller has the right to accept or reject
				the cash offer. Acceptance of the offer by the Seller will constitute a
				legally binding agreement to sell the property to the Company. 3.
				Closing 3.1. The closing of the property sale will occur within a
				mutually agreed-upon timeframe. 3.2. The Company will provide the
				necessary funds for the cash purchase at the closing. 4. Representations
				and Warranties 4.1. The Seller represents and warrants that they have
				the legal authority to sell the property and that the information
				provided about the property is accurate and complete. 4.2. The Company
				represents and warrants that it has the financial capacity to complete
				the cash purchase. 5. Privacy and Data 5.1. The Company will collect and
				use personal information in accordance with its Privacy Policy, which
				can be accessed on the Website. 6. Limitation of Liability 6.1. To the
				fullest extent permitted by law, the Company shall not be liable for any
				direct, indirect, incidental, consequential, or punitive damages arising
				from or related to the purchase of the property. 7. Governing Law 7.1.
				These Terms shall be governed by and construed in accordance with the
				laws of [Your Jurisdiction]. 8. Changes to Terms 8.1. The Company
				reserves the right to modify or update these Terms at any time. Updated
				Terms will be posted on the Website. 9. Contact Information 9.1. For
				questions or concerns regarding these Terms, please contact [Your
				Contact Information]. By using the Website and its services, you
				acknowledge that you have read, understood, and agreed to these Terms
				and Conditions.
			</Section>
		</div>
	);
}
