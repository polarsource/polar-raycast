import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const CheckoutStatus: {
    readonly Open: "open";
    readonly Expired: "expired";
    readonly Confirmed: "confirmed";
    readonly Succeeded: "succeeded";
    readonly Failed: "failed";
};
export type CheckoutStatus = ClosedEnum<typeof CheckoutStatus>;
/** @internal */
export declare const CheckoutStatus$inboundSchema: z.ZodNativeEnum<typeof CheckoutStatus>;
/** @internal */
export declare const CheckoutStatus$outboundSchema: z.ZodNativeEnum<typeof CheckoutStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckoutStatus$ {
    /** @deprecated use `CheckoutStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly Expired: "expired";
        readonly Confirmed: "confirmed";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
    }>;
    /** @deprecated use `CheckoutStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly Expired: "expired";
        readonly Confirmed: "confirmed";
        readonly Succeeded: "succeeded";
        readonly Failed: "failed";
    }>;
}
//# sourceMappingURL=checkoutstatus.d.ts.map