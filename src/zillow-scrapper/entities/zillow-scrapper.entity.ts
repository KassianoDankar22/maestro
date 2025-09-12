export class ZillowScrapper {
  // --- Informações do Usuário e Sessão ---
  user: {
    isLoggedIn: boolean;
    hasHousingConnectorPermission: boolean;
    savedHomesCount: number;
    personalizedSearchTraceID: string;
    guid: string;
    zuid: string;
    isBot: boolean;
    email: string;
    displayName: string;
  };

  // --- Estado do Mapa e Região ---
  mapState: {
    customRegionPolygonWkt: string | null;
    schoolPolygonWkt: string | null;
    isCurrentLocationSearch: boolean;
    userPosition: {
      lat: number | null;
      lon: number | null;
    };
  };

  regionState: {
    regionInfo: {
      regionId: number;
      regionType: number;
      regionName: string;
      displayName: string;
      isPointRegion: boolean;
    }[];
    regionBounds: {
      north: number;
      south: number;
      east: number;
      west: number;
    };
  };

  // --- SEO ---
  searchPageSeoObject: {
    baseUrl: string;
    windowTitle: string;
    metaDescription: string;
  };

  requestId: number;

  // --- Resultados da Busca (Categoria 1) ---
  cat1: {
    searchResults: {
      listResults: {
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
        latLong: {
          latitude: number;
          longitude: number;
        };
        isZillowOwned: boolean;
        flexFieldText: string;
        contentType: string;
        hdpData: {
          homeInfo: {
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
            listing_sub_type: {
              is_newHome: boolean;
            };
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
          };
        };
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
        carouselPhotosComposable: {
          baseUrl: string;
          communityBaseUrl: string | null;
          photoData: {
            photoKey: string;
          }[];
          communityPhotoData: string | null;
          isStaticUrls: boolean;
        };
        builderName: string;
        isPaidBuilderNewConstruction: boolean;
      }[];
      mapResults: {
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
        latLong: {
          latitude: number;
          longitude: number;
        };
        flexFieldText: string;
        contentType: string;
        hdpData: {
          homeInfo: {
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
            listing_sub_type: {
              is_newHome: boolean;
            };
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
          };
        };
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
      }[];
      relaxedResults: {
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
        latLong: {
          latitude: number;
          longitude: number;
        };
        isZillowOwned: boolean;
        flexFieldText: string;
        contentType: string;
        hdpData: {
          homeInfo: {
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
            listing_sub_type: {
              is_newHome: boolean;
            };
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
          };
        };
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
        carouselPhotosComposable: {
          baseUrl: string;
          communityBaseUrl: string | null;
          photoData: {
            photoKey: string;
          }[];
          communityPhotoData: string | null;
          isStaticUrls: boolean;
        };
        builderName: string;
        isPaidBuilderNewConstruction: boolean;
      }[];
      relaxedMapResults: {
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
        latLong: {
          latitude: number;
          longitude: number;
        };
        flexFieldText: string;
        contentType: string;
        hdpData: {
          homeInfo: {
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
            listing_sub_type: {
              is_newHome: boolean;
            };
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
          };
        };
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
      }[];
      resultsHash: string;
      showForYouCount: number;
      relaxedResultsHash: string;
      resultsCommingled: boolean;
      restrictedListingCount: number;
    };
    searchList: {
      expansionDistance: number;
      staticBaseUrl: string | null;
      zeroResultResponse: {
        shouldShowZeroResultMessage: boolean;
        filterRemovalSuggestions: string | null;
      };
      pagination: {
        nextUrl: string;
      };
      adsConfig: {
        navAdSlot: string;
        displayAdSlot: string;
        targets: {
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
        };
        needsUpdate: boolean;
        restrictedAds: boolean;
      };
      totalResultCount: number;
      resultsPerPage: number;
      totalPages: number;
      limitSearchResultsCount: number | null;
      displayResultsCount: number;
      listResultsTitle: string;
      resultContexts: {
        ssid: number;
        context: string;
        contextImage: string;
      }[];
      pageRules: string;
      gdpUrl: string;
      zgGraphUrl: string;
      shareConfig: {
        captchaKey: string;
        csrfToken: string;
      };
    };
  };

  // --- Totais por Categoria ---
  categoryTotals: {
    cat1: {
      totalResultCount: number;
    };
    cat2: {
      totalResultCount: number;
    };
  };
}