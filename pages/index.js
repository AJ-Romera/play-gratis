import Layout from '../components/layout/Layout';

function Home() {
	return (
		<div>
			<Layout title='PlayGratis F2P Games'>
				<div className='flex flex-row items-center justify-center flex-1 mx-auto max-w-5xl text-center'>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<p className='text-5xl font-bold text-gray-200'>
								You can buy expensive games or you can find
								amazing free-to-play games
							</p>
							<p className='text-3xl font-normal text-gray-200'>
								Button here
							</p>
						</div>
						<p className='text-xl font-normal text-gray-200 bg-blue-700'>
							IMAGE HERE
						</p>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Home;
