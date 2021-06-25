import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title }) {
	return (
		<div className='bg-clouds-patter bg-fixed bg-no-repeat bg-cover w-full overflow-hidden'>
			<div className='bg-gray-900 bg-opacity-70'>
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

				<Header />

				<main className='px-5 container mx-auto max-w-full min-h-full'>
					{children}
				</main>

				<Footer />
			</div>
		</div>
	);
}

export default Layout;
