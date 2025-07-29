import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Provider from './Provider'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-montserrat',
	style: 'normal'
})

export const metadata: Metadata = {
	title: 'LiveDocs',
	description: 'Your go-to collaborative editor'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: {
					colorPrimary: '#3371FF',
					fontSize: '16px'
				}
			}}
		>
			<html
				lang='en'
				suppressHydrationWarning
			>
				<body
					className={cn(
						'min-h-screen antialiased font-montserrat',
						montserrat.variable
					)}
				>
					<Provider>{children}</Provider>
				</body>
			</html>
		</ClerkProvider>
	)
}
