import type { Metadata } from 'next'
import { Suspense } from 'react'

import { NewVerificationForm } from '@/app/features/auth/components/new-verification-form'

export const metadata: Metadata = {
	title: 'Подтверждение почты'
}

export default function NewVerificationPage() {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<NewVerificationForm />
		</Suspense>
	)
}
