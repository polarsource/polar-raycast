import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const PledgeType: {
    readonly PayUpfront: "pay_upfront";
    readonly PayOnCompletion: "pay_on_completion";
    readonly PayDirectly: "pay_directly";
};
export type PledgeType = ClosedEnum<typeof PledgeType>;
/** @internal */
export declare const PledgeType$inboundSchema: z.ZodNativeEnum<typeof PledgeType>;
/** @internal */
export declare const PledgeType$outboundSchema: z.ZodNativeEnum<typeof PledgeType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PledgeType$ {
    /** @deprecated use `PledgeType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly PayUpfront: "pay_upfront";
        readonly PayOnCompletion: "pay_on_completion";
        readonly PayDirectly: "pay_directly";
    }>;
    /** @deprecated use `PledgeType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly PayUpfront: "pay_upfront";
        readonly PayOnCompletion: "pay_on_completion";
        readonly PayDirectly: "pay_directly";
    }>;
}
//# sourceMappingURL=pledgetype.d.ts.map