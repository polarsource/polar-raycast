import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitGrantCustomProperties = {};
/** @internal */
export declare const BenefitGrantCustomProperties$inboundSchema: z.ZodType<BenefitGrantCustomProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitGrantCustomProperties$Outbound = {};
/** @internal */
export declare const BenefitGrantCustomProperties$outboundSchema: z.ZodType<BenefitGrantCustomProperties$Outbound, z.ZodTypeDef, BenefitGrantCustomProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitGrantCustomProperties$ {
    /** @deprecated use `BenefitGrantCustomProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitGrantCustomProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitGrantCustomProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitGrantCustomProperties$Outbound, z.ZodTypeDef, BenefitGrantCustomProperties>;
    /** @deprecated use `BenefitGrantCustomProperties$Outbound` instead. */
    type Outbound = BenefitGrantCustomProperties$Outbound;
}
export declare function benefitGrantCustomPropertiesToJSON(benefitGrantCustomProperties: BenefitGrantCustomProperties): string;
export declare function benefitGrantCustomPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitGrantCustomProperties, SDKValidationError>;
//# sourceMappingURL=benefitgrantcustomproperties.d.ts.map