import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const PaymentProcessor: {
    readonly Stripe: "stripe";
};
export type PaymentProcessor = ClosedEnum<typeof PaymentProcessor>;
/** @internal */
export declare const PaymentProcessor$inboundSchema: z.ZodNativeEnum<typeof PaymentProcessor>;
/** @internal */
export declare const PaymentProcessor$outboundSchema: z.ZodNativeEnum<typeof PaymentProcessor>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentProcessor$ {
    /** @deprecated use `PaymentProcessor$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Stripe: "stripe";
    }>;
    /** @deprecated use `PaymentProcessor$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Stripe: "stripe";
    }>;
}
//# sourceMappingURL=paymentprocessor.d.ts.map