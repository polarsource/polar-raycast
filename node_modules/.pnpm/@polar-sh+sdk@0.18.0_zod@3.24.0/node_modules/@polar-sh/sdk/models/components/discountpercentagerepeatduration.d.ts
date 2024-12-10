import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountProduct, DiscountProduct$Outbound } from "./discountproduct.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageRepeatDurationMetadata = string | number | boolean;
/**
 * Schema for a percentage discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type DiscountPercentageRepeatDuration = {
    duration: DiscountDuration;
    durationInMonths: number;
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
export declare const DiscountPercentageRepeatDurationMetadata$inboundSchema: z.ZodType<DiscountPercentageRepeatDurationMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDurationMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageRepeatDurationMetadata$outboundSchema: z.ZodType<DiscountPercentageRepeatDurationMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDurationMetadata$ {
    /** @deprecated use `DiscountPercentageRepeatDurationMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDurationMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDurationMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDurationMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationMetadata>;
    /** @deprecated use `DiscountPercentageRepeatDurationMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDurationMetadata$Outbound;
}
export declare function discountPercentageRepeatDurationMetadataToJSON(discountPercentageRepeatDurationMetadata: DiscountPercentageRepeatDurationMetadata): string;
export declare function discountPercentageRepeatDurationMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDurationMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageRepeatDuration$inboundSchema: z.ZodType<DiscountPercentageRepeatDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDuration$Outbound = {
    duration: string;
    duration_in_months: number;
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
export declare const DiscountPercentageRepeatDuration$outboundSchema: z.ZodType<DiscountPercentageRepeatDuration$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDuration$ {
    /** @deprecated use `DiscountPercentageRepeatDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDuration$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDuration>;
    /** @deprecated use `DiscountPercentageRepeatDuration$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDuration$Outbound;
}
export declare function discountPercentageRepeatDurationToJSON(discountPercentageRepeatDuration: DiscountPercentageRepeatDuration): string;
export declare function discountPercentageRepeatDurationFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDuration, SDKValidationError>;
//# sourceMappingURL=discountpercentagerepeatduration.d.ts.map