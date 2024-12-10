import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type S3DownloadURL = {
    url: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    expiresAt: Date;
};
/** @internal */
export declare const S3DownloadURL$inboundSchema: z.ZodType<S3DownloadURL, z.ZodTypeDef, unknown>;
/** @internal */
export type S3DownloadURL$Outbound = {
    url: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    expires_at: string;
};
/** @internal */
export declare const S3DownloadURL$outboundSchema: z.ZodType<S3DownloadURL$Outbound, z.ZodTypeDef, S3DownloadURL>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3DownloadURL$ {
    /** @deprecated use `S3DownloadURL$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3DownloadURL, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3DownloadURL$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3DownloadURL$Outbound, z.ZodTypeDef, S3DownloadURL>;
    /** @deprecated use `S3DownloadURL$Outbound` instead. */
    type Outbound = S3DownloadURL$Outbound;
}
export declare function s3DownloadURLToJSON(s3DownloadURL: S3DownloadURL): string;
export declare function s3DownloadURLFromJSON(jsonString: string): SafeParseResult<S3DownloadURL, SDKValidationError>;
//# sourceMappingURL=s3downloadurl.d.ts.map