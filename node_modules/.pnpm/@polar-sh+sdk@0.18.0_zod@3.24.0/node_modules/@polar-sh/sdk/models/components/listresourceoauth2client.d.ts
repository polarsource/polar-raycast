import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OAuth2Client, OAuth2Client$Outbound } from "./oauth2client.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceOAuth2Client = {
    items: Array<OAuth2Client>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceOAuth2Client$inboundSchema: z.ZodType<ListResourceOAuth2Client, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceOAuth2Client$Outbound = {
    items: Array<OAuth2Client$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceOAuth2Client$outboundSchema: z.ZodType<ListResourceOAuth2Client$Outbound, z.ZodTypeDef, ListResourceOAuth2Client>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceOAuth2Client$ {
    /** @deprecated use `ListResourceOAuth2Client$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceOAuth2Client, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceOAuth2Client$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceOAuth2Client$Outbound, z.ZodTypeDef, ListResourceOAuth2Client>;
    /** @deprecated use `ListResourceOAuth2Client$Outbound` instead. */
    type Outbound = ListResourceOAuth2Client$Outbound;
}
export declare function listResourceOAuth2ClientToJSON(listResourceOAuth2Client: ListResourceOAuth2Client): string;
export declare function listResourceOAuth2ClientFromJSON(jsonString: string): SafeParseResult<ListResourceOAuth2Client, SDKValidationError>;
//# sourceMappingURL=listresourceoauth2client.d.ts.map