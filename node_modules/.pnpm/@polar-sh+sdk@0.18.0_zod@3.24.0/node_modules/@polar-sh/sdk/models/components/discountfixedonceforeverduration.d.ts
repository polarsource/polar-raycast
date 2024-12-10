import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountProduct, DiscountProduct$Outbound } from "./discountproduct.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedOnceForeverDurationMetadata = string | number | boolean;
/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
export type DiscountFixedOnceForeverDuration = {
    duration: DiscountDuration;
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
export declare const DiscountFixedOnceForeverDurationMetadata$inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDurationMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedOnceForeverDurationMetadata$outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDurationMetadata$ {
    /** @deprecated use `DiscountFixedOnceForeverDurationMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDurationMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationMetadata>;
    /** @deprecated use `DiscountFixedOnceForeverDurationMetadata$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDurationMetadata$Outbound;
}
export declare function discountFixedOnceForeverDurationMetadataToJSON(discountFixedOnceForeverDurationMetadata: DiscountFixedOnceForeverDurationMetadata): string;
export declare function discountFixedOnceForeverDurationMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDurationMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedOnceForeverDuration$inboundSchema: z.ZodType<DiscountFixedOnceForeverDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDuration$Outbound = {
    duration: string;
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
export declare const DiscountFixedOnceForeverDuration$outboundSchema: z.ZodType<DiscountFixedOnceForeverDuration$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDuration$ {
    /** @deprecated use `DiscountFixedOnceForeverDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDuration$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDuration>;
    /** @deprecated use `DiscountFixedOnceForeverDuration$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDuration$Outbound;
}
export declare function discountFixedOnceForeverDurationToJSON(discountFixedOnceForeverDuration: DiscountFixedOnceForeverDuration): string;
export declare function discountFixedOnceForeverDurationFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDuration, SDKValidationError>;
//# sourceMappingURL=discountfixedonceforeverduration.d.ts.map