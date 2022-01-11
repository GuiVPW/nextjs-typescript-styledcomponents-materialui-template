import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import Copyright from '../components/Copyright'
import Link from '../components/Link'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hello World</title>
				<meta name="description" content="App home" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Container maxWidth="sm">
					<Box sx={{ my: 4 }}>
						<Typography variant="h4" component="h1" gutterBottom>
							Next.js v5-beta with TypeScript example
						</Typography>
						<Link href="/about" color="secondary">
							Go to the about page
						</Link>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	)
}

export default Home
