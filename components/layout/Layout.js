import React from 'react';
import Head from 'next/head';

function Layout({ children, title }) {
	return (
		<>
			<div className='bg-gray-800'>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<title>{title}</title>
					<link rel='icon' href='/favicon.ico' />
					<meta
						name='description'
						content='PlayGratis is the ultimate directory for finding free-to-play PC or Browser games.'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Odibee+Sans&display=swap'
						rel='stylesheet'
					/>
				</Head>

				{/* <Header /> */}

				<main className='container mx-auto max-w-full pt-4 min-h-screen'>
					{children}
				</main>

				{/* <Footer /> */}
			</div>
		</>
	);
}

export default Layout;
