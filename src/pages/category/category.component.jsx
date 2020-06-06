import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'

import './category.styles.scss';

const CategoryPage = ({ collection: { title, items } }) => (
    <div className="category-page">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);