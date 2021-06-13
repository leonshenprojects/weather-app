import React, { useEffect, useState } from 'react';
import loadingIndicator from './../../static/assets/svg/loading.svg';

const LoadingIndicator: React.FC = () => {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		// Only display the loading indicator for slow responses, minimise chances of users seeing a "flash" for fast responses
		const id = setTimeout(() => {
			setHidden(false);
		}, 500);
		return () => {
			clearTimeout(id);
		};
	}, []);
	return hidden ? null : (
		<div className="LoadingIndicator">
			<img alt="Loading indicator." src={loadingIndicator} />
		</div>
	);
};

export default LoadingIndicator;
