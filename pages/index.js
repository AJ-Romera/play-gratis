import Image from 'next/image';
import Link from 'next/link';

function Home() {
	return (
		<div className='bg-clouds-patter bg-fixed bg-no-repeat bg-cover'>
			<div className='bg-gray-900 bg-opacity-70'>
				<div className='flex flex-row flex-1 items-center justify-center mx-auto max-w-5xl min-h-screen text-center'>
					<div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center'>
						<section className='text-gray-600 body-font'>
							<div className='container mx-auto flex px-3 py-24 md:flex-row flex-col items-center'>
								<div className='flex flex-col justify-center items-center text-center'>
									<h1 className='mb-10 font-bold text-gray-200 text-4xl sm:text-3xl md:text-5xl'>
										You can buy expensive games or you can
										find amazing free-to-play games
									</h1>
									<div>
										<Link href='/explore'>
											<a className='border-2 border-indigo-500 rounded-lg font-bold text-blue-500 uppercase px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'>
												Explore Now
											</a>
										</Link>
									</div>
								</div>
							</div>
						</section>
						<div className='hidden sm:block'>
							<Image
								src='https://cdn.pixabay.com/photo/2016/10/30/23/05/controller-1784573_960_720.png'
								alt='White Game Controller in a Blue Circle'
								width={400}
								height={400}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
