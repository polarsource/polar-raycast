import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RevokeTokenResponse = {};
/** @internal */
export declare const RevokeTokenResponse$inboundSchema: z.ZodType<RevokeTokenResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RevokeTokenResponse$Outbound = {};
/** @internal */
export declare const RevokeTokenResponse$outboundSchema: z.ZodType<RevokeTokenResponse$Outbound, z.ZodTypeDef, RevokeTokenResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RevokeTokenResponse$ {
    /** @deprecated use `RevokeTokenResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RevokeTokenResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RevokeTokenResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RevokeTokenResponse$Outbound, z.ZodTypeDef, RevokeTokenResponse>;
    /** @deprecated use `RevokeTokenResponse$Outbound` instead. */
    type Outbound = RevokeTokenResponse$Outbound;
}
export declare function revokeTokenResponseToJSON(revokeTokenResponse: RevokeTokenResponse): string;
export declare function revokeTokenResponseFromJSON(jsonString: string): SafeParseResult<RevokeTokenResponse, SDKValidationError>;
//# sourceMappingURL=revoketokenresponse.d.ts.map