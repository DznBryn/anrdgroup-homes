import type { V2_MetaFunction } from '@remix-run/cloudflare';
import Banner from '~/components/Banners/Banner';
import Button from '~/components/Buttons/Button';
import Modals from '~/components/Modals/Modals';

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
	console.log("...Render Parent")
	return (
		<>
			<div>
				<Banner
					backgroundImage={
						'https://imagedelivery.net/s-Qoq_uGoAvrpxHuBogfVA/00abeac7-a3ab-40ca-a411-9edb04552000/public'
					}
					styles={{
						wrapper: 'h-screen overflow-y-auto ',
					}}>
					<div className='h-full w-full relative flex justify-center items-center lg:w-1/2'>
						<div className='bg-dark h-full w-full mix-blend-multiply absolute'></div>
						<div className='w-auto max-w-2xl md:max-w-lg	h-auto absolute grid gap-12 p-8'>
							<h1 className='text-white font-bold '>
								Selling
								<br />
								Your Home
								<br />
								Made Simple:
							</h1>
							<h3 className='text-white'>Get Professional Help Today</h3>
							<p className='text-white'>
								Unlock a swift solution for your distressed property with our
								hassle-free cash purchase service. Whether facing foreclosure,
								structural issues, or a property in disrepair, we specialize in
								purchasing homes as-is, removing the burden of repairs and the
								uncertainty of the market. Receive a fair cash offer and a quick
								closing, providing you the relief and peace of mind you deserve.
								Let us turn your distressed property into a stress-free
								transaction.
							</p>
							<Button modal={'seller-form'}>
								<span>get an offer</span>
							</Button>
						</div>
					</div>
				</Banner>
				<h2 className='font-bold'>Selling Your Home</h2>
				<h3>Selling Your Home</h3>
				<p className='font-light'>Selling Your Home</p>
			</div>
			<Modals />
		</>
	);
}
