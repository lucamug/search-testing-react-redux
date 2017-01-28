import React, { PropTypes } from 'react';
import ProductRow from './ProductRow';

const products = [
	{ name: 'Zavvi' },
	{ name: 'Superdry' },
	{ name: 'Waterstones' },
	{ name: 'Music Magpie' },
	{ name: 'IWOOT' },
	{ name: 'Canon' },
	{ name: 'Accessorize' },
	{ name: 'SpeedyHen' },
	{ name: 'Currys' },
	{ name: 'Wayfair' },
	{ name: 'Base.com' },
	{ name: 'Co-op Electrical Shop' },
	{ name: 'Claire\'s' },
	{ name: 'Topman' },
	{ name: 'Molton Brown' },
	{ name: 'Wordery' },
	{ name: 'Cath Kidston' },
	{ name: 'Hotels.com' }
];

const ProductTable = ({ filter }) => {
	let rows = [];
	products.forEach((p) => {
		const nameLC = p.name.toLowerCase();
		const filterLC = filter.toLowerCase();
		if (nameLC.indexOf(filterLC) !== -1) {
			rows.push(
				<ProductRow key={p.name} data={p} />
			);
		}
	});
	return <div> {rows} </div>;
};

ProductTable.propTypes = {
	filter: PropTypes.string
};

export default ProductTable;
