import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const SubscriptionRecurringInterval: {
    readonly Month: "month";
    readonly Year: "year";
};
export type SubscriptionRecurringInterval = ClosedEnum<typeof SubscriptionRecurringInterval>;
/** @internal */
export declare const SubscriptionRecurringInterval$inboundSchema: z.ZodNativeEnum<typeof SubscriptionRecurringInterval>;
/** @internal */
export declare const SubscriptionRecurringInterval$outboundSchema: z.ZodNativeEnum<typeof SubscriptionRecurringInterval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionRecurringInterval$ {
    /** @deprecated use `SubscriptionRecurringInterval$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Month: "month";
        readonly Year: "year";
    }>;
    /** @deprecated use `SubscriptionRecurringInterval$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Month: "month";
        readonly Year: "year";
    }>;
}
//# sourceMappingURL=subscriptionrecurringinterval.d.ts.map