import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties available to subscribers for a benefit of type `custom`.
 */
export type BenefitCustomSubscriberProperties = {
    note: string | null;
};
/** @internal */
export declare const BenefitCustomSubscriberProperties$inboundSchema: z.ZodType<BenefitCustomSubscriberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitCustomSubscriberProperties$Outbound = {
    note: string | null;
};
/** @internal */
export declare const BenefitCustomSubscriberProperties$outboundSchema: z.ZodType<BenefitCustomSubscriberProperties$Outbound, z.ZodTypeDef, BenefitCustomSubscriberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitCustomSubscriberProperties$ {
    /** @deprecated use `BenefitCustomSubscriberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitCustomSubscriberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitCustomSubscriberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitCustomSubscriberProperties$Outbound, z.ZodTypeDef, BenefitCustomSubscriberProperties>;
    /** @deprecated use `BenefitCustomSubscriberProperties$Outbound` instead. */
    type Outbound = BenefitCustomSubscriberProperties$Outbound;
}
export declare function benefitCustomSubscriberPropertiesToJSON(benefitCustomSubscriberProperties: BenefitCustomSubscriberProperties): string;
export declare function benefitCustomSubscriberPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitCustomSubscriberProperties, SDKValidationError>;
//# sourceMappingURL=benefitcustomsubscriberproperties.d.ts.map