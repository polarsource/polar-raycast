import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Author = {
    id: number;
    login: string;
    htmlUrl: string;
    avatarUrl: string;
};
/** @internal */
export declare const Author$inboundSchema: z.ZodType<Author, z.ZodTypeDef, unknown>;
/** @internal */
export type Author$Outbound = {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
};
/** @internal */
export declare const Author$outboundSchema: z.ZodType<Author$Outbound, z.ZodTypeDef, Author>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Author$ {
    /** @deprecated use `Author$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Author, z.ZodTypeDef, unknown>;
    /** @deprecated use `Author$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Author$Outbound, z.ZodTypeDef, Author>;
    /** @deprecated use `Author$Outbound` instead. */
    type Outbound = Author$Outbound;
}
export declare function authorToJSON(author: Author): string;
export declare function authorFromJSON(jsonString: string): SafeParseResult<Author, SDKValidationError>;
//# sourceMappingURL=author.d.ts.map