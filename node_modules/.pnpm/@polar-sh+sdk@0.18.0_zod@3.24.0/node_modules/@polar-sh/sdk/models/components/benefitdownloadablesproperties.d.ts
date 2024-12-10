import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitDownloadablesProperties = {
    archived: {
        [k: string]: boolean;
    };
    files: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesProperties$inboundSchema: z.ZodType<BenefitDownloadablesProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDownloadablesProperties$Outbound = {
    archived: {
        [k: string]: boolean;
    };
    files: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesProperties$outboundSchema: z.ZodType<BenefitDownloadablesProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDownloadablesProperties$ {
    /** @deprecated use `BenefitDownloadablesProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDownloadablesProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDownloadablesProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDownloadablesProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesProperties>;
    /** @deprecated use `BenefitDownloadablesProperties$Outbound` instead. */
    type Outbound = BenefitDownloadablesProperties$Outbound;
}
export declare function benefitDownloadablesPropertiesToJSON(benefitDownloadablesProperties: BenefitDownloadablesProperties): string;
export declare function benefitDownloadablesPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDownloadablesProperties, SDKValidationError>;
//# sourceMappingURL=benefitdownloadablesproperties.d.ts.map