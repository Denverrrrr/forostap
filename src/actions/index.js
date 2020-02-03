const featuredItemsRequested = () => {
  return {
    type: 'FETCH_FEATURED_ITEMS_REQUESTED',
  };
};

const featuredItemsLoaded = (newFeaturedItem) => {
  return {
    type: 'FETCH_FEATURED_ITEMS_SUCCESS',
    payload: newFeaturedItem,
  };
};

const featuredItemsError = (error) => {
  return {
    type: 'FETCH_FEATURED_ITEMS_FAILURE',
    payload: error,
  };
};

const fetchFeaturedItems = (givebatService, dispatch) => () => {
  dispatch(featuredItemsRequested());
  givebatService
    .getFeaturedItems()
    .then(data => dispatch(featuredItemsLoaded(data)))
    .catch(err => dispatch(featuredItemsError(err)));
};


export { fetchFeaturedItems };