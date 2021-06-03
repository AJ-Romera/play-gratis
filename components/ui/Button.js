function Button({ btnMessage }) {
	return (
		<a className='border-2 border-indigo-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white mr-6 cursor-pointer'>
			{btnMessage}
		</a>
	);
}

export default Button;
