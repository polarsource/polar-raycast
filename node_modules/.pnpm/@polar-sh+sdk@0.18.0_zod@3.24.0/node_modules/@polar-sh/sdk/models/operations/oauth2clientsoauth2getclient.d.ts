import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Oauth2ClientsOauth2GetClientRequest = {
    clientId: string;
};
/** @internal */
export declare const Oauth2ClientsOauth2GetClientRequest$inboundSchema: z.ZodType<Oauth2ClientsOauth2GetClientRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type Oauth2ClientsOauth2GetClientRequest$Outbound = {
    client_id: string;
};
/** @internal */
export declare const Oauth2ClientsOauth2GetClientRequest$outboundSchema: z.ZodType<Oauth2ClientsOauth2GetClientRequest$Outbound, z.ZodTypeDef, Oauth2ClientsOauth2GetClientRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Oauth2ClientsOauth2GetClientRequest$ {
    /** @deprecated use `Oauth2ClientsOauth2GetClientRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Oauth2ClientsOauth2GetClientRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `Oauth2ClientsOauth2GetClientRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Oauth2ClientsOauth2GetClientRequest$Outbound, z.ZodTypeDef, Oauth2ClientsOauth2GetClientRequest>;
    /** @deprecated use `Oauth2ClientsOauth2GetClientRequest$Outbound` instead. */
    type Outbound = Oauth2ClientsOauth2GetClientRequest$Outbound;
}
export declare function oauth2ClientsOauth2GetClientRequestToJSON(oauth2ClientsOauth2GetClientRequest: Oauth2ClientsOauth2GetClientRequest): string;
export declare function oauth2ClientsOauth2GetClientRequestFromJSON(jsonString: string): SafeParseResult<Oauth2ClientsOauth2GetClientRequest, SDKValidationError>;
//# sourceMappingURL=oauth2clientsoauth2getclient.d.ts.map