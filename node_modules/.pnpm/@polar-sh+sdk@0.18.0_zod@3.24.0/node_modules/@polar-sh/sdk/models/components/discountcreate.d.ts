import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DiscountFixedOnceForeverDurationCreate, DiscountFixedOnceForeverDurationCreate$Outbound } from "./discountfixedonceforeverdurationcreate.js";
import { DiscountFixedRepeatDurationCreate, DiscountFixedRepeatDurationCreate$Outbound } from "./discountfixedrepeatdurationcreate.js";
import { DiscountPercentageOnceForeverDurationCreate, DiscountPercentageOnceForeverDurationCreate$Outbound } from "./discountpercentageonceforeverdurationcreate.js";
import { DiscountPercentageRepeatDurationCreate, DiscountPercentageRepeatDurationCreate$Outbound } from "./discountpercentagerepeatdurationcreate.js";
export type DiscountCreate = DiscountPercentageOnceForeverDurationCreate | DiscountFixedOnceForeverDurationCreate | DiscountPercentageRepeatDurationCreate | DiscountFixedRepeatDurationCreate;
/** @internal */
export declare const DiscountCreate$inboundSchema: z.ZodType<DiscountCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountCreate$Outbound = DiscountPercentageOnceForeverDurationCreate$Outbound | DiscountFixedOnceForeverDurationCreate$Outbound | DiscountPercentageRepeatDurationCreate$Outbound | DiscountFixedRepeatDurationCreate$Outbound;
/** @internal */
export declare const DiscountCreate$outboundSchema: z.ZodType<DiscountCreate$Outbound, z.ZodTypeDef, DiscountCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountCreate$ {
    /** @deprecated use `DiscountCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountCreate$Outbound, z.ZodTypeDef, DiscountCreate>;
    /** @deprecated use `DiscountCreate$Outbound` instead. */
    type Outbound = DiscountCreate$Outbound;
}
export declare function discountCreateToJSON(discountCreate: DiscountCreate): string;
export declare function discountCreateFromJSON(jsonString: string): SafeParseResult<DiscountCreate, SDKValidationError>;
//# sourceMappingURL=discountcreate.d.ts.map