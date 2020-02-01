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


export { featuredItemsRequested, featuredItemsLoaded, featuredItemsError };