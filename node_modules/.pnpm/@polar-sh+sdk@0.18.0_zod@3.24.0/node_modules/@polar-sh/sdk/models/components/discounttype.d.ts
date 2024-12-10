import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const DiscountType: {
    readonly Fixed: "fixed";
    readonly Percentage: "percentage";
};
export type DiscountType = ClosedEnum<typeof DiscountType>;
/** @internal */
export declare const DiscountType$inboundSchema: z.ZodNativeEnum<typeof DiscountType>;
/** @internal */
export declare const DiscountType$outboundSchema: z.ZodNativeEnum<typeof DiscountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountType$ {
    /** @deprecated use `DiscountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "fixed";
        readonly Percentage: "percentage";
    }>;
    /** @deprecated use `DiscountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Fixed: "fixed";
        readonly Percentage: "percentage";
    }>;
}
//# sourceMappingURL=discounttype.d.ts.map