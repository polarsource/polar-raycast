import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AuthorizeUser = {
    id: string;
    email: string;
    avatarUrl: string | null;
};
/** @internal */
export declare const AuthorizeUser$inboundSchema: z.ZodType<AuthorizeUser, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthorizeUser$Outbound = {
    id: string;
    email: string;
    avatar_url: string | null;
};
/** @internal */
export declare const AuthorizeUser$outboundSchema: z.ZodType<AuthorizeUser$Outbound, z.ZodTypeDef, AuthorizeUser>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthorizeUser$ {
    /** @deprecated use `AuthorizeUser$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthorizeUser, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthorizeUser$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthorizeUser$Outbound, z.ZodTypeDef, AuthorizeUser>;
    /** @deprecated use `AuthorizeUser$Outbound` instead. */
    type Outbound = AuthorizeUser$Outbound;
}
export declare function authorizeUserToJSON(authorizeUser: AuthorizeUser): string;
export declare function authorizeUserFromJSON(jsonString: string): SafeParseResult<AuthorizeUser, SDKValidationError>;
//# sourceMappingURL=authorizeuser.d.ts.map