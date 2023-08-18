import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{ viewport: 'width=device-width,initial-scale=1' },
		{ title: 'ANRD Homes | Real Estate Investing' },
		{
			name: 'description',
			content: 'Building Communities for a Better Tomorrow',
		},
	];
};

export default function Index() {
  return (
		<div>
			<h1 className='font-light text-4xl'>Selling Your Home</h1>
			<ul>
				<li>
					<a
						target='_blank'
						href='https://remix.run/tutorials/blog'
						rel='noreferrer'>
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a
						target='_blank'
						href='https://remix.run/tutorials/jokes'
						rel='noreferrer'>
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
						Remix Docs
					</a>
				</li>
			</ul>
		</div>
	);
}
