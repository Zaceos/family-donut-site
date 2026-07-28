export const site = {
  name: 'Family Donut',
  fullName: 'Family Donut Shop',
  tagline: 'Fresh and real, since 1993.',
  description:
    'A family-run Northgate donut shop turning out the best apple fritters, mochis, and old-fashioneds in Seattle. Take-out only, sell out by midmorning, free donut hole on your way out.',
  owner: 'Pete Thav',
  established: 1993,
  address: {
    street: '2100 N Northgate Way, Suite F',
    city: 'Seattle',
    state: 'WA',
    zip: '98133',
    neighborhood: 'Northgate',
    full: '2100 N Northgate Way, Suite F, Seattle, WA 98133',
  },
  phone: '(206) 368-9107',
  phoneLink: 'tel:+12063689107',
  social: {
    facebook: 'https://www.facebook.com/familydonutnorthgate',
    yelp: 'https://www.yelp.com/biz/family-donut-shop-seattle-4',
  },
  ratings: [
    { source: 'Google', value: '5.0', count: 'verified locals' },
    { source: 'Yelp', value: '4.6', count: '369 reviews' },
    { source: 'The Infatuation', value: 'Best in Seattle', count: 'Aimee Rizzo, 2023' },
  ],
  hours: [
    { day: 'Monday', open: '5:00 AM', close: '2:00 PM' },
    { day: 'Tuesday', open: 'Closed', close: '' },
    { day: 'Wednesday', open: '5:00 AM', close: '2:00 PM' },
    { day: 'Thursday', open: '5:00 AM', close: '2:00 PM' },
    { day: 'Friday', open: '5:00 AM', close: '2:00 PM' },
    { day: 'Saturday', open: '5:00 AM', close: '2:00 PM' },
    { day: 'Sunday', open: '5:00 AM', close: '2:00 PM' },
  ],
  practicalities: [
    { label: 'Order style', value: 'Take-out only. Grab and go.' },
    { label: 'Coffee', value: 'Yes, alongside the case.' },
    { label: 'Parking', value: 'Free lot shared with the strip plaza, plenty of spots at sunrise.' },
    { label: 'Payment', value: 'Credit cards and Apple Pay.' },
    { label: 'Accessibility', value: 'Wheelchair accessible.' },
    { label: 'Heads up', value: 'Weekends sell out by 10 AM. Tuesdays closed.' },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.4!2d-122.3354!3d47.7090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014e5e8e8e8e8%3A0x0!2sFamily+Donut+Shop!5e0!3m2!1sen!2sus',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/visit', label: 'Visit' },
];
