import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedRepeatDurationBaseMetadata = string | number | boolean;
export type DiscountFixedRepeatDurationBase = {
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
};
/** @internal */
export declare const DiscountFixedRepeatDurationBaseMetadata$inboundSchema: z.ZodType<DiscountFixedRepeatDurationBaseMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDurationBaseMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedRepeatDurationBaseMetadata$outboundSchema: z.ZodType<DiscountFixedRepeatDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationBaseMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDurationBaseMetadata$ {
    /** @deprecated use `DiscountFixedRepeatDurationBaseMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDurationBaseMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDurationBaseMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationBaseMetadata>;
    /** @deprecated use `DiscountFixedRepeatDurationBaseMetadata$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDurationBaseMetadata$Outbound;
}
export declare function discountFixedRepeatDurationBaseMetadataToJSON(discountFixedRepeatDurationBaseMetadata: DiscountFixedRepeatDurationBaseMetadata): string;
export declare function discountFixedRepeatDurationBaseMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDurationBaseMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedRepeatDurationBase$inboundSchema: z.ZodType<DiscountFixedRepeatDurationBase, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDurationBase$Outbound = {
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
};
/** @internal */
export declare const DiscountFixedRepeatDurationBase$outboundSchema: z.ZodType<DiscountFixedRepeatDurationBase$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDurationBase$ {
    /** @deprecated use `DiscountFixedRepeatDurationBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDurationBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDurationBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDurationBase$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationBase>;
    /** @deprecated use `DiscountFixedRepeatDurationBase$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDurationBase$Outbound;
}
export declare function discountFixedRepeatDurationBaseToJSON(discountFixedRepeatDurationBase: DiscountFixedRepeatDurationBase): string;
export declare function discountFixedRepeatDurationBaseFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDurationBase, SDKValidationError>;
//# sourceMappingURL=discountfixedrepeatdurationbase.d.ts.map