import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { selectShopData } from '../../redux/shop/shop.selectors';

const ShopPage = ({ data }) => (
    data.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
    ))
)

const mapStateToProps = createStructuredSelector({
    data: selectShopData
})

export default connect(mapStateToProps)(ShopPage);