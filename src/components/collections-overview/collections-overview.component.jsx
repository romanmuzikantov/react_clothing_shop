import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../preview-collection/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ data }) => (
    <div className="collections-overview">
        {
            data.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    data: selectShopData
})

export default connect(mapStateToProps)(CollectionsOverview)