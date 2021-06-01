import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

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
							<Button />
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
	);
}

export default Home;
