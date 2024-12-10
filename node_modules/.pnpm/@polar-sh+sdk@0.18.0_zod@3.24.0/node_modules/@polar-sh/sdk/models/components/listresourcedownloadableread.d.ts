import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DownloadableRead, DownloadableRead$Outbound } from "./downloadableread.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceDownloadableRead = {
    items: Array<DownloadableRead>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceDownloadableRead$inboundSchema: z.ZodType<ListResourceDownloadableRead, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceDownloadableRead$Outbound = {
    items: Array<DownloadableRead$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceDownloadableRead$outboundSchema: z.ZodType<ListResourceDownloadableRead$Outbound, z.ZodTypeDef, ListResourceDownloadableRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceDownloadableRead$ {
    /** @deprecated use `ListResourceDownloadableRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceDownloadableRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceDownloadableRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceDownloadableRead$Outbound, z.ZodTypeDef, ListResourceDownloadableRead>;
    /** @deprecated use `ListResourceDownloadableRead$Outbound` instead. */
    type Outbound = ListResourceDownloadableRead$Outbound;
}
export declare function listResourceDownloadableReadToJSON(listResourceDownloadableRead: ListResourceDownloadableRead): string;
export declare function listResourceDownloadableReadFromJSON(jsonString: string): SafeParseResult<ListResourceDownloadableRead, SDKValidationError>;
//# sourceMappingURL=listresourcedownloadableread.d.ts.map