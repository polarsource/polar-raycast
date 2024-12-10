import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedRepeatDurationCreateMetadata = string | number | boolean;
/**
 * Schema to create a fixed amount discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type DiscountFixedRepeatDurationCreate = {
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
     * Fixed amount to discount from the invoice total.
     */
    amount: number;
    /**
     * The currency. Currently, only `usd` is supported.
     */
    currency?: string | undefined;
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
export declare const DiscountFixedRepeatDurationCreateMetadata$inboundSchema: z.ZodType<DiscountFixedRepeatDurationCreateMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDurationCreateMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedRepeatDurationCreateMetadata$outboundSchema: z.ZodType<DiscountFixedRepeatDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationCreateMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDurationCreateMetadata$ {
    /** @deprecated use `DiscountFixedRepeatDurationCreateMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDurationCreateMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDurationCreateMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationCreateMetadata>;
    /** @deprecated use `DiscountFixedRepeatDurationCreateMetadata$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDurationCreateMetadata$Outbound;
}
export declare function discountFixedRepeatDurationCreateMetadataToJSON(discountFixedRepeatDurationCreateMetadata: DiscountFixedRepeatDurationCreateMetadata): string;
export declare function discountFixedRepeatDurationCreateMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDurationCreateMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedRepeatDurationCreate$inboundSchema: z.ZodType<DiscountFixedRepeatDurationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedRepeatDurationCreate$Outbound = {
    duration: string;
    duration_in_months: number;
    type: string;
    amount: number;
    currency: string;
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
export declare const DiscountFixedRepeatDurationCreate$outboundSchema: z.ZodType<DiscountFixedRepeatDurationCreate$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedRepeatDurationCreate$ {
    /** @deprecated use `DiscountFixedRepeatDurationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedRepeatDurationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedRepeatDurationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedRepeatDurationCreate$Outbound, z.ZodTypeDef, DiscountFixedRepeatDurationCreate>;
    /** @deprecated use `DiscountFixedRepeatDurationCreate$Outbound` instead. */
    type Outbound = DiscountFixedRepeatDurationCreate$Outbound;
}
export declare function discountFixedRepeatDurationCreateToJSON(discountFixedRepeatDurationCreate: DiscountFixedRepeatDurationCreate): string;
export declare function discountFixedRepeatDurationCreateFromJSON(jsonString: string): SafeParseResult<DiscountFixedRepeatDurationCreate, SDKValidationError>;
//# sourceMappingURL=discountfixedrepeatdurationcreate.d.ts.map