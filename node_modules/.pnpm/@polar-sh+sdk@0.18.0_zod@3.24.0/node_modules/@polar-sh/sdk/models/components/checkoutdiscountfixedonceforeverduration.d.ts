import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
/**
 * Schema for a fixed amount discount that is applied once or forever.
 */
export type CheckoutDiscountFixedOnceForeverDuration = {
    duration: DiscountDuration;
    type: DiscountType;
    amount: number;
    currency: string;
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountFixedOnceForeverDuration$inboundSchema: z.ZodType<CheckoutDiscountFixedOnceForeverDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutDiscountFixedOnceForeverDuration$Outbound = {
    duration: string;
    type: string;
    amount: number;
    currency: string;
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountFixedOnceForeverDuration$outboundSchema: z.ZodType<CheckoutDiscountFixedOnceForeverDuration$Outbound, z.ZodTypeDef, CheckoutDiscountFixedOnceForeverDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutDiscountFixedOnceForeverDuration$ {
    /** @deprecated use `CheckoutDiscountFixedOnceForeverDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutDiscountFixedOnceForeverDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutDiscountFixedOnceForeverDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutDiscountFixedOnceForeverDuration$Outbound, z.ZodTypeDef, CheckoutDiscountFixedOnceForeverDuration>;
    /** @deprecated use `CheckoutDiscountFixedOnceForeverDuration$Outbound` instead. */
    type Outbound = CheckoutDiscountFixedOnceForeverDuration$Outbound;
}
export declare function checkoutDiscountFixedOnceForeverDurationToJSON(checkoutDiscountFixedOnceForeverDuration: CheckoutDiscountFixedOnceForeverDuration): string;
export declare function checkoutDiscountFixedOnceForeverDurationFromJSON(jsonString: string): SafeParseResult<CheckoutDiscountFixedOnceForeverDuration, SDKValidationError>;
//# sourceMappingURL=checkoutdiscountfixedonceforeverduration.d.ts.map