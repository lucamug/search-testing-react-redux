import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className={filterableTable}>
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />
            <svg style={{width: '40px', position: 'relative', top: '12px', left: '20px'}} className="cp-Icon" viewBox="0 0 36.8 36.8">
                <path d="M36 34.4l-9.4-9.5c2.3-2.6 3.8-6.1 3.8-9.9C30.4 6.8 23.7.1 15.5.1 7.2.2.6 6.9.6 15.1S7.2 30 15.4 30c3.5 0 6.7-1.2 9.2-3.2l9.5 9.5c.3.3.6.4.9.4.3 0 .7-.1.9-.4.6-.5.6-1.4.1-1.9zM3.2 15.1c0-6.8 5.5-12.2 12.2-12.2 6.8 0 12.2 5.5 12.2 12.2 0 6.8-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2z"></path>
            </svg>
            <ProductTable filter={filter} />
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
