import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Date interval limit to get metrics for a given interval.
 */
export type MetricsIntervalLimit = {
    /**
     * Maximum number of days for this interval.
     */
    maxDays: number;
};
/** @internal */
export declare const MetricsIntervalLimit$inboundSchema: z.ZodType<MetricsIntervalLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type MetricsIntervalLimit$Outbound = {
    max_days: number;
};
/** @internal */
export declare const MetricsIntervalLimit$outboundSchema: z.ZodType<MetricsIntervalLimit$Outbound, z.ZodTypeDef, MetricsIntervalLimit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetricsIntervalLimit$ {
    /** @deprecated use `MetricsIntervalLimit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetricsIntervalLimit, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetricsIntervalLimit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetricsIntervalLimit$Outbound, z.ZodTypeDef, MetricsIntervalLimit>;
    /** @deprecated use `MetricsIntervalLimit$Outbound` instead. */
    type Outbound = MetricsIntervalLimit$Outbound;
}
export declare function metricsIntervalLimitToJSON(metricsIntervalLimit: MetricsIntervalLimit): string;
export declare function metricsIntervalLimitFromJSON(jsonString: string): SafeParseResult<MetricsIntervalLimit, SDKValidationError>;
//# sourceMappingURL=metricsintervallimit.d.ts.map