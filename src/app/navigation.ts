

export const navigation = {


  women: {
    id: 'women',
    name: 'Women',
    featured: [
      {
        name: 'New Arrivals',
        imageSrc: 'https://thumbs.dreamstime.com/b/shopping-room-clothing-shop-young-women-choosing-jackets-sweater-262881558.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      },
      {
        name: 'Basic Tees',
        imageSrc: 'https://th.bing.com/th/id/OIP.Hnavcjso9BKmzuBoy6hLigAAAA?w=200&h=311&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      }

    ],
    sections: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: [
          { name: 'Tops', id: 'top' },
          { name: 'Dresses', id: 'women_dress' },
          { name: 'Women Jeans', id: 'women_jeans' },
          { name: 'Lengha Choli', id: 'lengha_choli' },
          { name: 'Sweaters', id: 'sweater' },
          { name: 'T-Shirts', id: 't-shirt' },
          { name: 'Jackets', id: 'jacket' },
          { name: 'Gowns', id: 'gowns' },
          { name: 'Sarees', id: 'saree' },
          { name: 'Kurtas', id: 'kurtas' },
        ],
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: [
          { name: 'Watches', id: 'watch' },
          { name: 'Wallets', id: 'wallet' },
          { name: 'Bags', id: 'bag' },
          { name: 'Sunglasses', id: 'sunglasses' },
          { name: 'Hats', id: 'hat' },
          { name: 'Belts', id: 'belt' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Full Nelson', id: 'full_nelson' },
          { name: 'My Way', id: 'my_way' },
          { name: 'Re-Arranged', id: 're_arranged' },
          { name: 'Counterfeit', id: 'counterfeit' },
          { name: 'Significant Other', id: 'significant_other' },
        ],
      },
    ],
  },
  men: {
    id: 'men',
    name: 'Men',
    featured: [
      {
        name: 'New Arrivals',
        imageSrc: 'https://th.bing.com/th/id/OIP.Dsol-HeUwrlsiX2G_9-IjQHaE8?w=287&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
      },
      {
        name: 'Artwork Tees',
        imageSrc: 'https://th.bing.com/th/id/OIP.YG_ltuB6w9Fc6Dbb1IpBRwHaLH?w=125&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',

        imageAlt:
          'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
      },
    ],
    sections: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: [
          { name: 'Mens Kurtas', id: 'mens_kurta' },
          { name: 'Shirt', id: 'shirt' },
          { name: 'Men Jeans', id: 'men_jeans' },
          { name: 'Sweaters', id: 'sweaters' },
          { name: 'T-Shirts', id: 't_shirt' },
          { name: 'Jackets', id: 'jackets' },
          { name: 'Activewear', id: 'activewear' },
        ],
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: [
          { name: 'Watches', id: 'watches' },
          { name: 'Wallets', id: 'wallets' },
          { name: 'Bags', id: 'bags' },
          { name: 'Sunglasses', id: 'sunglasses' },
          { name: 'Hats', id: 'hats' },
          { name: 'Belts', id: 'belts' },
        ],
      },
      {
        id: 'brands',
        name: 'Brands',
        items: [
          { name: 'Re-Arranged', id: 're_arranged' },
          { name: 'Counterfeit', id: 'counterfeit' },
          { name: 'Full Nelson', id: 'full_nelson' },
          { name: 'My Way', id: 'my_way' },
        ],
      },
    ],
  },



};


// pages: [
//   { name: 'Company', id: 'company' },
//   { name: 'Stores', id: 'stores' },
// ],