import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties for a benefit of type `custom`.
 */
export type BenefitCustomProperties = {
    note: string | null;
};
/** @internal */
export declare const BenefitCustomProperties$inboundSchema: z.ZodType<BenefitCustomProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitCustomProperties$Outbound = {
    note: string | null;
};
/** @internal */
export declare const BenefitCustomProperties$outboundSchema: z.ZodType<BenefitCustomProperties$Outbound, z.ZodTypeDef, BenefitCustomProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitCustomProperties$ {
    /** @deprecated use `BenefitCustomProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitCustomProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitCustomProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitCustomProperties$Outbound, z.ZodTypeDef, BenefitCustomProperties>;
    /** @deprecated use `BenefitCustomProperties$Outbound` instead. */
    type Outbound = BenefitCustomProperties$Outbound;
}
export declare function benefitCustomPropertiesToJSON(benefitCustomProperties: BenefitCustomProperties): string;
export declare function benefitCustomPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitCustomProperties, SDKValidationError>;
//# sourceMappingURL=benefitcustomproperties.d.ts.map