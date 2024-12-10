import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Pledger = {
    name: string;
    githubUsername: string | null;
    avatarUrl: string | null;
};
/** @internal */
export declare const Pledger$inboundSchema: z.ZodType<Pledger, z.ZodTypeDef, unknown>;
/** @internal */
export type Pledger$Outbound = {
    name: string;
    github_username: string | null;
    avatar_url: string | null;
};
/** @internal */
export declare const Pledger$outboundSchema: z.ZodType<Pledger$Outbound, z.ZodTypeDef, Pledger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Pledger$ {
    /** @deprecated use `Pledger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Pledger, z.ZodTypeDef, unknown>;
    /** @deprecated use `Pledger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Pledger$Outbound, z.ZodTypeDef, Pledger>;
    /** @deprecated use `Pledger$Outbound` instead. */
    type Outbound = Pledger$Outbound;
}
export declare function pledgerToJSON(pledger: Pledger): string;
export declare function pledgerFromJSON(jsonString: string): SafeParseResult<Pledger, SDKValidationError>;
//# sourceMappingURL=pledger.d.ts.map