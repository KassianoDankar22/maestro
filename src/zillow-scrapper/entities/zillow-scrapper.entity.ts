export class User {
  isLoggedIn: boolean;
  hasHousingConnectorPermission: boolean;
  savedHomesCount: number;
  personalizedSearchTraceID: string;
  guid: string;
  zuid: string;
  isBot: boolean;
  email: string;
  displayName: string;
}

// --- Map & Region ---
export class UserPosition {
  lat: number | null;
  lon: number | null;
}

export class MapState {
  customRegionPolygonWkt: string | null;
  schoolPolygonWkt: string | null;
  isCurrentLocationSearch: boolean;
  userPosition: UserPosition;
}

export class RegionInfo {
  regionId: number;
  regionType: number;
  regionName: string;
  displayName: string;
  isPointRegion: boolean;
}

export class RegionBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export class RegionState {
  regionInfo: RegionInfo[];
  regionBounds: RegionBounds;
}

// --- SEO ---
export class SearchPageSeoObject {
  baseUrl: string;
  windowTitle: string;
  metaDescription: string;
}

// --- Home Details & HDP Data ---
export class LatLong {
  latitude: number;
  longitude: number;
}

export class ListingSubType {
  is_newHome: boolean;
}

export class HomeInfo {
  zpid: number;
  streetAddress: string;
  zipcode: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  price: number;
  bathrooms: number;
  bedrooms: number;
  livingArea: number;
  homeType: string;
  homeStatus: string;
  daysOnZillow: number;
  isFeatured: boolean;
  shouldHighlight: boolean;
  zestimate: number;
  rentZestimate: number;
  listing_sub_type: ListingSubType;
  isUnmappable: boolean;
  isPreforeclosureAuction: boolean;
  homeStatusForHDP: string;
  priceForHDP: number;
  timeOnZillow: number;
  newConstructionType: string;
  isNonOwnerOccupied: boolean;
  isPremierBuilder: boolean;
  isZillowOwned: boolean;
  currency: string;
  country: string;
  taxAssessedValue: number;
  lotAreaValue: number;
  lotAreaUnit: string;
  isShowcaseListing: boolean;
}

export class HdpData {
  homeInfo: HomeInfo;
}

// --- Photos ---
export class PhotoData {
  photoKey: string;
}

export class CarouselPhotosComposable {
  baseUrl: string;
  communityBaseUrl: string | null;
  photoData: PhotoData[];
  communityPhotoData: string | null;
  isStaticUrls: boolean;
}

// --- Result Items ---
export class ListResult {
  zpid: string;
  palsId: string;
  id: string;
  rawHomeStatusCd: string;
  marketingStatusSimplifiedCd: string;
  imgSrc: string;
  hasImage: boolean;
  detailUrl: string;
  statusType: string;
  statusText: string;
  countryCurrency: string;
  price: string;
  unformattedPrice: number;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZipcode: string;
  isUndisclosedAddress: boolean;
  beds: number;
  baths: number;
  area: number;
  latLong: LatLong;
  isZillowOwned: boolean;
  flexFieldText: string;
  contentType: string;
  hdpData: HdpData;
  isSaved: boolean;
  isUserClaimingOwner: boolean;
  isUserConfirmedClaim: boolean;
  pgapt: string;
  sgapt: string;
  zestimate: number;
  shouldShowZestimateAsPrice: boolean;
  has3DModel: boolean;
  hasVideo: boolean;
  isHomeRec: boolean;
  hasAdditionalAttributions: boolean;
  isFeaturedListing: boolean;
  isShowcaseListing: boolean;
  list: boolean;
  relaxed: boolean;
  info3String: string;
  brokerName: string;
  carouselPhotosComposable: CarouselPhotosComposable;
  builderName: string;
  isPaidBuilderNewConstruction: boolean;
}

export class MapResult {
  zpid: string;
  palsId: string;
  rawHomeStatusCd: string;
  marketingStatusSimplifiedCd: string;
  imgSrc: string;
  hasImage: boolean;
  detailUrl: string;
  statusType: string;
  statusText: string;
  price: string;
  priceLabel: string;
  address: string;
  addressState: string;
  beds: number;
  baths: number;
  area: number;
  latLong: LatLong;
  flexFieldText: string;
  contentType: string;
  hdpData: HdpData;
  isUserClaimingOwner: boolean;
  isUserConfirmedClaim: boolean;
  pgapt: string;
  sgapt: string;
  shouldShowZestimateAsPrice: boolean;
  has3DModel: boolean;
  hasVideo: boolean;
  isHomeRec: boolean;
  hasAdditionalAttributions: boolean;
  isFeaturedListing: boolean;
  isShowcaseListing: boolean;
  listingType: string;
  isFavorite: boolean;
  visited: boolean;
  info3String: string;
  brokerName: string;
  builderName: string;
  timeOnZillow: number;
  isPaidBuilderNewConstruction: boolean;
}

// --- Search & List Configuration ---
export class SearchResults {
  listResults: ListResult[];
  mapResults: MapResult[];
  relaxedResults: ListResult[];
  relaxedMapResults: MapResult[];
  resultsHash: string;
  showForYouCount: number;
  relaxedResultsHash: string;
  resultsCommingled: boolean;
  restrictedListingCount: number;
}

export class ZeroResultResponse {
  shouldShowZeroResultMessage: boolean;
  filterRemovalSuggestions: string | null;
}

export class Pagination {
  nextUrl: string;
}

export class AdTargets {
  guid: string;
  vers: string;
  premieragent: string;
  state: string;
  dma: string;
  cnty: string;
  city: string;
  mlat: string;
  mlong: string;
  listtp: string;
  searchtp: string;
}

export class AdsConfig {
  navAdSlot: string;
  displayAdSlot: string;
  targets: AdTargets;
  needsUpdate: boolean;
  restrictedAds: boolean;
}

export class ResultContext {
  ssid: number;
  context: string;
  contextImage: string;
}

export class ShareConfig {
  captchaKey: string;
  csrfToken: string;
}

export class SearchList {
  expansionDistance: number;
  staticBaseUrl: string | null;
  zeroResultResponse: ZeroResultResponse;
  pagination: Pagination;
  adsConfig: AdsConfig;
  totalResultCount: number;
  resultsPerPage: number;
  totalPages: number;
  limitSearchResultsCount: number | null;
  displayResultsCount: number;
  listResultsTitle: string;
  resultContexts: ResultContext[];
  pageRules: string;
  gdpUrl: string;
  zgGraphUrl: string;
  shareConfig: ShareConfig;
}

// --- Category Sections ---
export class Cat1 {
  searchResults: SearchResults;
  searchList: SearchList;
}

export class CategoryTotal {
  totalResultCount: number;
}

export class CategoryTotals {
  cat1: CategoryTotal;
  cat2: CategoryTotal;
}

// --- Root Response Class ---
export class RealEstateApiResponse {
  user: User;
  mapState: MapState;
  regionState: RegionState;
  searchPageSeoObject: SearchPageSeoObject;
  requestId: number;
  cat1: Cat1;
  categoryTotals: CategoryTotals;
}