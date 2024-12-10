import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const MetricType: {
    readonly Scalar: "scalar";
    readonly Currency: "currency";
};
export type MetricType = ClosedEnum<typeof MetricType>;
/** @internal */
export declare const MetricType$inboundSchema: z.ZodNativeEnum<typeof MetricType>;
/** @internal */
export declare const MetricType$outboundSchema: z.ZodNativeEnum<typeof MetricType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetricType$ {
    /** @deprecated use `MetricType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Scalar: "scalar";
        readonly Currency: "currency";
    }>;
    /** @deprecated use `MetricType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Scalar: "scalar";
        readonly Currency: "currency";
    }>;
}
//# sourceMappingURL=metrictype.d.ts.map