import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const ProductPriceType: {
    readonly OneTime: "one_time";
    readonly Recurring: "recurring";
};
export type ProductPriceType = ClosedEnum<typeof ProductPriceType>;
/** @internal */
export declare const ProductPriceType$inboundSchema: z.ZodNativeEnum<typeof ProductPriceType>;
/** @internal */
export declare const ProductPriceType$outboundSchema: z.ZodNativeEnum<typeof ProductPriceType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProductPriceType$ {
    /** @deprecated use `ProductPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
    }>;
    /** @deprecated use `ProductPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OneTime: "one_time";
        readonly Recurring: "recurring";
    }>;
}
//# sourceMappingURL=productpricetype.d.ts.map