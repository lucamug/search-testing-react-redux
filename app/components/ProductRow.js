import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div style={{width: '20%', padding: '6px', height: '100px', float: 'left', boxSizing: 'border-box', textAlign: 'center'}}>
        <p style={{fontFamily: 'sans-serif', backgroundColor: '#eee', width: '100%', height: '100%', boxSizing: 'border-box', margin: '0', padding: '20px'}} >{data.name}</p>
    </div>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
