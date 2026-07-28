export type Review = {
  quote: string;
  author: string;
  city?: string;
  date: string;
  source: 'Yelp' | 'Google' | 'The Infatuation' | 'Seattle\'s Child';
  elite?: boolean;
  excerpt?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      'This Northgate donut shop churns out exemplary, inexpensive donuts that also happen to be the best in town. Instead of fake fruit essence, the donuts are coated with a glaze that contains actual bits of blueberry, orange zest, or raspberry puree.',
    author: 'Aimee Rizzo',
    city: 'Senior Staff Writer, Seattle',
    date: 'August 2023',
    source: 'The Infatuation',
  },
  {
    quote:
      'Oh the colors, the colors! The wide and ever-changing variety of donut here makes it a kids dream come true and a huge family favorite. Jewels of sugar on every shelf.',
    author: 'Editorial',
    city: 'Doughnut Trail',
    date: '2024',
    source: 'Seattle\'s Child',
  },
  {
    quote:
      'I\'m not usually a donut fan, but their donuts changed my life. Everyone there is super patient and friendly. The shop is small but it\'s homey and comfortable. Every time I\'m in Seattle I stop and get some donuts from here.',
    author: 'Fernanda A.',
    city: 'Kennewick, WA',
    date: 'April 2026',
    source: 'Yelp',
  },
  {
    quote:
      'Go early! Some of the best donuts I\'ve ever tried. So fluffy and delicious. The man helping me for my first visit was so nice and gave me a sample too! The store is take out with coffee and donuts available. Store is bright with a beautiful large donut display case.',
    author: 'Sierra W.',
    city: 'Seattle, WA',
    date: 'November 2025',
    source: 'Yelp',
    elite: true,
  },
  {
    quote:
      'A true gem in North Seattle. There\'s something so satisfying about stumbling upon a great hole-in-the-wall spot, and this old-school donut shop is exactly that. Tucked into a strip mall in Northgate, it\'s one of the last of its kind in Seattle. No frills, just good donuts.',
    author: 'Ellen K.',
    city: 'Saint Louis, MO',
    date: 'May 2025',
    source: 'Yelp',
    elite: true,
  },
  {
    quote:
      'We love supporting not only local owned, but Cambodian owned businesses. They are the sweetest family and show so much kindness and welcome us all the time. The wife loves to always give us free samples and donut holes. They make the best mochi donuts ever.',
    author: 'Vic A.',
    city: 'Seattle, WA',
    date: 'July 2025',
    source: 'Yelp',
    elite: true,
  },
  {
    quote:
      'Yes, I have a favorite donut shop I\'ve been going to for over 20 years, but it\'s just far enough to be too far for regular visits. I discovered this donut gem when reading "Seattle\'s top 10". It was the best discovery I\'ve made in awhile.',
    author: 'Leonard Jack',
    city: 'Seattle, WA',
    date: 'January 2025',
    source: 'Yelp',
    elite: true,
  },
  {
    quote:
      'Donuts are delicious and light and warm. Amazing flavor. Lovely owner as well who was gracious and helpful and told us her favorites.',
    author: 'Bryson M.',
    city: 'UT',
    date: 'March 2026',
    source: 'Yelp',
  },
  {
    quote:
      'The most unique donut that I tried from this shop was the croissant donut, slight crispiness combined with the decadence of frosting and cake-like texture. The donuts are also filled to the brim with the fillings of your choice.',
    author: 'Michael X.',
    city: 'Bellevue, WA',
    date: 'September 2024',
    source: 'Yelp',
    elite: true,
  },
  {
    quote:
      'Have driven by Family Donut Shop many times but finally stopped in. We dropped in on a Monday morning and were greeted with donut hole samples. My favourite was the apple fritter. Will be back for more FDS donuts next trip.',
    author: 'Jonny M.',
    city: 'Vancouver, BC',
    date: 'March 2024',
    source: 'Yelp',
    elite: true,
  },
];

export const homepageReviews = reviews.slice(0, 4);
