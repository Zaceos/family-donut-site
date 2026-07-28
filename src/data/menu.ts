export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  badge?: 'signature' | 'staff-pick' | 'fan-favorite' | 'new' | 'kids';
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'signatures',
    title: 'Signatures',
    blurb: 'The three you came for. The reason the case is empty by lunch.',
    items: [
      {
        name: 'Apple Fritter',
        description:
          'Flat, dense, crisp at the edges, packed with cinnamon. The Infatuation calls it the best in town. We tend to agree.',
        price: '$2.99',
        badge: 'signature',
      },
      {
        name: 'Buttermilk Bar',
        description: 'Phenomenally moist, gently tangy, glazed clean. A grown-up classic.',
        badge: 'staff-pick',
      },
      {
        name: 'Old Fashioned',
        description: 'Craggy crunch on the outside, soft and warm on the inside. Coffee in the other hand.',
      },
    ],
  },
  {
    id: 'glazed-and-cake',
    title: 'Glazed and Cake',
    blurb: 'Made fresh before sunrise, glazed with real fruit, sold out by midmorning.',
    items: [
      {
        name: 'Blueberry Cake',
        description: 'Purpley-blue hue, random pumps of real blueberry. Art on a napkin.',
        badge: 'staff-pick',
      },
      { name: 'Orange Cake', description: 'Bright orange zest folded into the glaze. Light, citrusy, not too sweet.' },
      { name: 'Raspberry Cruller', description: 'The kid favorite. Light, airy, raspberry-pink and singing.' },
      { name: 'French Cruller', description: 'Vanilla, delicate, made for dunking.' },
      { name: 'Chocolate Frosted', description: 'The one your kid will pick. Glossy, simple, perfect.' },
      { name: 'Glazed Raised', description: 'The platonic glazed donut. Pillowy, sweet, warm if you catch it early.' },
    ],
  },
  {
    id: 'fancy',
    title: 'Fancy',
    blurb: 'The ones we get a little extra with.',
    items: [
      {
        name: 'Maple Cronut',
        description: 'Light, airy, slightly chewy. Maple glaze with real depth.',
        price: '$2.99',
        badge: 'fan-favorite',
      },
      {
        name: 'Croissant Donut',
        description: 'Slight flaky crisp from the croissant, decadence from the donut. One of a kind.',
      },
      { name: 'Bear Claw', description: 'Cinnamon, almond, a serious morning move.' },
      { name: 'Maple Bacon Bar', description: 'Salty, sweet, the answer to brunch when brunch is a line.' },
      { name: 'Maple Cinnamon Roll', description: 'Big, slow, gooey center. Two-hand donut.' },
    ],
  },
  {
    id: 'mochi',
    title: 'Mochi',
    blurb: 'Cult favorites, chewy at the bite, light all the way through.',
    items: [
      {
        name: 'Mochi Donut, Cinnamon Sugar',
        description: 'Warm-spice, classic, a chewier bite than you expect.',
        badge: 'fan-favorite',
      },
      { name: 'Mochi Donut, Chocolate', description: 'Cocoa-glossy, springy, gone in three bites.' },
      { name: 'Mochi Donut, Rotating Glaze', description: 'Whatever Pete is testing this week. Ask before you grab.' },
    ],
  },
  {
    id: 'filled',
    title: 'Filled',
    blurb: 'Filled to the brim. We mean it.',
    items: [
      { name: 'Bavarian Cream Filled', description: 'Pastry cream pumped generously, chocolate on top.' },
      { name: 'Lemon Filled', description: 'Bright, tart, not too sweet, balanced filling to dough.' },
      { name: 'Cream Cheese Donut', description: 'A quiet favorite for the regulars.' },
    ],
  },
  {
    id: 'savory',
    title: 'Savory',
    blurb: 'When you need protein with your sugar.',
    items: [
      {
        name: 'Ham and Cheese Croissant',
        description: 'Flaky, warm, a regular order for the breakfast-on-the-way crowd.',
        price: '$6.15',
      },
    ],
  },
  {
    id: 'extras',
    title: 'On Your Way Out',
    blurb: 'The little things that make this place this place.',
    items: [
      { name: 'Donut Hole on a Stick', description: 'Free, on the way out. Yes, really. Yes, every visit.', badge: 'signature' },
      { name: 'Coffee', description: 'Fresh, hot, $1 territory. Pairs with everything in the case.' },
      { name: 'Donut Hole Bag', description: 'A small bag of glazed holes. The thing the kids ask for.', badge: 'kids' },
    ],
  },
];

export const priceNote =
  'Most donuts run $1.99 to $2.99. Prices confirmed from 2024 and 2025 reviewer notes; the case is the source of truth.';
