import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
/**
 * Schema for a fixed amount discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type CheckoutDiscountFixedRepeatDuration = {
    duration: DiscountDuration;
    durationInMonths: number;
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
export declare const CheckoutDiscountFixedRepeatDuration$inboundSchema: z.ZodType<CheckoutDiscountFixedRepeatDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutDiscountFixedRepeatDuration$Outbound = {
    duration: string;
    duration_in_months: number;
    type: string;
    amount: number;
    currency: string;
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountFixedRepeatDuration$outboundSchema: z.ZodType<CheckoutDiscountFixedRepeatDuration$Outbound, z.ZodTypeDef, CheckoutDiscountFixedRepeatDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutDiscountFixedRepeatDuration$ {
    /** @deprecated use `CheckoutDiscountFixedRepeatDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutDiscountFixedRepeatDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutDiscountFixedRepeatDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutDiscountFixedRepeatDuration$Outbound, z.ZodTypeDef, CheckoutDiscountFixedRepeatDuration>;
    /** @deprecated use `CheckoutDiscountFixedRepeatDuration$Outbound` instead. */
    type Outbound = CheckoutDiscountFixedRepeatDuration$Outbound;
}
export declare function checkoutDiscountFixedRepeatDurationToJSON(checkoutDiscountFixedRepeatDuration: CheckoutDiscountFixedRepeatDuration): string;
export declare function checkoutDiscountFixedRepeatDurationFromJSON(jsonString: string): SafeParseResult<CheckoutDiscountFixedRepeatDuration, SDKValidationError>;
//# sourceMappingURL=checkoutdiscountfixedrepeatduration.d.ts.map