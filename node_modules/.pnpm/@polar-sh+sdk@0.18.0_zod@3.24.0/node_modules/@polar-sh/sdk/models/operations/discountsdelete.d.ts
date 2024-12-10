import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DiscountsDeleteRequest = {
    /**
     * The discount ID.
     */
    id: string;
};
/** @internal */
export declare const DiscountsDeleteRequest$inboundSchema: z.ZodType<DiscountsDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DiscountsDeleteRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DiscountsDeleteRequest$outboundSchema: z.ZodType<DiscountsDeleteRequest$Outbound, z.ZodTypeDef, DiscountsDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DiscountsDeleteRequest$ {
    /** @deprecated use `DiscountsDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DiscountsDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DiscountsDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DiscountsDeleteRequest$Outbound, z.ZodTypeDef, DiscountsDeleteRequest>;
    /** @deprecated use `DiscountsDeleteRequest$Outbound` instead. */
    type Outbound = DiscountsDeleteRequest$Outbound;
}
export declare function discountsDeleteRequestToJSON(discountsDeleteRequest: DiscountsDeleteRequest): string;
export declare function discountsDeleteRequestFromJSON(jsonString: string): SafeParseResult<DiscountsDeleteRequest, SDKValidationError>;
//# sourceMappingURL=discountsdelete.d.ts.map