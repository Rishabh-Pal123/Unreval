export interface CancellationRule {
    currently_here: boolean;
    title: string;
    sub_title: string;
    type: number;
    amount: number;
    currency: string;
    to_date: string | null;
    from_date: string | null;
}

export interface CancellationTimeline {
    cancellation_rules: {
        currently_here: boolean;
        title: string;
        sub_title: string;
        type: number;
        amount: number;
        currency: string;
        to_date: string | null;
        from_date: string | null;
    }[];
    free_cancellation: number;
    no_show: number;
    no_show_description: string | null;
    free_cancellation_description: string;
}

export interface Properties {
    passenger_names_required_for_booking: number;
    allows_extra_meals: boolean;
    allows_special_requests: boolean;
    allows_bedding_preference: boolean;
    min_stay: string;
    date_apply_min_stay: string;
    on_request: number;
}

export interface DisplayProperty {
    name: string;
    display_name: string;
    icon_name: string;
    order: string;
    value: string;
}

export interface AdditionalInfo {
    tariff_notes: string;
    short_tariff_notes: string;
}

export interface CancellationInfoRule {
    date_info: string;
    description: string;
    cost: number | null;
}

export interface CancellationInfo {
    free_cancellation: number;
    free_cancellation_info: string;
    free_cancel_description: string;
    free_amendment_description: string | null;
    cancellation_rules: {
        date_info: string;
        description: string;
        cost: number | null;
    }[];
}

export interface PriceBreakUp {
    unravel_markup: number;
    total_sale_price: number;
    dotw_discounted_price: number;
    fixed_markup_price: number;
    dynamic_markup_price: number;
    base_price: number;
    unravel_commission: number;
    client_commission: number;
    final_discounted_price: number;
}

export interface Promo {
    discount: number | null;
    offer_type: string | null;
    offer_title: string | null;
    offer_description: string | null;
    offer_condition: string | null;
    offer_note: string | null;
    offer_stay: string | null;
    offer_pay: string | null;
    offer_upgrade_to_room_id: string | null;
    offer_upgrade_to_meal_id: string | null;
    offer_discounted_nights: number | null;
    offer_total_price: number | null;
    offer_discounted_total_price: number | null;
}

export interface PromoList {
    discount: number;
    offer_type: string;
    offer_title: string;
    offer_description: string;
    offer_condition: string | null;
    offer_note: string | null;
    offer_stay: string | null;
    offer_pay: string | null;
    offer_upgrade_to_room_id: string | null;
    offer_upgrade_to_meal_id: string | null;
    offer_discounted_nights: number | null;
    offer_total_price: number;
    offer_discounted_total_price: number;
}

export interface Markup {
    fixed_markup: number;
    dynamic_markup: number;
}

export interface MarkupShare {
    discount: number;
    client_commission: number;
    unravel_commission: number;
}

export interface TotalPrice {
    total_price: number;
    discounted_price: number;
    total_price_rounded: number;
    discounted_price_rounded: number;
    currency: string;
    price_break_up: PriceBreakUp[];
    previous_price: number | null;
    previous_price_rounded: number | null;
    price_changed: boolean | null;
    offer_present: boolean;
    promo: Promo;
    promo_list: PromoList[];
    markup: Markup;
    markup_share: MarkupShare;
}

export interface OriginalCancellationRule {
    runno: number;
    to_date?: string;
    to_date_details?: string;
    from_date?: string;
    from_date_details?: string;
    amend_charge: {
        value: number;
        formatted: string;
    };
    cancel_charge: {
        value: number;
        formatted: string;
    };
    charge: {
        value: number;
        formatted: string;
    };
}

export interface OriginalCancellationInfo {
    count: number;
    rule: OriginalCancellationRule[];
}





interface ImageUrls {
    square: string;
    portrait: string;
    landscape: string;
    thumbnail: string;
    fullscreen: string;
    transcoded: string;
}

interface ImageSet {
    twoX: ImageUrls;
    threeX: ImageUrls;
}

interface Address {
    city: string;
    country: string;
    continent: string;
    country_code: string;
    neighbourhood: string | null;
}

interface VideoUrl {
    med: string;
}

interface Prompt {
    usage: number;
    prompt_id: string;
    text: string;
    order: number;
    type: number;
}

export interface ItemDetails {
    item_id: string;
    item_id_string: string;
    video_id: string;
    position: number;
    image: ImageSet;
    video_caption: string;
    address: Address;
    video_url: VideoUrl;
    prompt_list: Prompt[];
}

interface HotelAddress {
    city: string;
    country: string;
    country_code: string;
    continent: string;
}

interface ImageSizes {
    square: string;
    portrait: string;
    landscape: string;
    thumbnail: string;
    fullscreen: string;
    transcoded: string;
}

interface Image {
    twoX: ImageSizes;
    threeX: ImageSizes;
}

interface DestinationInfo {
    destination_id: string;
    trip_available: boolean;
    activity_available: boolean;
    vacation_home_available: boolean;
}

interface Rating {
    value: string;
}

interface Review {
    id: string;
    source_id: number;
    source_url: string;
    source_name: string;
    source_title: string;
    description: string;
    rating: Rating;
    rating_text: string;
    order: number;
    icon_url: string;
}

interface TermsAndConditions {
    valid_till: string;
    valid_from: string;
    book_from: string;
    book_till: string;
}

export interface PromoList {
    offer_id: string | null;
    date_info: string;
    order: number;
    tnc: string[];
    tnc_title: string;
    discount: number;
    is_exclusive: number;
    date_info_object: TermsAndConditions;
    metadata: any;
    offer_type: string;
    offer_title: string;
    offer_description: string;
}

interface Price {
    text: string;
    type: string;
    unit: string;
    value: number;
}

interface VendorProperties {
    base_markup: {
        markup_type: string;
        fixed_markup: number;
        dynamic_markup: number;
    };
    maxRoomCount: number;
    childrenAgeRange: {
        max: number;
        min: number;
    };
    allowMultiSelection: boolean;
    price: Price[];
    checkInDate: string;
    checkOutDate: string;
    vendor_id: number;
    product_id: number;
    priority: number;
}

interface ReviewSummary {
    tag: string;
    source: string;
    max_rating: number;
    review_count: number;
    review_rating: number;
}

export interface DistFromCentre {
    text: string;
    unit: string;
    value: number;
}

export interface Properties {
    price: Price[];
    budget: string;
    star_rating: number;
    stay_awards: string[];
    sub_heading: string | null;
    redirect_url: string;
    redirect_text: string;
    review_summary: ReviewSummary[];
    dist_from_centre: {
        text: string;
        unit: string;
        value: number;
    }
    ;
    primary_sub_category: string;
}

export interface NewProperty {
    value: string | number | string[];
    name: string;
    display_name: string;
    icon_url: string | null;
    icon_name: string | null;
    type: string | null;
    color: string | null;
    order: number;
    display_limit: number;
    subtitle: string | null;
    metadata: any;
}

export interface Markup {
    markup: number;
    dynamic_markup: number;
}

export interface MarkupShare {
    discount: number;
    client_commission: number;
    unravel_commission: number;
}


export interface Variants {
    cancellation_timeline: {
        cancellation_rules: {
            currently_here: boolean;
            title: string;
            sub_title: string;
            type: number;
            amount: number;
            currency: string;
            to_date: string | null;
            from_date: string | null;
        }[];
        free_cancellation: number;
        no_show: number;
        no_show_description: string | null;
        free_cancellation_description: string;
    };
    old_cancellation_timeline: {
        cancellation_rules: {
            currently_here: boolean;
            title: string;
            sub_title: string;
            type: number;
            amount: number;
            currency: string;
            to_date: string | null;
            from_date: string | null;
        }[];
        free_cancellation: number;
        no_show: number;
        no_show_description: string | null;
        free_cancellation_description: string;
    };
    is_discount: boolean;
    context: any;
    variant_code: string;
    variant_id: string;
    name: string;
    properties: {
        price: {
            text: string;
            type: string;
            unit: string;
            value: number;
        }[];
        budget: string;
        star_rating: number;
        stay_awards: string[];
        sub_heading: string | null;
        redirect_url: string;
        redirect_text: string;
        review_summary: {
            tag: string;
            source: string;
            max_rating: number;
            review_count: number;
            review_rating: number;
        }[];
        dist_from_centre: {
            text: string;
            unit: string;
            value: number;
        };
        primary_sub_category: string;
    };
    display_properties: {
        name: string;
        display_name: string;
        icon_name: string;
        order: string;
        value: string;
    }[];
    additional_info: {
        tariff_notes: string;
        short_tariff_notes: string;
    };
    cancellation_info: {
        free_cancellation: number;
        free_cancellation_info: string;
        free_cancel_description: string;
        free_amendment_description: string | null;
        cancellation_rules: {
            date_info: string;
            description: string;
            cost: number | null;
        }[];
    };
    total_price: {
        total_price: number;
        discounted_price: number;
        total_price_rounded: number;
        discounted_price_rounded: number;
        currency: string;
        price_break_up: {
            unravel_markup: number;
            total_sale_price: number;
            dotw_discounted_price: number;
            fixed_markup_price: number;
            dynamic_markup_price: number;
            base_price: number;
            unravel_commission: number;
            client_commission: number;
            final_discounted_price: number;
        }[];
        previous_price: number | null;
        previous_price_rounded: number | null;
        price_changed: boolean | null;
        offer_present: boolean;
        promo: Promo;
        promo_list: PromoList[];
        markup: Markup;
        markup_share: {
            discount: number;
            client_commission: number;
            unravel_commission: number;
        };
    };
    is_bookable: boolean;
    valid_for_occupancy: any;
    price_info: string;
    original_cancellation_info: {
        count: number;
        rule: {
            runno: number;
            to_date?: string;
            to_date_details?: string;
            from_date?: string;
            from_date_details?: string;
            amend_charge: {
                value: number;
                formatted: string;
            };
            cancel_charge: {
                value: number;
                formatted: string;
            };
            charge: {
                value: number;
                formatted: string;
            };
        }[];
    };
    roomwise_coupon: any;
}

export interface RoomDetails {
    name: string;
    room_type_code: string;
    variants_count: number;
    images: string | null;
    variants: Variants[];
    properties: {
        room_capacity: {
            max_occupancy: number;
            max_adult_with_children: number;
            min_child_age: number;
            max_child_age: number;
            max_adult: number;
            max_extra_bed: number;
            max_children: number;
        };
        bed_type: string;
        promotions: {
            count: number;
            special?: {
                runno: number;
                type: string;
                special_name: string;
                discount: number;
                stay: number;
            }[]
        };
        video_url?: {
            med: string;
        };
        occupancy_info?: any;
        room_amenities?: any;
        room_images?: {
            id: string;
            key: string;
            count: number;
            image_urls: string[];
            display_name: string;
        }
    };
    no_of_adults: number | null;
    no_of_children: number | null;
    no_of_total_adults: number | null;
    no_of_total_children: number | null;
    children_ages: any[] | null;
    passengers_details: any[] | null;
    price: any | null;
    booking_code: string | null;
    booking_type: string | null;
    extra_bed: any | null;
    bedding_preference: string | null;
    special_requests: string | null;
    cancellation_status: string | null;
    cancel_reason: string | null;
    booking_reference_number: string | null;
    additional_requests: string | null;
    additional_services: string | null;
    supplier_reference: string | null;
    context: any | null;
    package_price: any | null;
    package_cancellation_info: any | null;
    package_cancellation_timeline: any | null;
}

export interface RoomsData{
    name: string;
    room_type_code: string;
    variants_count: number;
    images: string | null;
    variants: Variants[];
    properties: {
        room_capacity: {
            max_occupancy: number;
            max_adult_with_children: number;
            min_child_age: number;
            max_child_age: number;
            max_adult: number;
            max_extra_bed: number;
            max_children: number;
        };
        bed_type: string;
        promotions: {
            count: number;
            special?: {
                runno: number;
                type: string;
                special_name: string;
                discount: number;
                stay: number;
            }[]
        };
        video_url?: {
            med: string;
        };
        occupancy_info?: any;
        room_amenities?: any;
        room_images?: {
            id: string;
            key: string;
            count: number;
            image_urls: string[];
            display_name: string;
        }[]
    };
    no_of_adults: number | null;
    no_of_children: number | null;
    no_of_total_adults: number | null;
    no_of_total_children: number | null;
    children_ages: any[] | null;
    passengers_details: any[] | null;
    price: any | null;
    booking_code: string | null;
    booking_type: string | null;
    extra_bed: any | null;
    bedding_preference: string | null;
    special_requests: string | null;
    cancellation_status: string | null;
    cancel_reason: string | null;
    booking_reference_number: string | null;
    additional_requests: string | null;
    additional_services: string | null;
    supplier_reference: string | null;
    context: any | null;
    package_price: any | null;
    package_cancellation_info: any | null;
    package_cancellation_timeline: any | null;
}


export interface RoomDataList {
    hotel_details: {
        item_id: string;
        client_id: string | null;
        display_name: string;
        item_type: string;
        item_sub_type: string | null;
        name: string;
        address: HotelAddress;
        description: string;
        images: Image[];
        videos: [];
        new_videos: ItemDetails[];
        components: any;
        location: {
            latitude: any;
            longitude: any;
        };
        prompts: any;
        display_properties: any[];
        additional_info: {
            value: {
                html: string;
            };
            name: string;
            display_name: string;
            icon_url: string;
            icon_name: string;
            type: string;
            color: any;
            order: number;
            display_limit: number;
            subtitle: any;
            metadata: any;
        }[];
        layout: {
            value: {
                name: string;
                order: number;
                icon_name: string;
                display_name: string;
            }[];
            name: string;
            display_name: string;
            icon_url: string;
            icon_name: string;
            type: string;
            color: any;
            order: number;
            display_limit: number;
            subtitle: any;
            metadata: any;
        }[];
        is_default: boolean;
        curator_info: any;
        destination_info: DestinationInfo;
        notes: string | null;
        linkable_items: any;
        bookable: any;
        google_place_id: string;
        reviews: Review[];
        vendor_id: string;
        action_text: string;
        promo_list: PromoList[];
        price_info: {
            is_discount_present: boolean;
            total_price: number;
            discounted_price: number;
            unit: string;
        };
        exclusive_coupons: any;
        prompts_exist: number;
        vendor_properties: VendorProperties[];
        hotel_properties: any[];
        tpa_properties: any[];
        properties: Properties;
        new_properties: NewProperty[];
        markup: Markup;
        markup_share: MarkupShare;
    };
    rooms_by_serial_no: {
        serial_no: 0;
        rooms: RoomsData[];
    }[];
    avail_id: string;
}