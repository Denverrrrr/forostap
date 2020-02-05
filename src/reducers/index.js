
const initialState = {
  featuredItems: [],
  loading: true,
  error: null,
  referencesItems:[],
  referencesFilterCriterion: 'news',
  referencesFilter:[],
};
console.log(initialState.referencesFilterCriterion);

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "FETCH_FEATURED_ITEMS_REQUESTED":
      return {
        ...state,
        featuredItems: [],
        loading: true,
        error: null
      };

    case "FETCH_FEATURED_ITEMS_SUCCESS":
      return {
        ...state,
        featuredItems: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_FEATURED_ITEMS_FAILURE":
      return {
        ...state,
        featuredItems: [],
        loading: false,
        error: action.payload
      };

    case "FETCH_REFERENCES_ITEMS_REQUESTED":
      return {
        ...state,
        referencesItem: [],
        loading: true,
        error: null
      };

    case "FETCH_REFERENCES_ITEMS_SUCCESS":
      return {
        ...state,
        referencesItems: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_REFERENCES_ITEMS_FAILURE":
      return {
        ...state,
        referencesItems: [],
        loading: false,
        error: action.payload
      };

    case "REFERENCES_DID_MOUNT":
      const initFiltered = state.referencesItems.filter(
        item => item.type === state.referencesFilterCriterion
      );

      return {
        ...state,
        referencesFilter: initFiltered
      };

    case "FILTER_REFERENCES":
      const criterion = action.payload;
      const filtered = state.referencesItems.filter(
        item => item.type === criterion
      );

      return {
        ...state,
        referencesFilterCriterion: criterion,
        referencesFilter: filtered
      };

    default:
      return state;
  }
}

export default reducer;