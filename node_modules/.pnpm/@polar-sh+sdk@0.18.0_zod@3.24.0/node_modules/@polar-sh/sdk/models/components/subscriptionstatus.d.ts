import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const SubscriptionStatus: {
    readonly Incomplete: "incomplete";
    readonly IncompleteExpired: "incomplete_expired";
    readonly Trialing: "trialing";
    readonly Active: "active";
    readonly PastDue: "past_due";
    readonly Canceled: "canceled";
    readonly Unpaid: "unpaid";
};
export type SubscriptionStatus = ClosedEnum<typeof SubscriptionStatus>;
/** @internal */
export declare const SubscriptionStatus$inboundSchema: z.ZodNativeEnum<typeof SubscriptionStatus>;
/** @internal */
export declare const SubscriptionStatus$outboundSchema: z.ZodNativeEnum<typeof SubscriptionStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionStatus$ {
    /** @deprecated use `SubscriptionStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Incomplete: "incomplete";
        readonly IncompleteExpired: "incomplete_expired";
        readonly Trialing: "trialing";
        readonly Active: "active";
        readonly PastDue: "past_due";
        readonly Canceled: "canceled";
        readonly Unpaid: "unpaid";
    }>;
    /** @deprecated use `SubscriptionStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Incomplete: "incomplete";
        readonly IncompleteExpired: "incomplete_expired";
        readonly Trialing: "trialing";
        readonly Active: "active";
        readonly PastDue: "past_due";
        readonly Canceled: "canceled";
        readonly Unpaid: "unpaid";
    }>;
}
//# sourceMappingURL=subscriptionstatus.d.ts.map