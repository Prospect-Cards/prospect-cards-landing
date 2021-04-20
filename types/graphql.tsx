import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  Upload: any;
};

/** Autogenerated return type of AcceptListingReports */
export type AcceptListingReportsPayload = {
  __typename?: 'AcceptListingReportsPayload';
  listing: Listing;
  message: Scalars['String'];
};

/** Autogenerated return type of AcceptOffer */
export type AcceptOfferPayload = {
  __typename?: 'AcceptOfferPayload';
  message: Scalars['String'];
  viewer: User;
};

export type ActiveRecordInterface = {
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Address = ActiveRecordInterface & {
  __typename?: 'Address';
  city: Scalars['String'];
  company: Maybe<Scalars['String']>;
  country: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  state: Scalars['String'];
  street1: Scalars['String'];
  street2: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  validated: Scalars['Boolean'];
  zip: Scalars['String'];
};

export type AddressInput = {
  name: Scalars['String'];
  street1: Scalars['String'];
  street2?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
  country: Scalars['String'];
};

export type AdminDashboard = ActiveRecordInterface & {
  __typename?: 'AdminDashboard';
  activeOfferCount: Scalars['Int'];
  allTimeVolume: Scalars['Int'];
  availableListingCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  day30Volume: Scalars['Int'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  registeredCount: Scalars['Int'];
  saleCount: Scalars['Int'];
  sellerCount: Scalars['Int'];
  totalListingCount: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AdminListingInput = {
  id: Scalars['Int'];
  status?: Maybe<ListingStatusEnum>;
};

/** Autogenerated return type of ApprovePayment */
export type ApprovePaymentPayload = {
  __typename?: 'ApprovePaymentPayload';
  message: Scalars['String'];
};

/** Autogenerated return type of ConfirmOffer */
export type ConfirmOfferPayload = {
  __typename?: 'ConfirmOfferPayload';
  message: Scalars['String'];
  viewer: Maybe<User>;
};

export type CounterOffer = ActiveRecordInterface & {
  __typename?: 'CounterOffer';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  expiration: Scalars['ISO8601DateTime'];
  id: Scalars['Int'];
  message: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Autogenerated return type of CounterOffer */
export type CounterOfferPayload = {
  __typename?: 'CounterOfferPayload';
  message: Scalars['String'];
  offer: Offer;
};

/** Autogenerated return type of CreateCredits */
export type CreateCreditsPayload = {
  __typename?: 'CreateCreditsPayload';
  message: Scalars['String'];
  user: User;
};

/** Autogenerated return type of DeleteListing */
export type DeleteListingPayload = {
  __typename?: 'DeleteListingPayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of EditListing */
export type EditListingPayload = {
  __typename?: 'EditListingPayload';
  listing: Listing;
  message: Scalars['String'];
};

export type EmailPreference = ActiveRecordInterface & {
  __typename?: 'EmailPreference';
  category: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  subscribed: Scalars['Boolean'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type EmailPreferenceInput = {
  category: Scalars['String'];
  subscribed: Scalars['Boolean'];
};

export type FiltersInput = {
  price?: Maybe<MaxMinInput>;
  player?: Maybe<Array<Scalars['String']>>;
  category?: Maybe<Array<Scalars['String']>>;
  year?: Maybe<Array<Scalars['String']>>;
  productType?: Maybe<Array<Scalars['String']>>;
  manufacturer?: Maybe<Array<Scalars['String']>>;
  setType?: Maybe<Array<Scalars['String']>>;
  grader?: Maybe<Array<Scalars['String']>>;
  grade?: Maybe<MaxMinInput>;
  parallel?: Maybe<Array<Scalars['String']>>;
  itemType?: Maybe<Array<Scalars['String']>>;
  rookie?: Maybe<Array<Scalars['Boolean']>>;
};

/** Autogenerated return type of ForgotPassword */
export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  message: Scalars['String'];
};

export enum HistogramTypeEnum {
  /** grade */
  Grade = 'grade',
  /** price */
  Price = 'price'
}


/** Autogenerated return type of InviteUser */
export type InviteUserPayload = {
  __typename?: 'InviteUserPayload';
  message: Scalars['String'];
  sellerInvitation: SellerInvitation;
};

export enum ItemTypeEnum {
  /** card */
  Card = 'card',
  /** lot */
  Lot = 'lot'
}

/** Autogenerated return type of JoinMailingList */
export type JoinMailingListPayload = {
  __typename?: 'JoinMailingListPayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

/** Autogenerated return type of LeaveFeedback */
export type LeaveFeedbackPayload = {
  __typename?: 'LeaveFeedbackPayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type LegalDocumentVersion = ActiveRecordInterface & {
  __typename?: 'LegalDocumentVersion';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  url: Scalars['String'];
};

export enum LegalDocumentVersionTypeEnum {
  /** terms_of_use */
  TermsOfUse = 'terms_of_use',
  /** privacy_policy */
  PrivacyPolicy = 'privacy_policy'
}

export type Listing = ActiveRecordInterface & {
  __typename?: 'Listing';
  acceptingOffers: Scalars['Boolean'];
  category: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  description: Scalars['String'];
  errors: Array<Scalars['String']>;
  grade: Maybe<Scalars['Float']>;
  grader: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images: Array<ListingImage>;
  isFavorited: Scalars['Boolean'];
  itemType: ItemTypeEnum;
  manufacturer: Maybe<Scalars['String']>;
  minPrice: Maybe<Scalars['Int']>;
  offers: Array<Offer>;
  ownedByUser: Scalars['Boolean'];
  parallel: Maybe<Scalars['String']>;
  pendingOfferByUser: Maybe<Scalars['Int']>;
  player: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  productType: Maybe<Scalars['String']>;
  reports: Array<ListingReport>;
  rookie: Scalars['Boolean'];
  seller: Seller;
  setType: Maybe<Scalars['String']>;
  shortText: Scalars['String'];
  similarListings: Array<Listing>;
  slug: Scalars['String'];
  status: ListingStatusEnum;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  year: Maybe<Scalars['Int']>;
};


export type ListingIsFavoritedArgs = {
  userId?: Maybe<Scalars['Int']>;
};

export type ListingImage = ActiveRecordInterface & {
  __typename?: 'ListingImage';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  position: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  url: Scalars['String'];
};

export type ListingInput = {
  id?: Maybe<Scalars['Int']>;
  itemType: ItemTypeEnum;
  title?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  price: Scalars['Float'];
  minPrice?: Maybe<Scalars['Float']>;
  images: Array<Scalars['Upload']>;
  year?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  setType?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Float']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie: Scalars['Boolean'];
  acceptingOffers: Scalars['Boolean'];
  sellerAgreedToTermsAndGuidelines: Scalars['Boolean'];
};

export type ListingReport = ActiveRecordInterface & {
  __typename?: 'ListingReport';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  reviewedAt: Maybe<Scalars['ISO8601DateTime']>;
  text: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export enum ListingStatusEnum {
  /** available */
  Available = 'available',
  /** pending_sale */
  PendingSale = 'pending_sale',
  /** sold */
  Sold = 'sold',
  /** disabled */
  Disabled = 'disabled'
}

export type MailingListMember = ActiveRecordInterface & {
  __typename?: 'MailingListMember';
  createdAt: Scalars['ISO8601DateTime'];
  email: Scalars['String'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Autogenerated return type of MarkNoticesRead */
export type MarkNoticesReadPayload = {
  __typename?: 'MarkNoticesReadPayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum MassUnitEnum {
  /** lb */
  Lb = 'lb',
  /** oz */
  Oz = 'oz'
}

export type MaxMinInput = {
  gte?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
};

export type Membership = ActiveRecordInterface & {
  __typename?: 'Membership';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  price: Scalars['Int'];
  term: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptListingReports: Maybe<AcceptListingReportsPayload>;
  acceptOffer: Maybe<AcceptOfferPayload>;
  approvePayment: Maybe<ApprovePaymentPayload>;
  confirmOffer: Maybe<ConfirmOfferPayload>;
  counterOffer: Maybe<CounterOfferPayload>;
  createCredits: Maybe<CreateCreditsPayload>;
  deleteListing: Maybe<DeleteListingPayload>;
  editListing: Maybe<EditListingPayload>;
  forgotPassword: Maybe<ForgotPasswordPayload>;
  inviteUser: Maybe<InviteUserPayload>;
  joinMailingList: Maybe<JoinMailingListPayload>;
  leaveFeedback: Maybe<LeaveFeedbackPayload>;
  markNoticesRead: Maybe<MarkNoticesReadPayload>;
  purchaseShippingLabel: Maybe<PurchaseShippingLabelPayload>;
  rejectCounterOffer: Maybe<RejectCounterOfferPayload>;
  rejectOffer: Maybe<RejectOfferPayload>;
  reportListing: Maybe<ReportListingPayload>;
  saveAddress: Maybe<SaveAddressPayload>;
  saveEmailPreferences: Maybe<SaveEmailPreferencesPayload>;
  saveListing: Maybe<SaveListingPayload>;
  saveOffer: Maybe<SaveOfferPayload>;
  saveProfilePicture: Maybe<SaveProfilePicturePayload>;
  saveReview: Maybe<SaveReviewPayload>;
  saveShipment: Maybe<SaveShipmentPayload>;
  syncPayment: Maybe<SyncPaymentPayload>;
  toggleFavoriteListing: Maybe<ToggleFavoriteListingPayload>;
  toggleFavoriteSeller: Maybe<ToggleFavoriteSellerPayload>;
  toggleListingPaused: Maybe<ToggleListingPausedPayload>;
  toggleVacationMode: Maybe<ToggleVacationModePayload>;
  trackInterest: Maybe<TrackInterestPayload>;
  updateListing: Maybe<UpdateListingPayload>;
};


export type MutationAcceptListingReportsArgs = {
  listingId: Scalars['Int'];
};


export type MutationAcceptOfferArgs = {
  offerId: Scalars['Int'];
};


export type MutationApprovePaymentArgs = {
  purchaseId: Scalars['Int'];
};


export type MutationConfirmOfferArgs = {
  offerId: Scalars['Int'];
};


export type MutationCounterOfferArgs = {
  offerId: Scalars['Int'];
  price: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};


export type MutationCreateCreditsArgs = {
  userId: Scalars['Int'];
  dollars: Scalars['Int'];
};


export type MutationDeleteListingArgs = {
  listingId: Scalars['Int'];
};


export type MutationEditListingArgs = {
  listingId: Scalars['Int'];
  price: Scalars['Int'];
  minPrice: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationInviteUserArgs = {
  email: Scalars['String'];
};


export type MutationJoinMailingListArgs = {
  email: Scalars['String'];
};


export type MutationLeaveFeedbackArgs = {
  message: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};


export type MutationPurchaseShippingLabelArgs = {
  purchaseId: Scalars['Int'];
  shippoRateId: Scalars['String'];
};


export type MutationRejectCounterOfferArgs = {
  counterOfferId: Scalars['Int'];
};


export type MutationRejectOfferArgs = {
  offerId: Scalars['Int'];
};


export type MutationReportListingArgs = {
  listingId: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationSaveAddressArgs = {
  address: AddressInput;
};


export type MutationSaveEmailPreferencesArgs = {
  emailPreferences: Array<EmailPreferenceInput>;
  token?: Maybe<Scalars['String']>;
};


export type MutationSaveListingArgs = {
  listing: ListingInput;
};


export type MutationSaveOfferArgs = {
  offer: OfferInput;
};


export type MutationSaveProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationSaveReviewArgs = {
  review: ReviewInput;
};


export type MutationSaveShipmentArgs = {
  shipment: ShipmentInput;
};


export type MutationSyncPaymentArgs = {
  paymentMethodId: Scalars['String'];
};


export type MutationToggleFavoriteListingArgs = {
  listingId: Scalars['Int'];
  isFavorited: Scalars['Boolean'];
};


export type MutationToggleFavoriteSellerArgs = {
  sellerId: Scalars['Int'];
  isFavorited: Scalars['Boolean'];
};


export type MutationToggleListingPausedArgs = {
  listingId: Scalars['Int'];
  pause: Scalars['Boolean'];
};


export type MutationToggleVacationModeArgs = {
  enabled: Scalars['Boolean'];
};


export type MutationTrackInterestArgs = {
  listingId: Scalars['Int'];
};


export type MutationUpdateListingArgs = {
  listing: AdminListingInput;
};

export type Notice = ActiveRecordInterface & {
  __typename?: 'Notice';
  avatar: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  path: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  unread: Scalars['Boolean'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Offer = ActiveRecordInterface & {
  __typename?: 'Offer';
  counterOffer: Maybe<CounterOffer>;
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  expiration: Scalars['ISO8601DateTime'];
  id: Scalars['Int'];
  listing: Listing;
  offerCount: Scalars['Int'];
  price: Scalars['Int'];
  status: OfferStatusEnum;
  updatedAt: Scalars['ISO8601DateTime'];
  user: User;
};

export type OfferInput = {
  price: Scalars['Float'];
  listingId: Scalars['Int'];
};

export enum OfferStatusEnum {
  /** open */
  Open = 'open',
  /** countered */
  Countered = 'countered',
  /** accepted */
  Accepted = 'accepted',
  /** rejected */
  Rejected = 'rejected'
}

export type ParcelInput = {
  length: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  weight: Scalars['Float'];
  massUnit: MassUnitEnum;
};

export type Purchase = ActiveRecordInterface & {
  __typename?: 'Purchase';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  listing: Listing;
  offer: Offer;
  review: Maybe<Review>;
  shipment: Maybe<Shipment>;
  shippingRates: Array<ShippingRate>;
  shippoTransaction: Maybe<ShippoTransaction>;
  updatedAt: Scalars['ISO8601DateTime'];
};


export type PurchaseShippingRatesArgs = {
  parcel: ParcelInput;
};

/** Autogenerated return type of PurchaseShippingLabel */
export type PurchaseShippingLabelPayload = {
  __typename?: 'PurchaseShippingLabelPayload';
  message: Scalars['String'];
  shipment: ShippoTransaction;
};

export type Query = {
  __typename?: 'Query';
  adminDashboard: AdminDashboard;
  adminPurchases: Array<Purchase>;
  appVersion: Scalars['String'];
  auth: Scalars['Boolean'];
  invitedViewer: Maybe<User>;
  legalDocumentVersion: LegalDocumentVersion;
  listing: Maybe<Listing>;
  mailingListMembers: Array<MailingListMember>;
  maybeViewer: Maybe<User>;
  offers: Array<Offer>;
  paymentApprovals: Array<Purchase>;
  purchase: Purchase;
  search: Search;
  seller: Seller;
  sellerInvitations: Array<SellerInvitation>;
  shippingProviders: Array<ShippingProvider>;
  stripeSetupIntentId: Scalars['String'];
  tags: Array<Tag>;
  users: Array<User>;
  viewer: User;
};


export type QueryInvitedViewerArgs = {
  token: Scalars['String'];
};


export type QueryLegalDocumentVersionArgs = {
  documentType: LegalDocumentVersionTypeEnum;
};


export type QueryListingArgs = {
  id: Scalars['Int'];
};


export type QueryPurchaseArgs = {
  token: Scalars['String'];
};


export type QuerySearchArgs = {
  search: SearchInput;
};


export type QuerySellerArgs = {
  username: Scalars['String'];
};


export type QueryTagsArgs = {
  context: TagTypesEnum;
  name?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['Int']>;
};


export type QueryViewerArgs = {
  token?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RejectCounterOffer */
export type RejectCounterOfferPayload = {
  __typename?: 'RejectCounterOfferPayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of RejectOffer */
export type RejectOfferPayload = {
  __typename?: 'RejectOfferPayload';
  message: Scalars['String'];
};

/** Autogenerated return type of ReportListing */
export type ReportListingPayload = {
  __typename?: 'ReportListingPayload';
  message: Scalars['String'];
};

export type Review = ActiveRecordInterface & {
  __typename?: 'Review';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  message: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ReviewInput = {
  purchaseId: Scalars['Int'];
  rating: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SaveAddress */
export type SaveAddressPayload = {
  __typename?: 'SaveAddressPayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of SaveEmailPreferences */
export type SaveEmailPreferencesPayload = {
  __typename?: 'SaveEmailPreferencesPayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of SaveListing */
export type SaveListingPayload = {
  __typename?: 'SaveListingPayload';
  message: Scalars['String'];
  newListingId: Maybe<Scalars['Int']>;
  viewer: User;
};

/** Autogenerated return type of SaveOffer */
export type SaveOfferPayload = {
  __typename?: 'SaveOfferPayload';
  message: Scalars['String'];
  offer: Maybe<Offer>;
};

/** Autogenerated return type of SaveProfilePicture */
export type SaveProfilePicturePayload = {
  __typename?: 'SaveProfilePicturePayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of SaveReview */
export type SaveReviewPayload = {
  __typename?: 'SaveReviewPayload';
  message: Scalars['String'];
  purchase: Purchase;
};

/** Autogenerated return type of SaveShipment */
export type SaveShipmentPayload = {
  __typename?: 'SaveShipmentPayload';
  message: Scalars['String'];
  purchase: Purchase;
};

export type Search = ActiveRecordInterface & {
  __typename?: 'Search';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  histogram: Array<Scalars['Int']>;
  id: Scalars['Int'];
  listings: Array<Listing>;
  resultCount: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};


export type SearchHistogramArgs = {
  context: HistogramTypeEnum;
};

export type SearchInput = {
  search?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  sort: SortInput;
  filters: FiltersInput;
};

export type Seller = ActiveRecordInterface & {
  __typename?: 'Seller';
  availableListings: Array<Listing>;
  avatar: Scalars['String'];
  averageRating: Scalars['Float'];
  createdAt: Scalars['ISO8601DateTime'];
  email: Scalars['String'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  isFavorited: Scalars['Boolean'];
  numberOfAvailableListings: Scalars['Int'];
  numberOfReviews: Scalars['Int'];
  reviews: Array<Review>;
  updatedAt: Scalars['ISO8601DateTime'];
  username: Scalars['String'];
  vacationMode: Scalars['Boolean'];
};


export type SellerAvailableListingsArgs = {
  pageLength?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type SellerIsFavoritedArgs = {
  userId?: Maybe<Scalars['Int']>;
};

export type SellerInvitation = ActiveRecordInterface & {
  __typename?: 'SellerInvitation';
  createdAt: Scalars['ISO8601DateTime'];
  email: Scalars['String'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  invitationAcceptedAt: Maybe<Scalars['ISO8601DateTime']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Shipment = ActiveRecordInterface & {
  __typename?: 'Shipment';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  shippingProvider: ShippingProvider;
  trackingCode: Scalars['String'];
  trackingUrl: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ShipmentInput = {
  purchaseId: Scalars['Int'];
  trackingCode: Scalars['String'];
  shippingProviderId: Scalars['Int'];
};

export type ShippingProvider = ActiveRecordInterface & {
  __typename?: 'ShippingProvider';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  label: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  url: Scalars['String'];
};

export type ShippingRate = {
  __typename?: 'ShippingRate';
  amount: Scalars['String'];
  amountTotal: Maybe<Scalars['String']>;
  arrivesBy: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  durationTerms: Scalars['String'];
  estimatedDays: Scalars['Int'];
  id: Scalars['String'];
  provider: Scalars['String'];
  providerImage200: Scalars['String'];
  providerImage75: Scalars['String'];
  serviceLevelName: Scalars['String'];
  test: Scalars['Boolean'];
};

export type ShippoTransaction = {
  __typename?: 'ShippoTransaction';
  eta: Maybe<Scalars['String']>;
  id: Scalars['String'];
  labelUrl: Scalars['String'];
  rate: Scalars['String'];
  trackingNumber: Scalars['String'];
  trackingStatus: TrackingStatusEnum;
  trackingUrlProvider: Scalars['String'];
};

export type SortInput = {
  label: Scalars['String'];
  dataField: Scalars['String'];
  sortBy: Scalars['String'];
};

export type StripeAccount = ActiveRecordInterface & {
  __typename?: 'StripeAccount';
  chargesEnabled: Scalars['Boolean'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  onboardingLink: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type StripePaymentMethod = ActiveRecordInterface & {
  __typename?: 'StripePaymentMethod';
  brand: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  id: Scalars['Int'];
  last4: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Autogenerated return type of SyncPayment */
export type SyncPaymentPayload = {
  __typename?: 'SyncPaymentPayload';
  message: Scalars['String'];
  viewer: User;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum TagTypesEnum {
  /** player */
  Player = 'player',
  /** category */
  Category = 'category',
  /** productType */
  ProductType = 'productType',
  /** setType */
  SetType = 'setType',
  /** manufacturer */
  Manufacturer = 'manufacturer',
  /** grader */
  Grader = 'grader',
  /** parallel */
  Parallel = 'parallel'
}

/** Autogenerated return type of ToggleFavoriteListing */
export type ToggleFavoriteListingPayload = {
  __typename?: 'ToggleFavoriteListingPayload';
  listing: Listing;
  message: Scalars['String'];
};

/** Autogenerated return type of ToggleFavoriteSeller */
export type ToggleFavoriteSellerPayload = {
  __typename?: 'ToggleFavoriteSellerPayload';
  message: Scalars['String'];
  seller: Seller;
};

/** Autogenerated return type of ToggleListingPaused */
export type ToggleListingPausedPayload = {
  __typename?: 'ToggleListingPausedPayload';
  listing: Listing;
  message: Scalars['String'];
};

/** Autogenerated return type of ToggleVacationMode */
export type ToggleVacationModePayload = {
  __typename?: 'ToggleVacationModePayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of TrackInterest */
export type TrackInterestPayload = {
  __typename?: 'TrackInterestPayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum TrackingStatusEnum {
  /** UNKNOWN */
  Unknown = 'UNKNOWN',
  /** PRE_TRANSIT */
  PreTransit = 'PRE_TRANSIT',
  /** TRANSIT */
  Transit = 'TRANSIT',
  /** DELIVERED */
  Delivered = 'DELIVERED',
  /** FAILURE */
  Failure = 'FAILURE',
  /** RETURNED */
  Returned = 'RETURNED'
}

/** Autogenerated return type of UpdateListing */
export type UpdateListingPayload = {
  __typename?: 'UpdateListingPayload';
  listing: Listing;
  message: Scalars['String'];
};


export type User = ActiveRecordInterface & {
  __typename?: 'User';
  address: Maybe<Address>;
  admin: Scalars['Boolean'];
  availableMemberships: Array<Membership>;
  avatar: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['ISO8601DateTime'];
  creditBalance: Scalars['Int'];
  email: Scalars['String'];
  emailPreferences: Array<EmailPreference>;
  errors: Array<Scalars['String']>;
  favoriteListings: Array<Listing>;
  favoriteSellers: Array<Seller>;
  fullName: Maybe<Scalars['String']>;
  hasActiveSubscription: Scalars['Boolean'];
  hasPaymentMethod: Scalars['Boolean'];
  id: Scalars['Int'];
  listing: Listing;
  listings: Array<Listing>;
  notices: Array<Notice>;
  offers: Array<Offer>;
  paymentMethod: Maybe<StripePaymentMethod>;
  purchases: Array<Purchase>;
  sale: Purchase;
  sales: Array<Purchase>;
  seller: Scalars['Boolean'];
  stripeAccount: StripeAccount;
  unreadNoticeCount: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  username: Scalars['String'];
  vacationMode: Scalars['Boolean'];
};


export type UserListingArgs = {
  id: Scalars['Int'];
};


export type UserListingsArgs = {
  status?: Maybe<Array<ListingStatusEnum>>;
};


export type UserOffersArgs = {
  status?: Maybe<ListingStatusEnum>;
};


export type UserSaleArgs = {
  purchaseId: Scalars['Int'];
};


export type UserStripeAccountArgs = {
  refresh?: Maybe<Scalars['Boolean']>;
};

export type JoinMailingListMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type JoinMailingListMutation = (
  { __typename?: 'Mutation' }
  & { joinMailingList: Maybe<(
    { __typename?: 'JoinMailingListPayload' }
    & Pick<JoinMailingListPayload, 'success' | 'message'>
  )> }
);


export const JoinMailingListDocument = gql`
    mutation joinMailingList($email: String!) {
  joinMailingList(email: $email) {
    success
    message
  }
}
    `;
export type JoinMailingListMutationFn = ApolloReactCommon.MutationFunction<JoinMailingListMutation, JoinMailingListMutationVariables>;

/**
 * __useJoinMailingListMutation__
 *
 * To run a mutation, you first call `useJoinMailingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinMailingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinMailingListMutation, { data, loading, error }] = useJoinMailingListMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useJoinMailingListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinMailingListMutation, JoinMailingListMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinMailingListMutation, JoinMailingListMutationVariables>(JoinMailingListDocument, baseOptions);
      }
export type JoinMailingListMutationHookResult = ReturnType<typeof useJoinMailingListMutation>;
export type JoinMailingListMutationResult = ApolloReactCommon.MutationResult<JoinMailingListMutation>;
export type JoinMailingListMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinMailingListMutation, JoinMailingListMutationVariables>;