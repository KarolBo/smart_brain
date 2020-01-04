import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{'Karol, your current rank is: '}
			</div>
			<div className='white f1'>
				{`${name}, your current count is ${entries}`}
			</div>
		</div>
	);
}

export default Rank;