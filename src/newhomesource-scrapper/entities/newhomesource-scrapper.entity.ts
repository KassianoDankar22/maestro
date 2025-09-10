class Landmarks {
  name: string;
  distance: string;
  address: string;
}

class NeighborhoodAmenities {
  grocery_stores: Landmarks[];
  specialized_stores: Landmarks[];
  restaurants: Landmarks[];
  coffee_shops: Landmarks[];
  shopping: Landmarks[];
  bars_and_nightlife: Landmarks[];
}

class CommunityServices {
  utilities: Landmarks[];
  social_activities: Landmarks[];
  health_and_fitness: Landmarks[];
  community_services: Landmarks[];
}

class HomeServices {
  utilities: Landmarks[];
  social_activities: Landmarks[];
  health_and_fitness: string[];
  community_services: Landmarks[];
  neighborhood_amenities: {
    grocery_stores: Landmarks[];
    specialized_stores: Landmarks[];
    restaurants: Landmarks[];
    coffee_shops: Landmarks[];
    shopping: Landmarks[];
    bars_and_nightlife: Landmarks[];
  };
  hoa_fees: string;
}

class BuilderDetails {
  logo_url: string;
  description: string;
}

class Home {
  url: string;
  type: string;
  name: string;
  price: string;
  builder_details: BuilderDetails;
  comunity_neighbourhood: HomeServices;
  home_type: string;
  bedrooms: string;
  bathrooms: string;
  half_bathrooms: string;
  garage: string;
  square_feet: string;
  stories: string;
  primary_bed_location: string;
  features: string[];
  images: string[];
}

class Communities {
  url: string;
  image_url: string;
  name: string;
  builderCorp: string;
  price_low: string;
  price_high: string;
  zipcode: string;
  sq_ft_range: string;
  amenities: string[];
  overview: string;
  hoa: string;
  location: string;

  homes: Home[];
  nearby_schools: Landmarks[];
  builder_details: BuilderDetails;
  comunity_neighbourhood: CommunityServices;
  neighborhood_amenities: NeighborhoodAmenities;
  hoa_fees: string;
}

export class NewhomesourceScrapper {
  communities: Communities[];
}
