import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageOnceForeverDurationCreateMetadata = string | number | boolean;
/**
 * Schema to create a percentage discount that is applied once or forever.
 */
export type DiscountPercentageOnceForeverDurationCreate = {
    duration: DiscountDuration;
    type: DiscountType;
    /**
     * Discount percentage in basis points.
     *
     * @remarks
     *
     * A basis point is 1/100th of a percent.
     * For example, to create a 25.5% discount, set this to 2550.
     */
    basisPoints: number;
    /**
     * Key-value object allowing you to store additional information.
     *
     * @remarks
     *
     * The key must be a string with a maximum length of **40 characters**.
     * The value must be either:
     *
     * * A string with a maximum length of **500 characters**
     * * An integer
     * * A boolean
     *
     * You can store up to **50 key-value pairs**.
     */
    metadata?: {
        [k: string]: string | number | boolean;
    } | undefined;
    /**
     * Name of the discount. Will be displayed to the customer when the discount is applied.
     */
    name: string;
    /**
     * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
     */
    code?: string | null | undefined;
    /**
     * Optional timestamp after which the discount is redeemable.
     */
    startsAt?: Date | null | undefined;
    /**
     * Optional timestamp after which the discount is no longer redeemable.
     */
    endsAt?: Date | null | undefined;
    /**
     * Optional maximum number of times the discount can be redeemed.
     */
    maxRedemptions?: number | null | undefined;
    products?: Array<string> | null | undefined;
    /**
     * The ID of the organization owning the discount. **Required unless you use an organization token.**
     */
    organizationId?: string | null | undefined;
};
/** @internal */
export declare const DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreateMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDurationCreateMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationCreateMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDurationCreateMetadata$ {
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreateMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationCreateMetadata>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreateMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDurationCreateMetadata$Outbound;
}
export declare function discountPercentageOnceForeverDurationCreateMetadataToJSON(discountPercentageOnceForeverDurationCreateMetadata: DiscountPercentageOnceForeverDurationCreateMetadata): string;
export declare function discountPercentageOnceForeverDurationCreateMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDurationCreateMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageOnceForeverDurationCreate$inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageOnceForeverDurationCreate$Outbound = {
    duration: string;
    type: string;
    basis_points: number;
    metadata?: {
        [k: string]: string | number | boolean;
    } | undefined;
    name: string;
    code?: string | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    max_redemptions?: number | null | undefined;
    products?: Array<string> | null | undefined;
    organization_id?: string | null | undefined;
};
/** @internal */
export declare const DiscountPercentageOnceForeverDurationCreate$outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreate$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageOnceForeverDurationCreate$ {
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageOnceForeverDurationCreate$Outbound, z.ZodTypeDef, DiscountPercentageOnceForeverDurationCreate>;
    /** @deprecated use `DiscountPercentageOnceForeverDurationCreate$Outbound` instead. */
    type Outbound = DiscountPercentageOnceForeverDurationCreate$Outbound;
}
export declare function discountPercentageOnceForeverDurationCreateToJSON(discountPercentageOnceForeverDurationCreate: DiscountPercentageOnceForeverDurationCreate): string;
export declare function discountPercentageOnceForeverDurationCreateFromJSON(jsonString: string): SafeParseResult<DiscountPercentageOnceForeverDurationCreate, SDKValidationError>;
//# sourceMappingURL=discountpercentageonceforeverdurationcreate.d.ts.map