import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

function Home() {
	return (
		<div className='bg-clouds-patter bg-fixed bg-no-repeat bg-cover'>
			<div className='bg-gray-900 bg-opacity-70'>
				<Layout title='PlayGratis F2P Games'>
					<div className='flex flex-row items-center justify-center flex-1 mx-auto max-w-5xl min-h-screen text-center'>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<p className='text-5xl font-bold text-gray-200 mb-10'>
									You can buy expensive games or you can find
									amazing free-to-play games
								</p>
								<Link href='/explore'>
									<a className='border-2 border-indigo-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6'>
										Explore Now
									</a>
								</Link>
							</div>
							<Image
								src='/static/images/pexels-rodnae-productions-7915289.jpg'
								alt='Gamer girl playing by RODNAE Productions in Pexels'
								width={500}
								height={400}
							/>
						</div>
					</div>
				</Layout>
			</div>
		</div>
	);
}

export default Home;
