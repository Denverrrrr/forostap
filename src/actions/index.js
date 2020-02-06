const featuredItemsRequested = () => {
  return {
    type: 'FETCH_FEATURED_ITEMS_REQUESTED',
  };
};

const referencesItemsRequested = () => {
  return {
    type: "FETCH_REFERENCES_ITEMS_REQUESTED"
  };
};

const featuredItemsLoaded = (newFeaturedItem) => {
  return {
    type: 'FETCH_FEATURED_ITEMS_SUCCESS',
    payload: newFeaturedItem,
  };
};

const referencesItemsLoaded = newFeaturedItem => {
  return {
    type: "FETCH_REFERENCES_ITEMS_SUCCESS",
    payload: newFeaturedItem
  };
};

const featuredItemsError = error => {
  return {
    type: "FETCH_FEATURED_ITEMS_FAILURE",
    payload: error
  };
};

const referencesItemsError = (error) => {
  return {
    type: 'FETCH_REFERENCES_ITEMS_FAILURE',
    payload: error,
  };
};

const referencesFilter = btnName => {
  return {
    type: "FILTER_REFERENCES",
    payload: btnName
  };
};

const fetchFeaturedItems = (givebatService, dispatch) => () => {
  dispatch(featuredItemsRequested());
  givebatService
    .getFeaturedItems()
    .then(data => dispatch(featuredItemsLoaded(data)))
    .catch(err => dispatch(featuredItemsError(err)));
};

const fetchReferencesItems = (givebatService, dispatch) => () => {
  dispatch(referencesItemsRequested());
  givebatService
    .getReferencesItems()
    .then(data => dispatch(referencesItemsLoaded(data)))
    .catch(err => dispatch(referencesItemsError(err)));
};


export {
  fetchFeaturedItems,
  referencesFilter,
  fetchReferencesItems,
};