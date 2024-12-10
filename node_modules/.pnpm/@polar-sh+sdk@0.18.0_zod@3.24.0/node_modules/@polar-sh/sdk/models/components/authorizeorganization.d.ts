import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AuthorizeOrganization = {
    id: string;
    slug: string;
    avatarUrl: string | null;
};
/** @internal */
export declare const AuthorizeOrganization$inboundSchema: z.ZodType<AuthorizeOrganization, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthorizeOrganization$Outbound = {
    id: string;
    slug: string;
    avatar_url: string | null;
};
/** @internal */
export declare const AuthorizeOrganization$outboundSchema: z.ZodType<AuthorizeOrganization$Outbound, z.ZodTypeDef, AuthorizeOrganization>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthorizeOrganization$ {
    /** @deprecated use `AuthorizeOrganization$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthorizeOrganization, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthorizeOrganization$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthorizeOrganization$Outbound, z.ZodTypeDef, AuthorizeOrganization>;
    /** @deprecated use `AuthorizeOrganization$Outbound` instead. */
    type Outbound = AuthorizeOrganization$Outbound;
}
export declare function authorizeOrganizationToJSON(authorizeOrganization: AuthorizeOrganization): string;
export declare function authorizeOrganizationFromJSON(jsonString: string): SafeParseResult<AuthorizeOrganization, SDKValidationError>;
//# sourceMappingURL=authorizeorganization.d.ts.map