import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FileServiceTypes } from "./fileservicetypes.js";
import { S3DownloadURL, S3DownloadURL$Outbound } from "./s3downloadurl.js";
export type FileDownload = {
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
    download: S3DownloadURL;
    version: string | null;
    isUploaded: boolean;
    service: FileServiceTypes;
    sizeReadable: string;
};
/** @internal */
export declare const FileDownload$inboundSchema: z.ZodType<FileDownload, z.ZodTypeDef, unknown>;
/** @internal */
export type FileDownload$Outbound = {
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
    download: S3DownloadURL$Outbound;
    version: string | null;
    is_uploaded: boolean;
    service: string;
    size_readable: string;
};
/** @internal */
export declare const FileDownload$outboundSchema: z.ZodType<FileDownload$Outbound, z.ZodTypeDef, FileDownload>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileDownload$ {
    /** @deprecated use `FileDownload$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileDownload, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileDownload$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileDownload$Outbound, z.ZodTypeDef, FileDownload>;
    /** @deprecated use `FileDownload$Outbound` instead. */
    type Outbound = FileDownload$Outbound;
}
export declare function fileDownloadToJSON(fileDownload: FileDownload): string;
export declare function fileDownloadFromJSON(jsonString: string): SafeParseResult<FileDownload, SDKValidationError>;
//# sourceMappingURL=filedownload.d.ts.map