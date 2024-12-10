import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MetricType } from "./metrictype.js";
/**
 * Information about a metric.
 */
export type Metric = {
    /**
     * Unique identifier for the metric.
     */
    slug: string;
    /**
     * Human-readable name for the metric.
     */
    displayName: string;
    type: MetricType;
};
/** @internal */
export declare const Metric$inboundSchema: z.ZodType<Metric, z.ZodTypeDef, unknown>;
/** @internal */
export type Metric$Outbound = {
    slug: string;
    display_name: string;
    type: string;
};
/** @internal */
export declare const Metric$outboundSchema: z.ZodType<Metric$Outbound, z.ZodTypeDef, Metric>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Metric$ {
    /** @deprecated use `Metric$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Metric, z.ZodTypeDef, unknown>;
    /** @deprecated use `Metric$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Metric$Outbound, z.ZodTypeDef, Metric>;
    /** @deprecated use `Metric$Outbound` instead. */
    type Outbound = Metric$Outbound;
}
export declare function metricToJSON(metric: Metric): string;
export declare function metricFromJSON(jsonString: string): SafeParseResult<Metric, SDKValidationError>;
//# sourceMappingURL=metric.d.ts.map