import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitsGetRequest = {
    id: string;
};
/** @internal */
export declare const BenefitsGetRequest$inboundSchema: z.ZodType<BenefitsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitsGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const BenefitsGetRequest$outboundSchema: z.ZodType<BenefitsGetRequest$Outbound, z.ZodTypeDef, BenefitsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitsGetRequest$ {
    /** @deprecated use `BenefitsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitsGetRequest$Outbound, z.ZodTypeDef, BenefitsGetRequest>;
    /** @deprecated use `BenefitsGetRequest$Outbound` instead. */
    type Outbound = BenefitsGetRequest$Outbound;
}
export declare function benefitsGetRequestToJSON(benefitsGetRequest: BenefitsGetRequest): string;
export declare function benefitsGetRequestFromJSON(jsonString: string): SafeParseResult<BenefitsGetRequest, SDKValidationError>;
//# sourceMappingURL=benefitsget.d.ts.map