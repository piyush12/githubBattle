import React from 'react';
import {PropagateLoader} from 'react-spinners';

const Loader = ({loading, sizeUnit, size, color, ...rest}) => {
	return (
		<div className="sweet-loading">
			<PropagateLoader
				sizeUnit={sizeUnit}
				size={size}
				color={color}
				loading={loading}
				{...rest}
			/>
		</div>
	);
};

export default Loader;
