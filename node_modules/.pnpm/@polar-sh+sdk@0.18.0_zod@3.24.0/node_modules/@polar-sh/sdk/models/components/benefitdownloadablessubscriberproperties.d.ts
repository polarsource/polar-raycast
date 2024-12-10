import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitDownloadablesSubscriberProperties = {
    activeFiles: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesSubscriberProperties$inboundSchema: z.ZodType<BenefitDownloadablesSubscriberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDownloadablesSubscriberProperties$Outbound = {
    active_files: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesSubscriberProperties$outboundSchema: z.ZodType<BenefitDownloadablesSubscriberProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesSubscriberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDownloadablesSubscriberProperties$ {
    /** @deprecated use `BenefitDownloadablesSubscriberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDownloadablesSubscriberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDownloadablesSubscriberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDownloadablesSubscriberProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesSubscriberProperties>;
    /** @deprecated use `BenefitDownloadablesSubscriberProperties$Outbound` instead. */
    type Outbound = BenefitDownloadablesSubscriberProperties$Outbound;
}
export declare function benefitDownloadablesSubscriberPropertiesToJSON(benefitDownloadablesSubscriberProperties: BenefitDownloadablesSubscriberProperties): string;
export declare function benefitDownloadablesSubscriberPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDownloadablesSubscriberProperties, SDKValidationError>;
//# sourceMappingURL=benefitdownloadablessubscriberproperties.d.ts.map