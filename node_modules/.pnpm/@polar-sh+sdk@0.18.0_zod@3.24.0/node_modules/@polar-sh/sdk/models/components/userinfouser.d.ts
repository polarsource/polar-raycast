import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UserInfoUser = {
    sub: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    emailVerified?: boolean | null | undefined;
};
/** @internal */
export declare const UserInfoUser$inboundSchema: z.ZodType<UserInfoUser, z.ZodTypeDef, unknown>;
/** @internal */
export type UserInfoUser$Outbound = {
    sub: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    email_verified?: boolean | null | undefined;
};
/** @internal */
export declare const UserInfoUser$outboundSchema: z.ZodType<UserInfoUser$Outbound, z.ZodTypeDef, UserInfoUser>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserInfoUser$ {
    /** @deprecated use `UserInfoUser$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserInfoUser, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserInfoUser$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserInfoUser$Outbound, z.ZodTypeDef, UserInfoUser>;
    /** @deprecated use `UserInfoUser$Outbound` instead. */
    type Outbound = UserInfoUser$Outbound;
}
export declare function userInfoUserToJSON(userInfoUser: UserInfoUser): string;
export declare function userInfoUserFromJSON(jsonString: string): SafeParseResult<UserInfoUser, SDKValidationError>;
//# sourceMappingURL=userinfouser.d.ts.map