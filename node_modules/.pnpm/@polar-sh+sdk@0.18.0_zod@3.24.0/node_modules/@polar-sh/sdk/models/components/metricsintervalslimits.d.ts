import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MetricsIntervalLimit, MetricsIntervalLimit$Outbound } from "./metricsintervallimit.js";
/**
 * Date interval limits to get metrics for each interval.
 */
export type MetricsIntervalsLimits = {
    /**
     * Date interval limit to get metrics for a given interval.
     */
    hour: MetricsIntervalLimit;
    /**
     * Date interval limit to get metrics for a given interval.
     */
    day: MetricsIntervalLimit;
    /**
     * Date interval limit to get metrics for a given interval.
     */
    week: MetricsIntervalLimit;
    /**
     * Date interval limit to get metrics for a given interval.
     */
    month: MetricsIntervalLimit;
    /**
     * Date interval limit to get metrics for a given interval.
     */
    year: MetricsIntervalLimit;
};
/** @internal */
export declare const MetricsIntervalsLimits$inboundSchema: z.ZodType<MetricsIntervalsLimits, z.ZodTypeDef, unknown>;
/** @internal */
export type MetricsIntervalsLimits$Outbound = {
    hour: MetricsIntervalLimit$Outbound;
    day: MetricsIntervalLimit$Outbound;
    week: MetricsIntervalLimit$Outbound;
    month: MetricsIntervalLimit$Outbound;
    year: MetricsIntervalLimit$Outbound;
};
/** @internal */
export declare const MetricsIntervalsLimits$outboundSchema: z.ZodType<MetricsIntervalsLimits$Outbound, z.ZodTypeDef, MetricsIntervalsLimits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetricsIntervalsLimits$ {
    /** @deprecated use `MetricsIntervalsLimits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetricsIntervalsLimits, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetricsIntervalsLimits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetricsIntervalsLimits$Outbound, z.ZodTypeDef, MetricsIntervalsLimits>;
    /** @deprecated use `MetricsIntervalsLimits$Outbound` instead. */
    type Outbound = MetricsIntervalsLimits$Outbound;
}
export declare function metricsIntervalsLimitsToJSON(metricsIntervalsLimits: MetricsIntervalsLimits): string;
export declare function metricsIntervalsLimitsFromJSON(jsonString: string): SafeParseResult<MetricsIntervalsLimits, SDKValidationError>;
//# sourceMappingURL=metricsintervalslimits.d.ts.map