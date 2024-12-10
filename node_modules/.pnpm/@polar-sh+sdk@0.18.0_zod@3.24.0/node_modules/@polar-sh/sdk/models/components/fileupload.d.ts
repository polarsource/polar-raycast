import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FileServiceTypes } from "./fileservicetypes.js";
import { S3FileUploadMultipart, S3FileUploadMultipart$Outbound } from "./s3fileuploadmultipart.js";
export type FileUpload = {
    /**
     * The ID of the object.
     */
    id: string;
    organizationId: string;
    name: string;
    path: string;
    mimeType: string;
    size: number;
    storageVersion: string | null;
    checksumEtag: string | null;
    checksumSha256Base64: string | null;
    checksumSha256Hex: string | null;
    lastModifiedAt: Date | null;
    upload: S3FileUploadMultipart;
    version: string | null;
    isUploaded?: boolean | undefined;
    service: FileServiceTypes;
    sizeReadable: string;
};
/** @internal */
export declare const FileUpload$inboundSchema: z.ZodType<FileUpload, z.ZodTypeDef, unknown>;
/** @internal */
export type FileUpload$Outbound = {
    id: string;
    organization_id: string;
    name: string;
    path: string;
    mime_type: string;
    size: number;
    storage_version: string | null;
    checksum_etag: string | null;
    checksum_sha256_base64: string | null;
    checksum_sha256_hex: string | null;
    last_modified_at: string | null;
    upload: S3FileUploadMultipart$Outbound;
    version: string | null;
    is_uploaded: boolean;
    service: string;
    size_readable: string;
};
/** @internal */
export declare const FileUpload$outboundSchema: z.ZodType<FileUpload$Outbound, z.ZodTypeDef, FileUpload>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileUpload$ {
    /** @deprecated use `FileUpload$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileUpload, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileUpload$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileUpload$Outbound, z.ZodTypeDef, FileUpload>;
    /** @deprecated use `FileUpload$Outbound` instead. */
    type Outbound = FileUpload$Outbound;
}
export declare function fileUploadToJSON(fileUpload: FileUpload): string;
export declare function fileUploadFromJSON(jsonString: string): SafeParseResult<FileUpload, SDKValidationError>;
//# sourceMappingURL=fileupload.d.ts.map