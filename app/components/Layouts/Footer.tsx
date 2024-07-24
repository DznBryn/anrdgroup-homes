import { Link } from '@remix-run/react';
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
		<div className='w-full h-auto m-0 mt-auto bg-dark p-12 text-white'>
			<p className='text-center text-white'> © Copyright {new Date().getFullYear()} | ANRD Group Inc. | <Link to={'/terms'} > Terms & Conditions</Link></p>
		</div>
	);
}