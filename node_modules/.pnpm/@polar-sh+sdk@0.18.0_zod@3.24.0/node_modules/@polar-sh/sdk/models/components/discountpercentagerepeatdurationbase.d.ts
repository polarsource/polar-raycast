import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageRepeatDurationBaseMetadata = string | number | boolean;
export type DiscountPercentageRepeatDurationBase = {
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
};
/** @internal */
export declare const DiscountPercentageRepeatDurationBaseMetadata$inboundSchema: z.ZodType<DiscountPercentageRepeatDurationBaseMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDurationBaseMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageRepeatDurationBaseMetadata$outboundSchema: z.ZodType<DiscountPercentageRepeatDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationBaseMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDurationBaseMetadata$ {
    /** @deprecated use `DiscountPercentageRepeatDurationBaseMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDurationBaseMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDurationBaseMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDurationBaseMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationBaseMetadata>;
    /** @deprecated use `DiscountPercentageRepeatDurationBaseMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDurationBaseMetadata$Outbound;
}
export declare function discountPercentageRepeatDurationBaseMetadataToJSON(discountPercentageRepeatDurationBaseMetadata: DiscountPercentageRepeatDurationBaseMetadata): string;
export declare function discountPercentageRepeatDurationBaseMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDurationBaseMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageRepeatDurationBase$inboundSchema: z.ZodType<DiscountPercentageRepeatDurationBase, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDurationBase$Outbound = {
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
};
/** @internal */
export declare const DiscountPercentageRepeatDurationBase$outboundSchema: z.ZodType<DiscountPercentageRepeatDurationBase$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDurationBase$ {
    /** @deprecated use `DiscountPercentageRepeatDurationBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDurationBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDurationBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDurationBase$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationBase>;
    /** @deprecated use `DiscountPercentageRepeatDurationBase$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDurationBase$Outbound;
}
export declare function discountPercentageRepeatDurationBaseToJSON(discountPercentageRepeatDurationBase: DiscountPercentageRepeatDurationBase): string;
export declare function discountPercentageRepeatDurationBaseFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDurationBase, SDKValidationError>;
//# sourceMappingURL=discountpercentagerepeatdurationbase.d.ts.map