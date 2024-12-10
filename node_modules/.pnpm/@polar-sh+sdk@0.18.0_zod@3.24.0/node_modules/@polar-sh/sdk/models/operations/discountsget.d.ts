import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DiscountsGetRequest = {
    /**
     * The discount ID.
     */
    id: string;
};
/** @internal */
export declare const DiscountsGetRequest$inboundSchema: z.ZodType<DiscountsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountsGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DiscountsGetRequest$outboundSchema: z.ZodType<DiscountsGetRequest$Outbound, z.ZodTypeDef, DiscountsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountsGetRequest$ {
    /** @deprecated use `DiscountsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountsGetRequest$Outbound, z.ZodTypeDef, DiscountsGetRequest>;
    /** @deprecated use `DiscountsGetRequest$Outbound` instead. */
    type Outbound = DiscountsGetRequest$Outbound;
}
export declare function discountsGetRequestToJSON(discountsGetRequest: DiscountsGetRequest): string;
export declare function discountsGetRequestFromJSON(jsonString: string): SafeParseResult<DiscountsGetRequest, SDKValidationError>;
//# sourceMappingURL=discountsget.d.ts.map