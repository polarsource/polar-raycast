import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const State: {
    readonly Open: "open";
    readonly Closed: "closed";
};
export type State = ClosedEnum<typeof State>;
/** @internal */
export declare const State$inboundSchema: z.ZodNativeEnum<typeof State>;
/** @internal */
export declare const State$outboundSchema: z.ZodNativeEnum<typeof State>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace State$ {
    /** @deprecated use `State$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly Closed: "closed";
    }>;
    /** @deprecated use `State$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Open: "open";
        readonly Closed: "closed";
    }>;
}
//# sourceMappingURL=state.d.ts.map