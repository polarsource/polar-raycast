import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const Timeframe: {
    readonly Year: "year";
    readonly Month: "month";
    readonly Day: "day";
};
export type Timeframe = ClosedEnum<typeof Timeframe>;
export type BenefitLicenseKeyExpirationProperties = {
    ttl: number;
    timeframe: Timeframe;
};
/** @internal */
export declare const Timeframe$inboundSchema: z.ZodNativeEnum<typeof Timeframe>;
/** @internal */
export declare const Timeframe$outboundSchema: z.ZodNativeEnum<typeof Timeframe>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Timeframe$ {
    /** @deprecated use `Timeframe$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Year: "year";
        readonly Month: "month";
        readonly Day: "day";
    }>;
    /** @deprecated use `Timeframe$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Year: "year";
        readonly Month: "month";
        readonly Day: "day";
    }>;
}
/** @internal */
export declare const BenefitLicenseKeyExpirationProperties$inboundSchema: z.ZodType<BenefitLicenseKeyExpirationProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitLicenseKeyExpirationProperties$Outbound = {
    ttl: number;
    timeframe: string;
};
/** @internal */
export declare const BenefitLicenseKeyExpirationProperties$outboundSchema: z.ZodType<BenefitLicenseKeyExpirationProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeyExpirationProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitLicenseKeyExpirationProperties$ {
    /** @deprecated use `BenefitLicenseKeyExpirationProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitLicenseKeyExpirationProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitLicenseKeyExpirationProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitLicenseKeyExpirationProperties$Outbound, z.ZodTypeDef, BenefitLicenseKeyExpirationProperties>;
    /** @deprecated use `BenefitLicenseKeyExpirationProperties$Outbound` instead. */
    type Outbound = BenefitLicenseKeyExpirationProperties$Outbound;
}
export declare function benefitLicenseKeyExpirationPropertiesToJSON(benefitLicenseKeyExpirationProperties: BenefitLicenseKeyExpirationProperties): string;
export declare function benefitLicenseKeyExpirationPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitLicenseKeyExpirationProperties, SDKValidationError>;
//# sourceMappingURL=benefitlicensekeyexpirationproperties.d.ts.map