import { Fragment, type ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ENUM_DIALOGS } from '~/libs/conts';
import { useStore } from '~/utils/zustand/store';
import LeadForm from '../Forms/SellerLeadForm';

export default function Modals() {
	const { modal: dialog, onChange } = useStore((store) => store.entries.modal);
	const isDialogValid = ENUM_DIALOGS.includes(dialog.toLowerCase());

	const mapDialogs: Record<string, ReactNode> = {
		'seller-form': (
			<Dialog.Panel
				className='w-full h-full sm:h-auto sm:w-auto max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all grid grid-cols-1 gap-6'
				style={{
					minWidth: '350px',
				}}>
				<Dialog.Title as='h3' className='font-bold'>
					Let's Get Started!
				</Dialog.Title>
				<LeadForm />
			</Dialog.Panel>
		),
	};

	return dialog && isDialogValid ? (
		<Transition
			appear
			show={Boolean(
				ENUM_DIALOGS.find(
					(typeOfDialog) => typeOfDialog.toLowerCase() === dialog
				)
			)}
			as={Fragment}>
			<Dialog as='div' className='relative z-50' onClose={() => onChange('')}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center bg-dark/75'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							{mapDialogs[dialog]}
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	) : null;
}

