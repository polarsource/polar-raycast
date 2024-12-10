import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedOnceForeverDurationBaseMetadata = string | number | boolean;
export type DiscountFixedOnceForeverDurationBase = {
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
};
/** @internal */
export declare const DiscountFixedOnceForeverDurationBaseMetadata$inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBaseMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDurationBaseMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedOnceForeverDurationBaseMetadata$outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationBaseMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDurationBaseMetadata$ {
    /** @deprecated use `DiscountFixedOnceForeverDurationBaseMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBaseMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDurationBaseMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationBaseMetadata>;
    /** @deprecated use `DiscountFixedOnceForeverDurationBaseMetadata$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDurationBaseMetadata$Outbound;
}
export declare function discountFixedOnceForeverDurationBaseMetadataToJSON(discountFixedOnceForeverDurationBaseMetadata: DiscountFixedOnceForeverDurationBaseMetadata): string;
export declare function discountFixedOnceForeverDurationBaseMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDurationBaseMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedOnceForeverDurationBase$inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBase, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDurationBase$Outbound = {
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
};
/** @internal */
export declare const DiscountFixedOnceForeverDurationBase$outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBase$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDurationBase$ {
    /** @deprecated use `DiscountFixedOnceForeverDurationBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDurationBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationBase$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationBase>;
    /** @deprecated use `DiscountFixedOnceForeverDurationBase$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDurationBase$Outbound;
}
export declare function discountFixedOnceForeverDurationBaseToJSON(discountFixedOnceForeverDurationBase: DiscountFixedOnceForeverDurationBase): string;
export declare function discountFixedOnceForeverDurationBaseFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDurationBase, SDKValidationError>;
//# sourceMappingURL=discountfixedonceforeverdurationbase.d.ts.map