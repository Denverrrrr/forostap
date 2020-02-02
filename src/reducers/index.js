const initialState = {
  featuredItems: [
    {
      id: 1,
      title: "Changelog",
      description: "News and podcasts for developers",
      backgroundImage:
        "https://givebat.com/images/featured/body_changelog_2.png"
    },

    {
      id: 2,
      title: "Indizr",
      description: "Everything Web 3.0",
      backgroundImage:
        "https://givebat.com/images/featured/body_changelog_2.png"
    },

    {
      id: 3,
      title: "Crypto Companions",
      description:
        "The Basic Attention Token is one of the most exciting, innovative, and widely adopted projects in the entire crypto / blockchain space.",
      backgroundImage:
        "https://givebat.com/images/collections/hero_crypto_companions.jpg"
    },

    
  ],
  loading: true,
  error: null
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