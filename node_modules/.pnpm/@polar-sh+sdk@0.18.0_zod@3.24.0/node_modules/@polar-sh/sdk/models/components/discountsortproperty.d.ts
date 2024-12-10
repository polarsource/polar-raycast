import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const DiscountSortProperty: {
    readonly CreatedAt: "created_at";
    readonly MinusCreatedAt: "-created_at";
    readonly Name: "name";
    readonly MinusName: "-name";
    readonly Code: "code";
    readonly MinusCode: "-code";
    readonly RedemptionsCount: "redemptions_count";
    readonly MinusRedemptionsCount: "-redemptions_count";
};
export type DiscountSortProperty = ClosedEnum<typeof DiscountSortProperty>;
/** @internal */
export declare const DiscountSortProperty$inboundSchema: z.ZodNativeEnum<typeof DiscountSortProperty>;
/** @internal */
export declare const DiscountSortProperty$outboundSchema: z.ZodNativeEnum<typeof DiscountSortProperty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountSortProperty$ {
    /** @deprecated use `DiscountSortProperty$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Code: "code";
        readonly MinusCode: "-code";
        readonly RedemptionsCount: "redemptions_count";
        readonly MinusRedemptionsCount: "-redemptions_count";
    }>;
    /** @deprecated use `DiscountSortProperty$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly Name: "name";
        readonly MinusName: "-name";
        readonly Code: "code";
        readonly MinusCode: "-code";
        readonly RedemptionsCount: "redemptions_count";
        readonly MinusRedemptionsCount: "-redemptions_count";
    }>;
}
//# sourceMappingURL=discountsortproperty.d.ts.map