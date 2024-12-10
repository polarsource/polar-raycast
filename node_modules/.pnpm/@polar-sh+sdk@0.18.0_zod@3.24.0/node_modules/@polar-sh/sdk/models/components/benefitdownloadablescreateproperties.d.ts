import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitDownloadablesCreateProperties = {
    archived?: {
        [k: string]: boolean;
    } | undefined;
    files: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesCreateProperties$inboundSchema: z.ZodType<BenefitDownloadablesCreateProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDownloadablesCreateProperties$Outbound = {
    archived?: {
        [k: string]: boolean;
    } | undefined;
    files: Array<string>;
};
/** @internal */
export declare const BenefitDownloadablesCreateProperties$outboundSchema: z.ZodType<BenefitDownloadablesCreateProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesCreateProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDownloadablesCreateProperties$ {
    /** @deprecated use `BenefitDownloadablesCreateProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDownloadablesCreateProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDownloadablesCreateProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDownloadablesCreateProperties$Outbound, z.ZodTypeDef, BenefitDownloadablesCreateProperties>;
    /** @deprecated use `BenefitDownloadablesCreateProperties$Outbound` instead. */
    type Outbound = BenefitDownloadablesCreateProperties$Outbound;
}
export declare function benefitDownloadablesCreatePropertiesToJSON(benefitDownloadablesCreateProperties: BenefitDownloadablesCreateProperties): string;
export declare function benefitDownloadablesCreatePropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDownloadablesCreateProperties, SDKValidationError>;
//# sourceMappingURL=benefitdownloadablescreateproperties.d.ts.map