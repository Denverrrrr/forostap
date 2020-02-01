export default class GivebatService {
  
  data = [
    {
    id: 1,
    title: 'Changelog',
    description: 'News and podcasts for developers',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    },
    
    {
    id: 2,
    title: 'Indizr',
    description: 'Everything Web 3.0',
    backgroundImage: 'https://givebat.com/images/featured/body_changelog_2.png',
    },

    {
    id: 3,
    title: 'Crypto Companions',
    description: 'The Basic Attention Token is one of the most exciting, innovative, and widely adopted projects in the entire crypto / blockchain space.',
    backgroundImage: 'https://givebat.com/images/collections/hero_crypto_companions.jpg',
    },
  ];


  getFeaturedItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 500);
    });
  }
}