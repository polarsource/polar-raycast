import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountPercentageRepeatDurationCreateMetadata = string | number | boolean;
/**
 * Schema to create a percentage discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type DiscountPercentageRepeatDurationCreate = {
    duration: DiscountDuration;
    /**
     * Number of months the discount should be applied.
     *
     * @remarks
     *
     * For this to work on yearly pricing, you should multiply this by 12.
     * For example, to apply the discount for 2 years, set this to 24.
     */
    durationInMonths: number;
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
export declare const DiscountPercentageRepeatDurationCreateMetadata$inboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreateMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDurationCreateMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountPercentageRepeatDurationCreateMetadata$outboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationCreateMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDurationCreateMetadata$ {
    /** @deprecated use `DiscountPercentageRepeatDurationCreateMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreateMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDurationCreateMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationCreateMetadata>;
    /** @deprecated use `DiscountPercentageRepeatDurationCreateMetadata$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDurationCreateMetadata$Outbound;
}
export declare function discountPercentageRepeatDurationCreateMetadataToJSON(discountPercentageRepeatDurationCreateMetadata: DiscountPercentageRepeatDurationCreateMetadata): string;
export declare function discountPercentageRepeatDurationCreateMetadataFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDurationCreateMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountPercentageRepeatDurationCreate$inboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountPercentageRepeatDurationCreate$Outbound = {
    duration: string;
    duration_in_months: number;
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
export declare const DiscountPercentageRepeatDurationCreate$outboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreate$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountPercentageRepeatDurationCreate$ {
    /** @deprecated use `DiscountPercentageRepeatDurationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountPercentageRepeatDurationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountPercentageRepeatDurationCreate$Outbound, z.ZodTypeDef, DiscountPercentageRepeatDurationCreate>;
    /** @deprecated use `DiscountPercentageRepeatDurationCreate$Outbound` instead. */
    type Outbound = DiscountPercentageRepeatDurationCreate$Outbound;
}
export declare function discountPercentageRepeatDurationCreateToJSON(discountPercentageRepeatDurationCreate: DiscountPercentageRepeatDurationCreate): string;
export declare function discountPercentageRepeatDurationCreateFromJSON(jsonString: string): SafeParseResult<DiscountPercentageRepeatDurationCreate, SDKValidationError>;
//# sourceMappingURL=discountpercentagerepeatdurationcreate.d.ts.map