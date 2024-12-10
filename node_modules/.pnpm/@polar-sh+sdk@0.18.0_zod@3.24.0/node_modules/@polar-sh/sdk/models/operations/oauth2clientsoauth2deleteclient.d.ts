import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Oauth2ClientsOauth2DeleteClientRequest = {
    clientId: string;
};
/** @internal */
export declare const Oauth2ClientsOauth2DeleteClientRequest$inboundSchema: z.ZodType<Oauth2ClientsOauth2DeleteClientRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type Oauth2ClientsOauth2DeleteClientRequest$Outbound = {
    client_id: string;
};
/** @internal */
export declare const Oauth2ClientsOauth2DeleteClientRequest$outboundSchema: z.ZodType<Oauth2ClientsOauth2DeleteClientRequest$Outbound, z.ZodTypeDef, Oauth2ClientsOauth2DeleteClientRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Oauth2ClientsOauth2DeleteClientRequest$ {
    /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Oauth2ClientsOauth2DeleteClientRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Oauth2ClientsOauth2DeleteClientRequest$Outbound, z.ZodTypeDef, Oauth2ClientsOauth2DeleteClientRequest>;
    /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$Outbound` instead. */
    type Outbound = Oauth2ClientsOauth2DeleteClientRequest$Outbound;
}
export declare function oauth2ClientsOauth2DeleteClientRequestToJSON(oauth2ClientsOauth2DeleteClientRequest: Oauth2ClientsOauth2DeleteClientRequest): string;
export declare function oauth2ClientsOauth2DeleteClientRequestFromJSON(jsonString: string): SafeParseResult<Oauth2ClientsOauth2DeleteClientRequest, SDKValidationError>;
//# sourceMappingURL=oauth2clientsoauth2deleteclient.d.ts.map