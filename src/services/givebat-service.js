export default class GivebatService {
  
  featuredItems = [
    {
    id: 1,
    title: 'Changelog',
    description: 'News and podcasts for developers',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    ariaLabelledby: 'laptop emoji',
    emoji:'💻',
    },
    
    {
    id: 2,
    title: 'Indizr',
    description: 'Everything Web 3.0',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    ariaLabelledby: 'web emoji',
    emoji:'🕸',
    },

    {
    id: 3,
    title: 'Crypto Companions',
    description: 'The Basic Attention Token is one of the most exciting, innovative, and widely adopted projects in the entire crypto / blockchain space.',
    backgroundImage: 'https://givebat.com/images/collections/hero_crypto_companions.jpg',
    ariaLabelledby: 'money with wings emoji',
    emoji:'💸',
    },
  ];

  referencesItems=[
    {
    id: 1,
    title: 'Changelog',
    description: 'News and podcasts for developers',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    ariaLabelledby: 'laptop emoji',
    emoji:'💻',
    type: 'gaming'
    },
    
    {
    id: 2,
    title: 'Indizr',
    description: 'Everything Web 3.0',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    ariaLabelledby: 'web emoji',
    emoji:'🕸',
    type: 'fun'
    },

    {
    id: 3,
    title: 'Crypto Companions',
    description: 'The Basic Attention Token is one of the most exciting, innovative, and widely adopted projects in the entire crypto / blockchain space.',
    backgroundImage: 'https://givebat.com/images/collections/hero_crypto_companions.jpg',
    ariaLabelledby: 'money with wings emoji',
    emoji:'💸',
    type: 'news'
    },
  ];



  getFeaturedItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.featuredItems);
      }, 500);
    });
  }

  getReferencesItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.referencesItems);
      }, 500);
    });
  }
}