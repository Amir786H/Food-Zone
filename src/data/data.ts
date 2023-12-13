import {ImageSourcePropType} from 'react-native';

export type Data = {
  name: string;
  location: string;
  image: ImageSourcePropType;
  about: string;
  rating: number;
  items?: any;
};

const data: Data[] = [
  {
    name: 'StarBucks',
    location: 'Delhi, India',
    image: require('../assets/Starbucks.jpg'),
    rating: 5,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget.',
    items: [
      {
        itemId: '595184df77c826cc6f223f9h',
        itemName: 'Duo Cocoa Mocha',
        price: 345,
        category: 'Beverages',
        active: true,
        favorites: false,
        image: require('../assets/DuoCocoaMocha.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa4',
        itemName: 'Iced White Mocha Coconut Barfi Latte',
        price: 370,
        category: 'Beverages',
        active: true,
        favorites: false,
        image: require('../assets/IcedBarfi.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa5',
        itemName: 'Masala Chicken Croissant',
        price: 265,
        category: 'main plates',
        active: true,
        favorites: false,
        image: require('../assets/Croissant.jpg'),
      },
    ],
  },
  {
    name: 'Sapphire Blue',
    location: 'Lucknow, India',
    image: require('../assets/bluesapphire.jpg'),
    rating: 3.4,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget.',
    items: [
      {
        itemId: '595184df77c826cc6f223f9f',
        itemName: 'ASPARAGUS + ARUGULA SALAD',
        price: 7.99,
        category: 'small plates',
        active: true,
        favorites: false,
        image: require('../assets/ShavedAsparagus.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa0',
        itemName: 'LETTUCE WRAPS',
        price: 11.99,
        category: 'appetizers',
        active: true,
        favorites: false,
        image: require('../assets/LettuceWrap.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa1',
        itemName: 'CRISPY FISH TACOS',
        price: 13.99,
        category: 'main plates',
        active: true,
        favorites: false,
        image: require('../assets/CrispyFishTacos.jpg'),
      },
    ],
  },
  {
    name: 'Star Deck Restaurant',
    location: 'Aligarh, India',
    image: require('../assets/stardeck.jpg'),
    rating: 4.5,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget.',
    items: [
      {
        itemId: '595184df77c826cc6f223f9I',
        itemName: 'ASPARAGUS SALAD',
        price: 125,
        category: 'small plates',
        active: true,
        favorites: false,
        image: require('../assets/ShavedAsparagus.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa6',
        itemName: 'LETTUCE WRAPS',
        price: 199,
        category: 'appetizers',
        active: true,
        favorites: false,
        image: require('../assets/LettuceWrap.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa7',
        itemName: 'CRISPY FISH TACOS',
        price: 275,
        category: 'main plates',
        active: true,
        favorites: false,
        image: require('../assets/CrispyFishTacos.jpg'),
      },
    ],
  },
  {
    name: 'The Legend',
    location: 'Allahabad, India',
    image: require('../assets/Thelegend.jpg'),
    rating: 5,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget.',
    items: [
      {
        itemId: '595184df77c826cc6f223f9g',
        itemName: 'Hot Chocolate Cake',
        price: 150,
        category: "small starter's",
        active: true,
        favorites: false,
        image: require('../assets/Hotchocolatecake.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa2',
        itemName: 'LETTUCE WRAPS',
        price: 195,
        category: 'appetizers',
        active: true,
        favorites: false,
        image: require('../assets/LettuceWrap.jpg'),
      },
      {
        itemId: '595184df77c826cc6f223fa3',
        itemName: 'CRISPY SWEET&CHILLI TACOS',
        price: 255,
        category: 'main plates',
        active: true,
        favorites: false,
        image: require('../assets/ChiliCrispTacos.jpg'),
      },
    ],
  },
];

export default data;
