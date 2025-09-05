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
  utilities: string[];
  social_activities: string[];
  health_and_fitness: string[];
  community_services: string[];
}

class BuilderDetails {
  logo_url: string;
  description: string;
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

  // TODO: Pegar homes oficial
  homes: [];
  nearby_schools: [];
  builder_details: BuilderDetails;
  comunity_neighbourhood: CommunityServices;
  neighborhood_amenities: NeighborhoodAmenities;
  hoa_fees: string;
}

export class NewhomesourceScrapper {
  communities: Communities[];
}
