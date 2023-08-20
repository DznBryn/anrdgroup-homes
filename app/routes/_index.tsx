import type { V2_MetaFunction } from '@remix-run/cloudflare';
import Banner from '~/components/Banners/Banner';
import Button from '~/components/Buttons/Button';
import Modals from '~/components/Modals/Modals';
import Section from '~/components/Section/Section';
import { PROCESSES, SITUATIONS } from '~/libs/conts';
import type { ProcessCardProps } from '~/libs/type';

export const meta: V2_MetaFunction = () => {
	return [
		{ charset: 'utf-8' },
		{
			viewport:
				'width=device-width, initial-scale=.5',
		},
		{ title: 'ANRD Homes | Real Estate Investing' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'anrdhomes.com' },
		{ property: 'og:title', content: 'ANRD Homes | Real Estate Investing' },
		{
			property: 'og:description',
			content: 'Building Communities for a Better Tomorrow',
		},
		{
			name: 'description',
			content: 'Building Communities for a Better Tomorrow',
		},
	];
};

export default function Index() {
	console.log('...Render Parent');
	return (
		<>
			<div className='w-full h-auto grid grid-cols-1 gap-12'>
				<Banner
					backgroundImage={
						'https://imagedelivery.net/s-Qoq_uGoAvrpxHuBogfVA/00abeac7-a3ab-40ca-a411-9edb04552000/public'
					}
					styles={{
						wrapper: 'h-screen',
					}}>
					<div className='h-full w-full relative flex justify-center items-center md:w-1/2'>
						<div className='bg-dark h-full w-full mix-blend-multiply absolute'></div>
						<div className='w-auto max-w-2xl md:max-w-lg	h-auto absolute grid gap-8 p-8'>
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
							<div className='w-full h-auto flex justify-center mt-8'>
								<Button modal={'seller-form'} classNames='bg-green'>
									<span>get an offer</span>
								</Button>
							</div>
						</div>
					</div>
				</Banner>
				<Section
					header={'Who do we help'}
					styles={{
						container: 'max-w-7xl p-6 grid grid-cols-1 gap-6 md:gap-8',
					}}>
					<ul className='h-auto w-full grid grid-cols-1 gap-6 md:grid-cols-2'>
						{SITUATIONS.map((situation, index) => (
							<li key={`situation-${index}`}>
								<p>
									<span className='font-bold'>{situation.type}: </span>
									{situation.description}
								</p>
							</li>
						))}
					</ul>
					<p>
						Let us ease your burden. Our solutions are tailored to your unique
						situation. Get in touch today.
					</p>
					<div className='w-full h-auto flex justify-center mt-8 md:mt-12'>
						<Button classNames='px-12'>
							<span>get in touch</span>
						</Button>
					</div>
				</Section>
				<Section
					header='Our process'
					styles={{
						container: 'max-w-7xl p-6 grid grid-cols-1 gap-6 md:gap-8',
					}}>
					<ul className='h-auto w-full grid grid-cols-1 gap-16 md:grid-cols-3'>
						{PROCESSES.map((process: ProcessCardProps, index) => (
							<li
								key={`process_card-${index}`}
								className='w-auto h-full grid grid-cols-1 gap-6 justify-start pb-12'>
								<div className='w-full h-auto grid grid-cols-1 gap-4'>
									{process?.image ?? null}
									{process?.header ? (
										<h4 className='font-bold text-center'>
											{index + 1 + '. ' + process.header}
										</h4>
									) : null}
								</div>
								<div className='w-full h-auto grid grid-cols-1 gap-12'>
									{process?.content ? <p>{process.content}</p> : null}
									<div className='w-full h-auto flex justify-center mt-auto'>
										{process?.button ?? null}
									</div>
								</div>
							</li>
						))}
					</ul>
				</Section>
			</div>
			<Modals />
		</>
	);
}
