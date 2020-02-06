
const initialState = {
  featuredItems: [],
  loading: true,
  error: null,
  referencesItems:[],
  referencesFilterCriterion: 'news',
  referencesFilter:[],
};

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
      const initRefItems = action.payload.filter(item =>
        item.type.includes(state.referencesFilterCriterion)
      );
      return {
        ...state,
        referencesItems: action.payload,
        referencesFilter: initRefItems,
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


    case "FILTER_REFERENCES":
      const criterion = action.payload;
      const filtered = state.referencesItems.filter( item =>
        item.type.includes(criterion)
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