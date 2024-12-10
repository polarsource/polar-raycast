import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
export type DiscountFixedOnceForeverDurationCreateMetadata = string | number | boolean;
/**
 * Schema to create a fixed amount discount that is applied once or forever.
 */
export type DiscountFixedOnceForeverDurationCreate = {
    duration: DiscountDuration;
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
export declare const DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreateMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDurationCreateMetadata$Outbound = string | number | boolean;
/** @internal */
export declare const DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationCreateMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDurationCreateMetadata$ {
    /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreateMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreateMetadata$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationCreateMetadata>;
    /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDurationCreateMetadata$Outbound;
}
export declare function discountFixedOnceForeverDurationCreateMetadataToJSON(discountFixedOnceForeverDurationCreateMetadata: DiscountFixedOnceForeverDurationCreateMetadata): string;
export declare function discountFixedOnceForeverDurationCreateMetadataFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDurationCreateMetadata, SDKValidationError>;
/** @internal */
export declare const DiscountFixedOnceForeverDurationCreate$inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountFixedOnceForeverDurationCreate$Outbound = {
    duration: string;
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
export declare const DiscountFixedOnceForeverDurationCreate$outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreate$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountFixedOnceForeverDurationCreate$ {
    /** @deprecated use `DiscountFixedOnceForeverDurationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountFixedOnceForeverDurationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountFixedOnceForeverDurationCreate$Outbound, z.ZodTypeDef, DiscountFixedOnceForeverDurationCreate>;
    /** @deprecated use `DiscountFixedOnceForeverDurationCreate$Outbound` instead. */
    type Outbound = DiscountFixedOnceForeverDurationCreate$Outbound;
}
export declare function discountFixedOnceForeverDurationCreateToJSON(discountFixedOnceForeverDurationCreate: DiscountFixedOnceForeverDurationCreate): string;
export declare function discountFixedOnceForeverDurationCreateFromJSON(jsonString: string): SafeParseResult<DiscountFixedOnceForeverDurationCreate, SDKValidationError>;
//# sourceMappingURL=discountfixedonceforeverdurationcreate.d.ts.map