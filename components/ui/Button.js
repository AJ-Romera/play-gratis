import React from 'react';

function Button({ btnMessage }) {
	return (
		<button className='bg-gray-700 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-gray-100 rounded-2xl hover:shadow-lg hover:bg-gray-800'>
			{btnMessage}
		</button>
	);
}

export default Button;
