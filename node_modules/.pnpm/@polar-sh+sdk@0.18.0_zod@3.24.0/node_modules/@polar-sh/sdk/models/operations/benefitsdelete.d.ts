import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BenefitsDeleteRequest = {
    id: string;
};
/** @internal */
export declare const BenefitsDeleteRequest$inboundSchema: z.ZodType<BenefitsDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitsDeleteRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const BenefitsDeleteRequest$outboundSchema: z.ZodType<BenefitsDeleteRequest$Outbound, z.ZodTypeDef, BenefitsDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitsDeleteRequest$ {
    /** @deprecated use `BenefitsDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitsDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitsDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitsDeleteRequest$Outbound, z.ZodTypeDef, BenefitsDeleteRequest>;
    /** @deprecated use `BenefitsDeleteRequest$Outbound` instead. */
    type Outbound = BenefitsDeleteRequest$Outbound;
}
export declare function benefitsDeleteRequestToJSON(benefitsDeleteRequest: BenefitsDeleteRequest): string;
export declare function benefitsDeleteRequestFromJSON(jsonString: string): SafeParseResult<BenefitsDeleteRequest, SDKValidationError>;
//# sourceMappingURL=benefitsdelete.d.ts.map