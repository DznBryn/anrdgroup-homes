import type { ReactNode } from 'react';

type Props = {
	variant?: 'logo' | 'fast-home' | 'file-search' | 'money';
	color?: string;
};

export default function Icons({ variant, color = 'fill-dark' }: Props) {
	const SVG_ICONS: Record<string, ReactNode> = {
		logo: (
			<svg
				version='1.1'
				id='Layer_1'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				viewBox='0 0 60.7 44.3'
				xmlSpace='preserve'
				className={`${color}`}>
				<path
					className='st0'
					d='M10.1,10.9l-3.5,9H8l0.8-2.2h3.8l0.8,2.2h1.5l-3.4-9H10.1z M9.4,16.3l0.7-1.8c0.1-0.1,0.1-0.3,0.2-0.5
	c0.1-0.2,0.2-0.5,0.2-0.7c0.1-0.2,0.2-0.5,0.2-0.7c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.5,0.2,0.8
	c0.1,0.2,0.1,0.4,0.1,0.4l0.7,1.8H9.4z M34.8,16.5h2l1.9,3.4l1.7,0l-2.1-3.6c0.1,0,0.2-0.1,0.3-0.2c0.4-0.3,0.8-0.6,1-1
	c0.3-0.4,0.4-0.9,0.4-1.4c0-0.5-0.1-1-0.4-1.5c-0.3-0.4-0.6-0.8-1-1c-0.4-0.3-0.9-0.4-1.4-0.4h-3.8v9h1.4V16.5z M34.8,12.2H37
	c0.3,0,0.6,0.1,0.9,0.2s0.4,0.3,0.6,0.5c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.5,0.5
	c-0.2,0.1-0.4,0.2-0.7,0.2h-2.6V12.2z M53.8,13.5c-0.2-0.5-0.5-1-0.8-1.4c-0.4-0.4-0.8-0.7-1.3-0.9c-0.5-0.2-1.1-0.3-1.7-0.3h-3.5v9
	h3.5c0.6,0,1.2-0.1,1.7-0.3c0.5-0.2,1-0.5,1.3-0.9c0.4-0.4,0.6-0.9,0.8-1.4c0.2-0.6,0.3-1.2,0.3-1.8C54.1,14.7,54,14.1,53.8,13.5z
	 M52.5,16.7c-0.1,0.4-0.3,0.7-0.6,1c-0.2,0.3-0.5,0.5-0.9,0.6c-0.4,0.1-0.8,0.2-1.2,0.2h-2.1v-6.3h2.1c0.5,0,0.9,0.1,1.2,0.2
	s0.6,0.4,0.9,0.6c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.8,0.2,1.3C52.7,15.8,52.6,16.3,52.5,16.7z M37.2,30l1.9,3.4l1.7,0l-2.1-3.6
	c0.1,0,0.2-0.1,0.3-0.2c0.4-0.3,0.8-0.6,1-1c0.3-0.4,0.4-0.9,0.4-1.4c0-0.5-0.1-1-0.4-1.5c-0.3-0.4-0.6-0.8-1-1s-0.9-0.4-1.4-0.4
	h-3.8v9h1.4V30H37.2 M35.1,25.7h2.2c0.3,0,0.6,0.1,0.9,0.2s0.4,0.3,0.6,0.5c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.5-0.2,0.7
	c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.4,0.2-0.7,0.2h-2.6V25.7z M51.3,24.7c-0.4-0.2-0.8-0.4-1.3-0.4h-3.7v9h1.4v-3.4H50
	c0.5,0,0.9-0.1,1.3-0.4c0.4-0.3,0.7-0.6,1-1c0.2-0.4,0.4-0.9,0.4-1.4c0-0.5-0.1-1-0.4-1.4C52.1,25.3,51.7,25,51.3,24.7z M51.1,27.9
	c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.4,0.2-0.6,0.2h-2.2v-2.9H50c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.3,0.3,0.5,0.5
	c0.1,0.2,0.2,0.5,0.2,0.7S51.2,27.6,51.1,27.9z M59.7,44.1H14.9c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7H59V1.6H1.7v41.1h4.6
	l6.1-6.2c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1l-6.3,6.4C7,44,6.8,44.1,6.6,44.1H1c-0.4,0-0.7-0.3-0.7-0.7V0.9
	c0-0.4,0.3-0.7,0.7-0.7h58.7c0.4,0,0.7,0.3,0.7,0.7v42.5C60.3,43.8,60,44.1,59.7,44.1z M21.3,19.8h-1.4v-9h1.4l4.9,6.8
	c0-0.1,0-6.8,0-6.8h1.4v9h-1.4l-4.9-6.7C21.4,13.5,21.3,19.8,21.3,19.8z M28.1,29.3c0,0.1,0,0.2,0,0.2c0,0.6-0.1,1.1-0.3,1.6
	c-0.2,0.5-0.5,0.9-0.9,1.3c-0.4,0.4-0.8,0.6-1.3,0.8c-0.5,0.2-1,0.3-1.6,0.3c-0.6,0-1.3-0.1-1.8-0.4c-0.6-0.2-1.1-0.6-1.5-1
	c-0.4-0.4-0.8-0.9-1-1.5c-0.2-0.6-0.4-1.2-0.4-1.8c0-0.6,0.1-1.2,0.4-1.8c0.2-0.6,0.6-1,1-1.5s0.9-0.7,1.5-1
	c0.6-0.2,1.2-0.3,1.8-0.3c0.5,0,0.9,0.1,1.3,0.2c0.4,0.1,0.8,0.3,1.2,0.5c0.4,0.2,0.6,0.5,0.9,0.8l-0.9,0.9
	c-0.3-0.2-0.5-0.5-0.8-0.6c-0.3-0.2-0.5-0.3-0.8-0.4c-0.3-0.1-0.6-0.1-0.8-0.1c-0.5,0-0.9,0.1-1.3,0.2c-0.4,0.2-0.7,0.4-1,0.7
	s-0.5,0.6-0.7,1c-0.2,0.4-0.2,0.8-0.2,1.3c0,0.4,0.1,0.9,0.3,1.3c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.7,0.5,1.1,0.7
	c0.4,0.2,0.8,0.3,1.3,0.3c0.3,0,0.6,0,0.9-0.1c0.3-0.1,0.6-0.2,0.8-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.2-0.5,0.2-0.8v-0.1h-2.6
	v-1.4h4c0,0.1,0,0.2,0,0.3C28.1,29.1,28.1,29.2,28.1,29.3z'
				/>
			</svg>
		),
		'file-search': (
			<svg
				version='1.1'
				id='Layer_1'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				viewBox='0 0 71.6 69.9'
				className={`${color}`}>
				<path
					className='st0'
					d='M47.1,0.8H7c-3.4,0-6.2,2.8-6.2,6.2l0,40c0,0.1,0,0.2,0,0.3l0,0.1c0,0.1,0.1,0.2,0.1,0.3l0,0.1
	c0,0.1,0.1,0.2,0.1,0.2L1.2,48c0.1,0.1,0.1,0.2,0.2,0.3l20.2,20.2c0.4,0.4,0.9,0.6,1.4,0.6h24.2c3.4,0,6.2-2.8,6.2-6.1
	C52.6,63,52,63,51.3,63c-0.7,0-1.3-0.1-1.9-0.1c0,1.3-1,2.3-2.3,2.3H24.9V46.9c0-1.1-0.9-1.9-1.9-1.9H4.6v-38c0-1.3,1-2.3,2.3-2.3
	h40.1c1.3,0,2.3,1,2.3,2.3v24.4c0.6-0.1,1.3-0.1,1.9-0.1c0.7,0,1.3,0.1,1.9,0.1V6.9C53.3,3.5,50.5,0.8,47.1,0.8z M21,48.8v13.7
	L7.4,48.8H21z M62.6,55.7l0.4-0.6c1.6-2.3,2.4-5.1,2.4-7.9c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1
	c2.8,0,5.6-0.8,7.9-2.4l0.6-0.4l7.6,7.6c0.7,0.7,2,0.7,2.7,0c0.7-0.7,0.7-2,0-2.7L62.6,55.7z M51.3,57.4c-5.7,0-10.3-4.6-10.3-10.3
	s4.6-10.3,10.3-10.3s10.3,4.6,10.3,10.3S57,57.4,51.3,57.4z M32.5,37.3c0,1.1-0.9,1.9-1.9,1.9H16.4c-1.1,0-1.9-0.9-1.9-1.9
	c0-1.1,0.9-1.9,1.9-1.9h14.1C31.6,35.3,32.5,36.2,32.5,37.3z M14.5,17.4c0-1.1,0.9-1.9,1.9-1.9h21.9c1.1,0,1.9,0.9,1.9,1.9
	c0,1.1-0.9,1.9-1.9,1.9H16.4C15.4,19.3,14.5,18.4,14.5,17.4z M40.2,27.3c0,1.1-0.9,1.9-1.9,1.9H16.4c-1.1,0-1.9-0.9-1.9-1.9
	c0-1.1,0.9-1.9,1.9-1.9h21.9C39.4,25.4,40.2,26.2,40.2,27.3z'
				/>
			</svg>
		),
		money: (
			<svg
				id='Layer_1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 102.57 88.14'
				className={`${color}`}>
				<path
					className='cls-1'
					d='m14.3,36.9h6.8l52.1-13.96c.81-.22,1.64.26,1.85,1.07.59,2.22,2.03,3.99,3.87,5.05h0c1.84,1.06,4.09,1.42,6.31.83.81-.22,1.64.26,1.85,1.07l1.59,5.94h2.73l-5.17-19.28L14.3,36.9h0Zm18.49,0h52.76l-1.02-3.8c-2.52.33-5.01-.22-7.11-1.43h0s0,0,0,0c-2.1-1.21-3.81-3.1-4.79-5.45l-39.83,10.67h0Zm61.76,0h5.22c.84,0,1.52.68,1.52,1.52,0,.05,0,.09,0,.14v46.96c0,.83-.68,1.51-1.51,1.51h0s-96.97,0-96.97,0c-.84,0-1.52-.68-1.52-1.52v-47.1c0-.6.35-1.12.86-1.37L64.06,1.31c.72-.42,1.65-.17,2.07.55l9.01,15.61,11.79-3.16c.81-.22,1.64.26,1.85,1.07l5.77,21.52h0Zm3.71,3.03H4.32v44.07h93.94v-44.07h0Zm-79.97,1.75h65.99c.84,0,1.52.68,1.52,1.52,0,2.29.93,4.37,2.43,5.88.02.02.05.05.07.08,1.5,1.46,3.55,2.36,5.81,2.36.84,0,1.52.68,1.52,1.52v17.88c0,.84-.68,1.52-1.52,1.52-2.3,0-4.37.93-5.88,2.43-1.5,1.5-2.43,3.58-2.43,5.88,0,.84-.68,1.52-1.52,1.52H18.29c-.84,0-1.52-.68-1.52-1.52,0-2.3-.93-4.38-2.43-5.88h0c-1.5-1.5-3.58-2.43-5.88-2.43-.84,0-1.52-.68-1.52-1.52v-17.88c0-.84.68-1.52,1.52-1.52,2.3,0,4.37-.93,5.88-2.43,1.5-1.5,2.43-3.58,2.43-5.88,0-.84.68-1.52,1.52-1.52h0Zm64.57,3.03H19.71c-.34,2.53-1.51,4.79-3.22,6.5-1.72,1.72-3.98,2.88-6.5,3.22v15.05c2.53.34,4.79,1.51,6.5,3.22h0s0,0,0,0c1.71,1.71,2.88,3.98,3.22,6.5h63.16c.34-2.53,1.51-4.79,3.22-6.5,1.72-1.72,3.98-2.88,6.5-3.22v-15.05c-2.48-.33-4.71-1.47-6.41-3.14-.03-.03-.06-.05-.09-.08-1.72-1.72-2.88-3.98-3.22-6.5h0Zm-31.58,3.58c3.77,0,7.19,1.53,9.66,4,2.47,2.47,4,5.89,4,9.66h0c0,3.78-1.53,7.19-4,9.66-2.47,2.47-5.89,4-9.66,4s-7.19-1.53-9.66-4c-2.47-2.47-4-5.89-4-9.66s1.53-7.19,4-9.66c2.47-2.47,5.89-4,9.66-4h0Zm7.52,6.15c-1.92-1.92-4.58-3.12-7.52-3.12s-5.6,1.19-7.52,3.12c-1.92,1.92-3.12,4.58-3.12,7.52s1.19,5.6,3.12,7.52c1.92,1.92,4.58,3.12,7.52,3.12s5.6-1.19,7.52-3.12c1.93-1.93,3.12-4.59,3.12-7.52h0c0-2.94-1.19-5.6-3.12-7.52h0Zm-32.9,1.38c1.7,0,3.23.69,4.34,1.8,1.11,1.11,1.8,2.65,1.8,4.34s-.69,3.23-1.8,4.34c-1.11,1.11-2.65,1.8-4.34,1.8h0c-1.7,0-3.23-.69-4.34-1.8h0s0,0,0,0c-1.11-1.11-1.8-2.65-1.8-4.34s.69-3.23,1.8-4.34c.03-.03.06-.06.1-.09,1.11-1.06,2.6-1.71,4.25-1.71h0Zm2.2,3.94c-.56-.56-1.34-.91-2.2-.91s-1.58.32-2.14.84l-.07.07c-.56.56-.91,1.34-.91,2.2s.35,1.64.91,2.2h0c.57.57,1.35.92,2.2.92h0c.86,0,1.64-.35,2.2-.92.56-.56.91-1.34.91-2.2s-.35-1.64-.91-2.2h0Zm48.55-3.94c1.7,0,3.23.69,4.34,1.8,1.11,1.11,1.8,2.65,1.8,4.34s-.69,3.23-1.8,4.34c-1.11,1.11-2.65,1.8-4.34,1.8s-3.23-.69-4.34-1.8c-1.11-1.11-1.8-2.65-1.8-4.34s.69-3.23,1.8-4.34c1.11-1.11,2.65-1.8,4.34-1.8h0Zm2.2,3.94c-.56-.56-1.34-.91-2.2-.91s-1.64.35-2.2.91c-.56.56-.91,1.34-.91,2.2s.35,1.64.91,2.2c.56.56,1.34.91,2.2.91s1.64-.35,2.2-.91.91-1.34.91-2.2-.35-1.64-.91-2.2h0ZM31.35,29.2l30.87-8.27c-.97,0-1.93-.14-2.85-.39-2.34-.63-4.49-2.01-6.04-4.03l-21.97,12.69h0Zm38.12-10.21l2.64-.71-7.85-13.6L13.51,33.98l6.59-1.77L52.96,13.25l.08-.05c.72-.42,1.65-.17,2.07.55,1.15,1.99,2.99,3.32,5.05,3.87,2.03.54,4.27.33,6.24-.78l.07-.04c.72-.42,1.65-.17,2.07.55l.95,1.64h0Z'
				/>
			</svg>
		),
		'fast-home': (
			<svg
				id='Layer_1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 117.11 92.57'
				className={`${color}`}>
				<path
					className='cls-1'
					d='m85.8,86.3h-50.42c-.47,0-.93-.19-1.26-.52-.33-.34-.52-.79-.52-1.26l.17-46.32c0-.98.8-1.77,1.78-1.77h0c.98,0,1.78.81,1.77,1.79l-.17,44.53h48.63c.98,0,1.78.8,1.78,1.78s-.8,1.78-1.78,1.78Zm14.08-13.18c-.98,0-1.78-.8-1.78-1.78v-32.21c0-.98.8-1.78,1.78-1.78s1.78.8,1.78,1.78v32.21c0,.98-.8,1.78-1.78,1.78Z'
				/>
				<path
					className='cls-1'
					d='m104.2,41.82c-1.55,0-3.12-.44-4.52-1.37l-32.4-21.81-31.61,20.82c-1.81,1.19-3.97,1.6-6.1,1.16-2.11-.44-3.91-1.67-5.07-3.45-1.18-1.8-1.59-3.97-1.15-6.09.44-2.11,1.67-3.91,3.45-5.07L62.92,2.19c2.71-1.82,6.21-1.81,8.93.05l.79.52c.12.05.23.11.34.18l17.13,11.52c.82.55,1.03,1.66.48,2.47-.55.82-1.66,1.03-2.47.48l-16.81-11.31c-.1-.04-.2-.09-.3-.16l-1.13-.74s-.02-.01-.03-.02c-1.5-1.03-3.45-1.05-4.95-.03L28.76,28.98c-.99.65-1.67,1.65-1.92,2.82-.25,1.19-.02,2.4.64,3.41.65.99,1.65,1.67,2.82,1.91,1.19.25,2.4.02,3.41-.64l32.6-21.47c.6-.4,1.38-.39,1.98.01l33.38,22.47c2.04,1.36,4.91.81,6.26-1.21,1.41-2.09.86-4.92-1.21-6.31l-7.48-5.04c-.82-.55-1.03-1.66-.48-2.47.55-.82,1.66-1.03,2.47-.48l7.48,5.04c3.7,2.48,4.68,7.53,2.18,11.25-1.54,2.31-4.09,3.55-6.69,3.55Z'
				/>
				<path
					className='cls-1'
					d='m99.89,25.1c-.98,0-1.78-.8-1.78-1.78v-14h-7.04v6.48c0,.98-.8,1.78-1.78,1.78s-1.78-.8-1.78-1.78V7.54c0-.98.8-1.78,1.78-1.78h10.61c.98,0,1.78.8,1.78,1.78v15.78c0,.98-.8,1.78-1.78,1.78Z'
				/>
				<polygon
					className='cls-1'
					points='65.37 84.67 61.81 84.67 61.81 57.05 51.03 57.05 51.03 84.67 47.47 84.67 47.47 53.49 65.37 53.49 65.37 84.67'
				/>
				<path
					className='cls-1'
					d='m88.8,69.44h-15.95v-15.95h15.95v15.95Zm-12.39-3.56h8.82v-8.82h-8.82v8.82Z'
				/>
				<path
					className='cls-1'
					d='m108.45,91.74c-.78,0-1.87-.01-3.31-.03-2.8-.04-7.03-.1-12.99-.1-4.36,0-6.35-4.73-6.35-9.13s3.41-7.87,7.61-7.87c.21,0,.44.01.66.03,1.68-2.41,4.46-3.9,7.42-3.9,3.46,0,6.64,2.08,8.11,5.18,3.65.59,6.45,3.89,6.45,7.86,0,4.39-3.41,7.95-7.61,7.95Zm-15.04-13.56c-2.23,0-4.04,1.93-4.04,4.3s.86,5.56,2.78,5.56c5.99,0,10.23.06,13.04.1,1.42.02,2.49.03,3.26.03,2.23,0,4.04-1.97,4.04-4.39s-1.81-4.39-4.04-4.39h-1.4l-.39-1.25c-.71-2.26-2.83-3.84-5.17-3.84-2.07,0-4,1.21-4.92,3.09l-.65,1.32-1.42-.39c-.36-.1-.77-.15-1.1-.15Z'
				/>
				<path
					className='cls-1'
					d='m1.06,49.59c0-.98.8-1.78,1.78-1.78h32.21c.98,0,1.78.8,1.78,1.78s-.8,1.78-1.78,1.78H2.84c-.98,0-1.78-.8-1.78-1.78Z'
				/>
				<path
					className='cls-1'
					d='m6.99,60.19c0-.98.67-1.78,1.49-1.78h26.87c.82,0,1.49.8,1.49,1.78s-.67,1.78-1.49,1.78H8.48c-.82,0-1.49-.8-1.49-1.78Z'
				/>
				<path
					className='cls-1'
					d='m12.92,70.78c0-.98.53-1.78,1.19-1.78h21.52c.66,0,1.19.8,1.19,1.78s-.53,1.78-1.19,1.78H14.11c-.66,0-1.19-.8-1.19-1.78Z'
				/>
			</svg>
		),
	};
	return variant ? SVG_ICONS[variant] : null;
}
