import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BenefitLicenseKeyActivationProperties, BenefitLicenseKeyActivationProperties$Outbound } from "./benefitlicensekeyactivationproperties.js";
import { BenefitLicenseKeyExpirationProperties, BenefitLicenseKeyExpirationProperties$Outbound } from "./benefitlicensekeyexpirationproperties.js";
export type BenefitLicenseKeysSubscriberProperties = {
    prefix: string | null;
    expires: BenefitLicenseKeyExpirationProperties | null;
    activations: BenefitLicenseKeyActivationProperties | null;
    limitUsage: number | null;
};
/** @internal */
export declare const BenefitLicenseKeysSubscriberProperties$inboundSchema: z.ZodType<BenefitLicenseKeysSubscriberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitLicenseKeysSubscriberProperties$Outbound = {
    prefix: string | null;
    expires: BenefitLicenseKeyExpirationProperties$Outbound | null;
    activations: BenefitLicenseKeyActivationProperties$Outbound | null;
    limit_usage: number | null;
};
/** @internal */
export declare const BenefitLicenseKeysSubscriberProperties$outboundSchema: z.ZodType<BenefitLicenseKeysSubscriberProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysSubscriberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitLicenseKeysSubscriberProperties$ {
    /** @deprecated use `BenefitLicenseKeysSubscriberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitLicenseKeysSubscriberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitLicenseKeysSubscriberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitLicenseKeysSubscriberProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeysSubscriberProperties>;
    /** @deprecated use `BenefitLicenseKeysSubscriberProperties$Outbound` instead. */
    type Outbound = BenefitLicenseKeysSubscriberProperties$Outbound;
}
export declare function benefitLicenseKeysSubscriberPropertiesToJSON(benefitLicenseKeysSubscriberProperties: BenefitLicenseKeysSubscriberProperties): string;
export declare function benefitLicenseKeysSubscriberPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitLicenseKeysSubscriberProperties, SDKValidationError>;
//# sourceMappingURL=benefitlicensekeyssubscriberproperties.d.ts.map