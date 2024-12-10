import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageOnceForeverDurationBaseMetadata = string | number | boolean;
export type DiscountPercentageOnceForeverDurationBase = {
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
};
/** @internal */
export declare const DiscountPercentageOnceForeverDurationBaseMetadata$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBaseMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDurationBaseMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageOnceForeverDurationBaseMetadata$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationBaseMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDurationBaseMetadata$ {
    /** @deprecated use `DiscountPercentageOnceForeverDurationBaseMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBaseMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationBaseMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationBaseMetadata>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationBaseMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDurationBaseMetadata$Outbound;
}
export declare function discountPercentageOnceForeverDurationBaseMetadataToJSON(discountPercentageOnceForeverDurationBaseMetadata: DiscountPercentageOnceForeverDurationBaseMetadata): string;
export declare function discountPercentageOnceForeverDurationBaseMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDurationBaseMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageOnceForeverDurationBase$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBase, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDurationBase$Outbound = {
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
};
/** @internal */
export declare const DiscountPercentageOnceForeverDurationBase$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBase$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDurationBase$ {
    /** @deprecated use `DiscountPercentageOnceForeverDurationBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationBase$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationBase>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationBase$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDurationBase$Outbound;
}
export declare function discountPercentageOnceForeverDurationBaseToJSON(discountPercentageOnceForeverDurationBase: DiscountPercentageOnceForeverDurationBase): string;
export declare function discountPercentageOnceForeverDurationBaseFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDurationBase, SDKValidationError>;
//# sourceMappingURL=discountpercentageonceforeverdurationbase.d.ts.map