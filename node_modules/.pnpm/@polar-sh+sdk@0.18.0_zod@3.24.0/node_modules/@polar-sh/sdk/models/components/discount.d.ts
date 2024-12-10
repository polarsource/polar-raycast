import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountFixedOnceForeverDuration, DiscountFixedOnceForeverDuration$Outbound } from "./discountfixedonceforeverduration.js";
import { DiscountFixedRepeatDuration, DiscountFixedRepeatDuration$Outbound } from "./discountfixedrepeatduration.js";
import { DiscountPercentageOnceForeverDuration, DiscountPercentageOnceForeverDuration$Outbound } from "./discountpercentageonceforeverduration.js";
import { DiscountPercentageRepeatDuration, DiscountPercentageRepeatDuration$Outbound } from "./discountpercentagerepeatduration.js";
export type Discount = DiscountPercentageOnceForeverDuration | DiscountFixedOnceForeverDuration | DiscountPercentageRepeatDuration | DiscountFixedRepeatDuration;
/** @internal */
export declare const Discount$inboundSchema: z.ZodType<Discount, z.ZodTypeDef, unknown>;
/** @internal */
export type Discount$Outbound = DiscountPercentageOnceForeverDuration$Outbound | DiscountFixedOnceForeverDuration$Outbound | DiscountPercentageRepeatDuration$Outbound | DiscountFixedRepeatDuration$Outbound;
/** @internal */
export declare const Discount$outboundSchema: z.ZodType<Discount$Outbound, z.ZodTypeDef, Discount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Discount$ {
    /** @deprecated use `Discount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Discount, z.ZodTypeDef, unknown>;
    /** @deprecated use `Discount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Discount$Outbound, z.ZodTypeDef, Discount>;
    /** @deprecated use `Discount$Outbound` instead. */
    type Outbound = Discount$Outbound;
}
export declare function discountToJSON(discount: Discount): string;
export declare function discountFromJSON(jsonString: string): SafeParseResult<Discount, SDKValidationError>;
//# sourceMappingURL=discount.d.ts.map