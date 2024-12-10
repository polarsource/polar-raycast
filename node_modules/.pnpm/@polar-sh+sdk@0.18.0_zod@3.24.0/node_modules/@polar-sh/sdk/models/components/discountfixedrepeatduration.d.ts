import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountProduct, DiscountProduct$Outbound } from "./discountproduct.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedRepeatDurationMetadata = string | number | boolean;
/**
 * Schema for a fixed amount discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type DiscountFixedRepeatDuration = {
    duration: DiscountDuration;
    durationInMonths: number;
    type: DiscountType;
    amount: number;
    currency: string;
    /**
     * Creation timestamp of the object.
     */
    createdAt: Date;
    /**
     * Last modification timestamp of the object.
     */
    modifiedAt: Date | null;
    /**
     * The ID of the object.
     */
    id: string;
    metadata: {
        [k: string]: string | number | boolean;
    };
    /**
     * Name of the discount. Will be displayed to the customer when the discount is applied.
     */
    name: string;
    /**
     * Code customers can use to apply the discount during checkout.
     */
    code: string | null;
    /**
     * Timestamp after which the discount is redeemable.
     */
    startsAt: Date | null;
    /**
     * Timestamp after which the discount is no longer redeemable.
     */
    endsAt: Date | null;
    /**
     * Maximum number of times the discount can be redeemed.
     */
    maxRedemptions: number | null;
    /**
     * Number of times the discount has been redeemed.
     */
    redemptionsCount: number;
    /**
     * The organization ID.
     */
    organizationId: string;
    products: Array<DiscountProduct>;
};
/** @internal */
export declare const DiscountFixedRepeatDurationMetadata$inboundSchema: z.ZodType<DiscountFixedRepeatDurationMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDurationMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedRepeatDurationMetadata$outboundSchema: z.ZodType<DiscountFixedRepeatDurationMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDurationMetadata$ {
    /** @deprecated use `DiscountFixedRepeatDurationMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDurationMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDurationMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDurationMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationMetadata>;
    /** @deprecated use `DiscountFixedRepeatDurationMetadata$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDurationMetadata$Outbound;
}
export declare function discountFixedRepeatDurationMetadataToJSON(discountFixedRepeatDurationMetadata: DiscountFixedRepeatDurationMetadata): string;
export declare function discountFixedRepeatDurationMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDurationMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedRepeatDuration$inboundSchema: z.ZodType<DiscountFixedRepeatDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDuration$Outbound = {
    duration: string;
    duration_in_months: number;
    type: string;
    amount: number;
    currency: string;
    created_at: string;
    modified_at: string | null;
    id: string;
    metadata: {
        [k: string]: string | number | boolean;
    };
    name: string;
    code: string | null;
    starts_at: string | null;
    ends_at: string | null;
    max_redemptions: number | null;
    redemptions_count: number;
    organization_id: string;
    products: Array<DiscountProduct$Outbound>;
};
/** @internal */
export declare const DiscountFixedRepeatDuration$outboundSchema: z.ZodType<DiscountFixedRepeatDuration$Outbound, z.ZodTypeDef, DiscountFixedRepeatDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDuration$ {
    /** @deprecated use `DiscountFixedRepeatDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDuration$Outbound, z.ZodTypeDef, DiscountFixedRepeatDuration>;
    /** @deprecated use `DiscountFixedRepeatDuration$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDuration$Outbound;
}
export declare function discountFixedRepeatDurationToJSON(discountFixedRepeatDuration: DiscountFixedRepeatDuration): string;
export declare function discountFixedRepeatDurationFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDuration, SDKValidationError>;
//# sourceMappingURL=discountfixedrepeatduration.d.ts.map