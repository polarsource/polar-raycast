import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UserInfoOrganization = {
    sub: string;
    name?: string | null | undefined;
};
/** @internal */
export declare const UserInfoOrganization$inboundSchema: z.ZodType<UserInfoOrganization, z.ZodTypeDef, unknown>;
/** @internal */
export type UserInfoOrganization$Outbound = {
    sub: string;
    name?: string | null | undefined;
};
/** @internal */
export declare const UserInfoOrganization$outboundSchema: z.ZodType<UserInfoOrganization$Outbound, z.ZodTypeDef, UserInfoOrganization>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserInfoOrganization$ {
    /** @deprecated use `UserInfoOrganization$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserInfoOrganization, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserInfoOrganization$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserInfoOrganization$Outbound, z.ZodTypeDef, UserInfoOrganization>;
    /** @deprecated use `UserInfoOrganization$Outbound` instead. */
    type Outbound = UserInfoOrganization$Outbound;
}
export declare function userInfoOrganizationToJSON(userInfoOrganization: UserInfoOrganization): string;
export declare function userInfoOrganizationFromJSON(jsonString: string): SafeParseResult<UserInfoOrganization, SDKValidationError>;
//# sourceMappingURL=userinfoorganization.d.ts.map