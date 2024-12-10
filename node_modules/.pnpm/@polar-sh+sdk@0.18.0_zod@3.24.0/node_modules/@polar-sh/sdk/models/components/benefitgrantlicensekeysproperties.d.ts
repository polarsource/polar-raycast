import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitGrantLicenseKeysProperties = {
    licenseKeyId?: string | undefined;
    displayKey?: string | undefined;
};
/** @internal */
export declare const BenefitGrantLicenseKeysProperties$inboundSchema: z.ZodType<BenefitGrantLicenseKeysProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitGrantLicenseKeysProperties$Outbound = {
    license_key_id?: string | undefined;
    display_key?: string | undefined;
};
/** @internal */
export declare const BenefitGrantLicenseKeysProperties$outboundSchema: z.ZodType<BenefitGrantLicenseKeysProperties$Outbound, z.ZodTypeDef, BenefitGrantLicenseKeysProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitGrantLicenseKeysProperties$ {
    /** @deprecated use `BenefitGrantLicenseKeysProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitGrantLicenseKeysProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitGrantLicenseKeysProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitGrantLicenseKeysProperties$Outbound, z.ZodTypeDef, BenefitGrantLicenseKeysProperties>;
    /** @deprecated use `BenefitGrantLicenseKeysProperties$Outbound` instead. */
    type Outbound = BenefitGrantLicenseKeysProperties$Outbound;
}
export declare function benefitGrantLicenseKeysPropertiesToJSON(benefitGrantLicenseKeysProperties: BenefitGrantLicenseKeysProperties): string;
export declare function benefitGrantLicenseKeysPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitGrantLicenseKeysProperties, SDKValidationError>;
//# sourceMappingURL=benefitgrantlicensekeysproperties.d.ts.map