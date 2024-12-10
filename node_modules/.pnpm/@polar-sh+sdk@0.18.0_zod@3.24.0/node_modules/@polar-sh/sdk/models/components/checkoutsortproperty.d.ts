import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const CheckoutSortProperty: {
    readonly CreatedAt: "created_at";
    readonly MinusCreatedAt: "-created_at";
    readonly ExpiresAt: "expires_at";
    readonly MinusExpiresAt: "-expires_at";
};
export type CheckoutSortProperty = ClosedEnum<typeof CheckoutSortProperty>;
/** @internal */
export declare const CheckoutSortProperty$inboundSchema: z.ZodNativeEnum<typeof CheckoutSortProperty>;
/** @internal */
export declare const CheckoutSortProperty$outboundSchema: z.ZodNativeEnum<typeof CheckoutSortProperty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutSortProperty$ {
    /** @deprecated use `CheckoutSortProperty$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly ExpiresAt: "expires_at";
        readonly MinusExpiresAt: "-expires_at";
    }>;
    /** @deprecated use `CheckoutSortProperty$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CreatedAt: "created_at";
        readonly MinusCreatedAt: "-created_at";
        readonly ExpiresAt: "expires_at";
        readonly MinusExpiresAt: "-expires_at";
    }>;
}
//# sourceMappingURL=checkoutsortproperty.d.ts.map