import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const PledgeState: {
    readonly Initiated: "initiated";
    readonly Created: "created";
    readonly Pending: "pending";
    readonly Refunded: "refunded";
    readonly Disputed: "disputed";
    readonly ChargeDisputed: "charge_disputed";
    readonly Cancelled: "cancelled";
};
export type PledgeState = ClosedEnum<typeof PledgeState>;
/** @internal */
export declare const PledgeState$inboundSchema: z.ZodNativeEnum<typeof PledgeState>;
/** @internal */
export declare const PledgeState$outboundSchema: z.ZodNativeEnum<typeof PledgeState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PledgeState$ {
    /** @deprecated use `PledgeState$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Initiated: "initiated";
        readonly Created: "created";
        readonly Pending: "pending";
        readonly Refunded: "refunded";
        readonly Disputed: "disputed";
        readonly ChargeDisputed: "charge_disputed";
        readonly Cancelled: "cancelled";
    }>;
    /** @deprecated use `PledgeState$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Initiated: "initiated";
        readonly Created: "created";
        readonly Pending: "pending";
        readonly Refunded: "refunded";
        readonly Disputed: "disputed";
        readonly ChargeDisputed: "charge_disputed";
        readonly Cancelled: "cancelled";
    }>;
}
//# sourceMappingURL=pledgestate.d.ts.map