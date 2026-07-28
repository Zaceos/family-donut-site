export type Photo = {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'square';
  credit: string;
};

export const photos: Photo[] = [
  {
    src: '/images/yelp/apple-fritter-hero.jpg',
    alt: 'A large apple fritter with golden crisp edges sitting on parchment paper',
    span: 'tall',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/donuts-and-coffee.jpg',
    alt: 'Three donuts arranged next to a cup of coffee on a small table',
    span: 'wide',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/mochi-donuts.jpg',
    alt: 'A box of mochi donuts in assorted glazes from Family Donut Shop',
    span: 'square',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/apple-fritter-cross.jpg',
    alt: 'Cross-section of an apple fritter showing the airy interior and cinnamon swirl',
    span: 'square',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/dozen-donuts.jpg',
    alt: 'A dozen donuts in a pink bakery box, glazes and toppings varied',
    span: 'wide',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/display-case.jpg',
    alt: 'The full donut display case at Family Donut Shop, every shelf filled',
    span: 'tall',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/storefront.jpg',
    alt: 'The Family Donut Shop counter and morning crowd',
    span: 'square',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/exterior.jpg',
    alt: 'Family Donut Shop exterior in the Northgate strip plaza',
    span: 'wide',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/sign.jpg',
    alt: 'Family Donut Shop signage',
    span: 'square',
    credit: 'Yelp reviewer',
  },
  {
    src: '/images/yelp/vic-mochi.jpg',
    alt: 'A box of glazed mochi donuts, fresh from the case',
    span: 'square',
    credit: 'Vic A., Yelp',
  },
  {
    src: '/images/yelp/assortment.jpg',
    alt: 'Assorted donuts including orange creme, apple fritter, maple bar, and a French cruller',
    span: 'wide',
    credit: 'Bryson M., Yelp',
  },
  {
    src: '/images/yelp/fernanda-photo.jpg',
    alt: 'A pair of Family Donut donuts on a plate',
    span: 'square',
    credit: 'Fernanda A., Yelp',
  },
];

export const homepagePhotos = photos.slice(0, 6);
