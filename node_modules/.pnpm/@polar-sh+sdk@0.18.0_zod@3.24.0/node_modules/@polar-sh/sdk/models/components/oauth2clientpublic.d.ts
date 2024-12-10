import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OAuth2ClientPublic = {
    /**
     * Creation timestamp of the object.
     */
    createdAt: Date;
    /**
     * Last modification timestamp of the object.
     */
    modifiedAt: Date | null;
    clientId: string;
    clientName: string | null;
    clientUri: string | null;
    logoUri: string | null;
    tosUri: string | null;
    policyUri: string | null;
};
/** @internal */
export declare const OAuth2ClientPublic$inboundSchema: z.ZodType<OAuth2ClientPublic, z.ZodTypeDef, unknown>;
/** @internal */
export type OAuth2ClientPublic$Outbound = {
    created_at: string;
    modified_at: string | null;
    client_id: string;
    client_name: string | null;
    client_uri: string | null;
    logo_uri: string | null;
    tos_uri: string | null;
    policy_uri: string | null;
};
/** @internal */
export declare const OAuth2ClientPublic$outboundSchema: z.ZodType<OAuth2ClientPublic$Outbound, z.ZodTypeDef, OAuth2ClientPublic>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OAuth2ClientPublic$ {
    /** @deprecated use `OAuth2ClientPublic$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OAuth2ClientPublic, z.ZodTypeDef, unknown>;
    /** @deprecated use `OAuth2ClientPublic$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OAuth2ClientPublic$Outbound, z.ZodTypeDef, OAuth2ClientPublic>;
    /** @deprecated use `OAuth2ClientPublic$Outbound` instead. */
    type Outbound = OAuth2ClientPublic$Outbound;
}
export declare function oAuth2ClientPublicToJSON(oAuth2ClientPublic: OAuth2ClientPublic): string;
export declare function oAuth2ClientPublicFromJSON(jsonString: string): SafeParseResult<OAuth2ClientPublic, SDKValidationError>;
//# sourceMappingURL=oauth2clientpublic.d.ts.map