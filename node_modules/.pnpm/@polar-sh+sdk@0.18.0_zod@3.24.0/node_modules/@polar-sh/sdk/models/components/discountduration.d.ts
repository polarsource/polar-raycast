import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const DiscountDuration: {
    readonly Once: "once";
    readonly Forever: "forever";
    readonly Repeating: "repeating";
};
export type DiscountDuration = ClosedEnum<typeof DiscountDuration>;
/** @internal */
export declare const DiscountDuration$inboundSchema: z.ZodNativeEnum<typeof DiscountDuration>;
/** @internal */
export declare const DiscountDuration$outboundSchema: z.ZodNativeEnum<typeof DiscountDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountDuration$ {
    /** @deprecated use `DiscountDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Once: "once";
        readonly Forever: "forever";
        readonly Repeating: "repeating";
    }>;
    /** @deprecated use `DiscountDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Once: "once";
        readonly Forever: "forever";
        readonly Repeating: "repeating";
    }>;
}
//# sourceMappingURL=discountduration.d.ts.map