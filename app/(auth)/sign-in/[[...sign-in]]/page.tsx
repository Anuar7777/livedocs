'use client'

import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
	return (
		<main className='auth-page'>
			<SignIn
				appearance={{
					elements: {
						footer: 'hidden'
					}
				}}
			/>
		</main>
	)
}

export default SignInPage
