import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BenefitLicenseKeyActivationProperties, BenefitLicenseKeyActivationProperties$Outbound } from "./benefitlicensekeyactivationproperties.js";
import { BenefitLicenseKeyExpirationProperties, BenefitLicenseKeyExpirationProperties$Outbound } from "./benefitlicensekeyexpirationproperties.js";
export type BenefitLicenseKeysProperties = {
    prefix: string | null;
    expires: BenefitLicenseKeyExpirationProperties | null;
    activations: BenefitLicenseKeyActivationProperties | null;
    limitUsage: number | null;
};
/** @internal */
export declare const BenefitLicenseKeysProperties$inboundSchema: z.ZodType<BenefitLicenseKeysProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitLicenseKeysProperties$Outbound = {
    prefix: string | null;
    expires: BenefitLicenseKeyExpirationProperties$Outbound | null;
    activations: BenefitLicenseKeyActivationProperties$Outbound | null;
    limit_usage: number | null;
};
/** @internal */
export declare const BenefitLicenseKeysProperties$outboundSchema: z.ZodType<BenefitLicenseKeysProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitLicenseKeysProperties$ {
    /** @deprecated use `BenefitLicenseKeysProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitLicenseKeysProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitLicenseKeysProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitLicenseKeysProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysProperties>;
    /** @deprecated use `BenefitLicenseKeysProperties$Outbound` instead. */
    type Outbound = BenefitLicenseKeysProperties$Outbound;
}
export declare function benefitLicenseKeysPropertiesToJSON(benefitLicenseKeysProperties: BenefitLicenseKeysProperties): string;
export declare function benefitLicenseKeysPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitLicenseKeysProperties, SDKValidationError>;
//# sourceMappingURL=benefitlicensekeysproperties.d.ts.map