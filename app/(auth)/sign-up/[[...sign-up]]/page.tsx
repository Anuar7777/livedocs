import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
	return (
		<main className='auth-page'>
			<SignUp
				appearance={{
					elements: {
						footer: 'hidden'
					}
				}}
			/>
		</main>
	)
}

export default SignUpPage
