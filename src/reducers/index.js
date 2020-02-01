const initialState = {
  featuredItems: [],
  loading:true,
  error:null,
};

const reducer = (state = initialState, action) => {

  switch(action.type){
    
    case 'FETCH_FEATURED_ITEMS_REQUESTED':
      return {
        ...state,
        featuredItems: [],
        loading: true,
        error: null,
      };

    case 'FETCH_FEATURED_ITEMS_SUCCESS':
      return {
        ...state,
        featuredItems: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_FEATURED_ITEMS_FAILURE':
      return{
        ...state,
        featuredItems: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;