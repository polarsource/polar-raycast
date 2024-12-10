import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
/**
 * Schema for a percentage discount that is applied once or forever.
 */
export type CheckoutDiscountPercentageOnceForeverDuration = {
    duration: DiscountDuration;
    type: DiscountType;
    basisPoints: number;
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountPercentageOnceForeverDuration$inboundSchema: z.ZodType<CheckoutDiscountPercentageOnceForeverDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutDiscountPercentageOnceForeverDuration$Outbound = {
    duration: string;
    type: string;
    basis_points: number;
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountPercentageOnceForeverDuration$outboundSchema: z.ZodType<CheckoutDiscountPercentageOnceForeverDuration$Outbound, z.ZodTypeDef, CheckoutDiscountPercentageOnceForeverDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutDiscountPercentageOnceForeverDuration$ {
    /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutDiscountPercentageOnceForeverDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutDiscountPercentageOnceForeverDuration$Outbound, z.ZodTypeDef, CheckoutDiscountPercentageOnceForeverDuration>;
    /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$Outbound` instead. */
    type Outbound = CheckoutDiscountPercentageOnceForeverDuration$Outbound;
}
export declare function checkoutDiscountPercentageOnceForeverDurationToJSON(checkoutDiscountPercentageOnceForeverDuration: CheckoutDiscountPercentageOnceForeverDuration): string;
export declare function checkoutDiscountPercentageOnceForeverDurationFromJSON(jsonString: string): SafeParseResult<CheckoutDiscountPercentageOnceForeverDuration, SDKValidationError>;
//# sourceMappingURL=checkoutdiscountpercentageonceforeverduration.d.ts.map