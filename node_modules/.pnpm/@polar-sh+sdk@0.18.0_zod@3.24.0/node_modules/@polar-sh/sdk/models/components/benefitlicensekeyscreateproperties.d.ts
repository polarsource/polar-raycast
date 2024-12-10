import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BenefitLicenseKeyActivationProperties, BenefitLicenseKeyActivationProperties$Outbound } from "./benefitlicensekeyactivationproperties.js";
import { BenefitLicenseKeyExpirationProperties, BenefitLicenseKeyExpirationProperties$Outbound } from "./benefitlicensekeyexpirationproperties.js";
export type BenefitLicenseKeysCreateProperties = {
    prefix?: string | null | undefined;
    expires?: BenefitLicenseKeyExpirationProperties | null | undefined;
    activations?: BenefitLicenseKeyActivationProperties | null | undefined;
    limitUsage?: number | null | undefined;
};
/** @internal */
export declare const BenefitLicenseKeysCreateProperties$inboundSchema: z.ZodType<BenefitLicenseKeysCreateProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitLicenseKeysCreateProperties$Outbound = {
    prefix?: string | null | undefined;
    expires?: BenefitLicenseKeyExpirationProperties$Outbound | null | undefined;
    activations?: BenefitLicenseKeyActivationProperties$Outbound | null | undefined;
    limit_usage?: number | null | undefined;
};
/** @internal */
export declare const BenefitLicenseKeysCreateProperties$outboundSchema: z.ZodType<BenefitLicenseKeysCreateProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysCreateProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitLicenseKeysCreateProperties$ {
    /** @deprecated use `BenefitLicenseKeysCreateProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitLicenseKeysCreateProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitLicenseKeysCreateProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitLicenseKeysCreateProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysCreateProperties>;
    /** @deprecated use `BenefitLicenseKeysCreateProperties$Outbound` instead. */
    type Outbound = BenefitLicenseKeysCreateProperties$Outbound;
}
export declare function benefitLicenseKeysCreatePropertiesToJSON(benefitLicenseKeysCreateProperties: BenefitLicenseKeysCreateProperties): string;
export declare function benefitLicenseKeysCreatePropertiesFromJSON(jsonString: string): SafeParseResult<BenefitLicenseKeysCreateProperties, SDKValidationError>;
//# sourceMappingURL=benefitlicensekeyscreateproperties.d.ts.map