import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties for creating a benefit of type `custom`.
 */
export type BenefitCustomCreateProperties = {
    note?: string | null | undefined;
};
/** @internal */
export declare const BenefitCustomCreateProperties$inboundSchema: z.ZodType<BenefitCustomCreateProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitCustomCreateProperties$Outbound = {
    note?: string | null | undefined;
};
/** @internal */
export declare const BenefitCustomCreateProperties$outboundSchema: z.ZodType<BenefitCustomCreateProperties$Outbound, z.ZodTypeDef, BenefitCustomCreateProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitCustomCreateProperties$ {
    /** @deprecated use `BenefitCustomCreateProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitCustomCreateProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitCustomCreateProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitCustomCreateProperties$Outbound, z.ZodTypeDef, BenefitCustomCreateProperties>;
    /** @deprecated use `BenefitCustomCreateProperties$Outbound` instead. */
    type Outbound = BenefitCustomCreateProperties$Outbound;
}
export declare function benefitCustomCreatePropertiesToJSON(benefitCustomCreateProperties: BenefitCustomCreateProperties): string;
export declare function benefitCustomCreatePropertiesFromJSON(jsonString: string): SafeParseResult<BenefitCustomCreateProperties, SDKValidationError>;
//# sourceMappingURL=benefitcustomcreateproperties.d.ts.map