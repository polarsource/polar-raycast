import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type S3FileUploadCompletedPart = {
    number: number;
    checksumEtag: string;
    checksumSha256Base64: string | null;
};
/** @internal */
export declare const S3FileUploadCompletedPart$inboundSchema: z.ZodType<S3FileUploadCompletedPart, z.ZodTypeDef, unknown>;
/** @internal */
export type S3FileUploadCompletedPart$Outbound = {
    number: number;
    checksum_etag: string;
    checksum_sha256_base64: string | null;
};
/** @internal */
export declare const S3FileUploadCompletedPart$outboundSchema: z.ZodType<S3FileUploadCompletedPart$Outbound, z.ZodTypeDef, S3FileUploadCompletedPart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3FileUploadCompletedPart$ {
    /** @deprecated use `S3FileUploadCompletedPart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3FileUploadCompletedPart, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3FileUploadCompletedPart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3FileUploadCompletedPart$Outbound, z.ZodTypeDef, S3FileUploadCompletedPart>;
    /** @deprecated use `S3FileUploadCompletedPart$Outbound` instead. */
    type Outbound = S3FileUploadCompletedPart$Outbound;
}
export declare function s3FileUploadCompletedPartToJSON(s3FileUploadCompletedPart: S3FileUploadCompletedPart): string;
export declare function s3FileUploadCompletedPartFromJSON(jsonString: string): SafeParseResult<S3FileUploadCompletedPart, SDKValidationError>;
//# sourceMappingURL=s3fileuploadcompletedpart.d.ts.map