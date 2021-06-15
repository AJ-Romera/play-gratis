import About from './About';
import AditionalInfo from './AditionalInfo';
import Screenshots from './Screenshots';
import MinSystemRequirements from './MinSystemRequirements';

function MainSection({ game }) {
	return (
		<section className='col-span-3'>
			<h1 className='font-medium text-4xl text-justify text-indigo-100 mb-2'>
				{game.title}
			</h1>
			<About game={game} />
			<AditionalInfo game={game} />
			<Screenshots game={game} />
			<MinSystemRequirements game={game} />
			<hr className='mb-3 border-t-1 border-solid border-gray-600' />
			<p className='font-normal text-justify text-sm text-gray-400'>
				All material on this page is copyrighted by{' '}
				<span>©{game.publisher}</span> and their respective licensors.
				All other trademarks are the property of their respective
				owners.
			</p>
		</section>
	);
}

export default MainSection;
