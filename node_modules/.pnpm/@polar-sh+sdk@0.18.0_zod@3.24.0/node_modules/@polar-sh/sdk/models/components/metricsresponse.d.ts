import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MetricPeriod, MetricPeriod$Outbound } from "./metricperiod.js";
import { Metrics, Metrics$Outbound } from "./metrics.js";
/**
 * Metrics response schema.
 */
export type MetricsResponse = {
    /**
     * List of data for each timestamp.
     */
    periods: Array<MetricPeriod>;
    metrics: Metrics;
};
/** @internal */
export declare const MetricsResponse$inboundSchema: z.ZodType<MetricsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type MetricsResponse$Outbound = {
    periods: Array<MetricPeriod$Outbound>;
    metrics: Metrics$Outbound;
};
/** @internal */
export declare const MetricsResponse$outboundSchema: z.ZodType<MetricsResponse$Outbound, z.ZodTypeDef, MetricsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MetricsResponse$ {
    /** @deprecated use `MetricsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MetricsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `MetricsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MetricsResponse$Outbound, z.ZodTypeDef, MetricsResponse>;
    /** @deprecated use `MetricsResponse$Outbound` instead. */
    type Outbound = MetricsResponse$Outbound;
}
export declare function metricsResponseToJSON(metricsResponse: MetricsResponse): string;
export declare function metricsResponseFromJSON(jsonString: string): SafeParseResult<MetricsResponse, SDKValidationError>;
//# sourceMappingURL=metricsresponse.d.ts.map