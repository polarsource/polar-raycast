import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitGrantDownloadablesProperties = {
    files?: Array<string> | undefined;
};
/** @internal */
export declare const BenefitGrantDownloadablesProperties$inboundSchema: z.ZodType<BenefitGrantDownloadablesProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitGrantDownloadablesProperties$Outbound = {
    files?: Array<string> | undefined;
};
/** @internal */
export declare const BenefitGrantDownloadablesProperties$outboundSchema: z.ZodType<BenefitGrantDownloadablesProperties$Outbound, z.ZodTypeDef, BenefitGrantDownloadablesProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitGrantDownloadablesProperties$ {
    /** @deprecated use `BenefitGrantDownloadablesProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitGrantDownloadablesProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitGrantDownloadablesProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitGrantDownloadablesProperties$Outbound, z.ZodTypeDef, BenefitGrantDownloadablesProperties>;
    /** @deprecated use `BenefitGrantDownloadablesProperties$Outbound` instead. */
    type Outbound = BenefitGrantDownloadablesProperties$Outbound;
}
export declare function benefitGrantDownloadablesPropertiesToJSON(benefitGrantDownloadablesProperties: BenefitGrantDownloadablesProperties): string;
export declare function benefitGrantDownloadablesPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitGrantDownloadablesProperties, SDKValidationError>;
//# sourceMappingURL=benefitgrantdownloadablesproperties.d.ts.map