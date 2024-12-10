import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountProduct, DiscountProduct$Outbound } from "./discountproduct.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageOnceForeverDurationMetadata = string | number | boolean;
/**
 * Schema for a percentage discount that is applied once or forever.
 */
export type DiscountPercentageOnceForeverDuration = {
    duration: DiscountDuration;
    type: DiscountType;
    basisPoints: number;
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
export declare const DiscountPercentageOnceForeverDurationMetadata$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDurationMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageOnceForeverDurationMetadata$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDurationMetadata$ {
    /** @deprecated use `DiscountPercentageOnceForeverDurationMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationMetadata>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDurationMetadata$Outbound;
}
export declare function discountPercentageOnceForeverDurationMetadataToJSON(discountPercentageOnceForeverDurationMetadata: DiscountPercentageOnceForeverDurationMetadata): string;
export declare function discountPercentageOnceForeverDurationMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDurationMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageOnceForeverDuration$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDuration$Outbound = {
    duration: string;
    type: string;
    basis_points: number;
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
export declare const DiscountPercentageOnceForeverDuration$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDuration$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDuration$ {
    /** @deprecated use `DiscountPercentageOnceForeverDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDuration$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDuration>;
    /** @deprecated use `DiscountPercentageOnceForeverDuration$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDuration$Outbound;
}
export declare function discountPercentageOnceForeverDurationToJSON(discountPercentageOnceForeverDuration: DiscountPercentageOnceForeverDuration): string;
export declare function discountPercentageOnceForeverDurationFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDuration, SDKValidationError>;
//# sourceMappingURL=discountpercentageonceforeverduration.d.ts.map