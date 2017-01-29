import React, { PropTypes } from 'react';
import { productRow } from '../styles/productRow.sass';

const ProductRow = ({ data }) =>
	<div className={productRow}>
		<p>{data.name}</p>
	</div>;

ProductRow.propTypes = {
	data: PropTypes.object
};

export default ProductRow;
