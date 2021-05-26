import React from 'react';
import Head from 'next/head';

function Layout({ children, title }) {
	return (
		<>
			<div>
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
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
						integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
						crossorigin='anonymous'
						referrerpolicy='no-referrer'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Odibee+Sans&display=swap'
						rel='stylesheet'
					/>
				</Head>

				{/* <Header /> */}

				<main>{children}</main>
			</div>
		</>
	);
}

export default Layout;
