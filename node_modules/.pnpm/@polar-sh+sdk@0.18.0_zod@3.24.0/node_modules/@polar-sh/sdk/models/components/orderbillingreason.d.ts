import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const OrderBillingReason: {
    readonly Purchase: "purchase";
    readonly SubscriptionCreate: "subscription_create";
    readonly SubscriptionCycle: "subscription_cycle";
    readonly SubscriptionUpdate: "subscription_update";
};
export type OrderBillingReason = ClosedEnum<typeof OrderBillingReason>;
/** @internal */
export declare const OrderBillingReason$inboundSchema: z.ZodNativeEnum<typeof OrderBillingReason>;
/** @internal */
export declare const OrderBillingReason$outboundSchema: z.ZodNativeEnum<typeof OrderBillingReason>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderBillingReason$ {
    /** @deprecated use `OrderBillingReason$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Purchase: "purchase";
        readonly SubscriptionCreate: "subscription_create";
        readonly SubscriptionCycle: "subscription_cycle";
        readonly SubscriptionUpdate: "subscription_update";
    }>;
    /** @deprecated use `OrderBillingReason$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Purchase: "purchase";
        readonly SubscriptionCreate: "subscription_create";
        readonly SubscriptionCycle: "subscription_cycle";
        readonly SubscriptionUpdate: "subscription_update";
    }>;
}
//# sourceMappingURL=orderbillingreason.d.ts.map