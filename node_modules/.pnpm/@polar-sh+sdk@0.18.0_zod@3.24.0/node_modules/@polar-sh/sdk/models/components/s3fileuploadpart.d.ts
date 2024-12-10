import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type S3FileUploadPart = {
    number: number;
    chunkStart: number;
    chunkEnd: number;
    checksumSha256Base64?: string | null | undefined;
    url: string;
    expiresAt: Date;
    headers?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export declare const S3FileUploadPart$inboundSchema: z.ZodType<S3FileUploadPart, z.ZodTypeDef, unknown>;
/** @internal */
export type S3FileUploadPart$Outbound = {
    number: number;
    chunk_start: number;
    chunk_end: number;
    checksum_sha256_base64?: string | null | undefined;
    url: string;
    expires_at: string;
    headers?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export declare const S3FileUploadPart$outboundSchema: z.ZodType<S3FileUploadPart$Outbound, z.ZodTypeDef, S3FileUploadPart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3FileUploadPart$ {
    /** @deprecated use `S3FileUploadPart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3FileUploadPart, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3FileUploadPart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3FileUploadPart$Outbound, z.ZodTypeDef, S3FileUploadPart>;
    /** @deprecated use `S3FileUploadPart$Outbound` instead. */
    type Outbound = S3FileUploadPart$Outbound;
}
export declare function s3FileUploadPartToJSON(s3FileUploadPart: S3FileUploadPart): string;
export declare function s3FileUploadPartFromJSON(jsonString: string): SafeParseResult<S3FileUploadPart, SDKValidationError>;
//# sourceMappingURL=s3fileuploadpart.d.ts.map