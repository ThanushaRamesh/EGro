import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../Components/collection-overview';
import CollectionPage from '../collection';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;