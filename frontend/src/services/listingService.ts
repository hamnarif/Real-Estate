export type Listing = { 
  id: string; 
  title: string; 
  price: string; 
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
};

export async function getListings(params: Record<string, string>) {
  const items: Listing[] = [
    { 
      id: '1', 
      title: 'Cantilevered Glass House', 
      price: '$2,950,000', 
      imageUrl: '/images/Cantilevered Glass House.png',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      address: 'Forest Hill, Toronto'
    },
    { 
      id: '2', 
      title: 'Brutalist Penthouse', 
      price: '$1,650,000', 
      imageUrl: '/images/Brutalist Penthouse.png',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      address: 'Yorkville, Toronto'
    },
    { 
      id: '3', 
      title: 'Minimal Courtyard Villa', 
      price: '$4,100,000', 
      imageUrl: '/images/Minimal Courtyard Villa.png',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3800,
      address: 'Bridle Path, Toronto'
    },
    { 
      id: '4', 
      title: 'Timber Frame Retreat', 
      price: '$1,250,000', 
      imageUrl: '/images/Timber Frame Retreat.png',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1600,
      address: 'Muskoka, ON'
    },
  ];
  return { items, params };
}


