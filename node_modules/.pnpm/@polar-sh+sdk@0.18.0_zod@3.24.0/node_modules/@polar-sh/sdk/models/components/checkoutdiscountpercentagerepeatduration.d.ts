import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountDuration } from "./discountduration.js";
import { DiscountType } from "./discounttype.js";
/**
 * Schema for a percentage discount that is applied on every invoice
 *
 * @remarks
 * for a certain number of months.
 */
export type CheckoutDiscountPercentageRepeatDuration = {
    duration: DiscountDuration;
    durationInMonths: number;
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
export declare const CheckoutDiscountPercentageRepeatDuration$inboundSchema: z.ZodType<CheckoutDiscountPercentageRepeatDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckoutDiscountPercentageRepeatDuration$Outbound = {
    duration: string;
    duration_in_months: number;
    type: string;
    basis_points: number;
    id: string;
    name: string;
    code: string | null;
};
/** @internal */
export declare const CheckoutDiscountPercentageRepeatDuration$outboundSchema: z.ZodType<CheckoutDiscountPercentageRepeatDuration$Outbound, z.ZodTypeDef, CheckoutDiscountPercentageRepeatDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutDiscountPercentageRepeatDuration$ {
    /** @deprecated use `CheckoutDiscountPercentageRepeatDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckoutDiscountPercentageRepeatDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckoutDiscountPercentageRepeatDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckoutDiscountPercentageRepeatDuration$Outbound, z.ZodTypeDef, CheckoutDiscountPercentageRepeatDuration>;
    /** @deprecated use `CheckoutDiscountPercentageRepeatDuration$Outbound` instead. */
    type Outbound = CheckoutDiscountPercentageRepeatDuration$Outbound;
}
export declare function checkoutDiscountPercentageRepeatDurationToJSON(checkoutDiscountPercentageRepeatDuration: CheckoutDiscountPercentageRepeatDuration): string;
export declare function checkoutDiscountPercentageRepeatDurationFromJSON(jsonString: string): SafeParseResult<CheckoutDiscountPercentageRepeatDuration, SDKValidationError>;
//# sourceMappingURL=checkoutdiscountpercentagerepeatduration.d.ts.map