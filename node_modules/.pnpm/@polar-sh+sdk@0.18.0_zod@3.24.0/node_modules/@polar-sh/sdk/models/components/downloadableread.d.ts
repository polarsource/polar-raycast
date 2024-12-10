import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FileDownload, FileDownload$Outbound } from "./filedownload.js";
export type DownloadableRead = {
    id: string;
    benefitId: string;
    file: FileDownload;
};
/** @internal */
export declare const DownloadableRead$inboundSchema: z.ZodType<DownloadableRead, z.ZodTypeDef, unknown>;
/** @internal */
export type DownloadableRead$Outbound = {
    id: string;
    benefit_id: string;
    file: FileDownload$Outbound;
};
/** @internal */
export declare const DownloadableRead$outboundSchema: z.ZodType<DownloadableRead$Outbound, z.ZodTypeDef, DownloadableRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DownloadableRead$ {
    /** @deprecated use `DownloadableRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DownloadableRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `DownloadableRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DownloadableRead$Outbound, z.ZodTypeDef, DownloadableRead>;
    /** @deprecated use `DownloadableRead$Outbound` instead. */
    type Outbound = DownloadableRead$Outbound;
}
export declare function downloadableReadToJSON(downloadableRead: DownloadableRead): string;
export declare function downloadableReadFromJSON(jsonString: string): SafeParseResult<DownloadableRead, SDKValidationError>;
//# sourceMappingURL=downloadableread.d.ts.map