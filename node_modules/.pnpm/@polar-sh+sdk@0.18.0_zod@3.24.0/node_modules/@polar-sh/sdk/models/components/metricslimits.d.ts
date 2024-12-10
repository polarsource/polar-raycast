import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MetricsIntervalsLimits, MetricsIntervalsLimits$Outbound } from "./metricsintervalslimits.js";
/**
 * Date limits to get metrics.
 */
export type MetricsLimits = {
    /**
     * Minimum date to get metrics.
     */
    minDate: RFCDate;
    /**
     * Date interval limits to get metrics for each interval.
     */
    intervals: MetricsIntervalsLimits;
};
/** @internal */
export declare const MetricsLimits$inboundSchema: z.ZodType<MetricsLimits, z.ZodTypeDef, unknown>;
/** @internal */
export type MetricsLimits$Outbound = {
    min_date: string;
    intervals: MetricsIntervalsLimits$Outbound;
};
/** @internal */
export declare const MetricsLimits$outboundSchema: z.ZodType<MetricsLimits$Outbound, z.ZodTypeDef, MetricsLimits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetricsLimits$ {
    /** @deprecated use `MetricsLimits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetricsLimits, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetricsLimits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetricsLimits$Outbound, z.ZodTypeDef, MetricsLimits>;
    /** @deprecated use `MetricsLimits$Outbound` instead. */
    type Outbound = MetricsLimits$Outbound;
}
export declare function metricsLimitsToJSON(metricsLimits: MetricsLimits): string;
export declare function metricsLimitsFromJSON(jsonString: string): SafeParseResult<MetricsLimits, SDKValidationError>;
//# sourceMappingURL=metricslimits.d.ts.map