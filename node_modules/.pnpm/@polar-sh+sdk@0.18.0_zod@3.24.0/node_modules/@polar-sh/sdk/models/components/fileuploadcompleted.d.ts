import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { S3FileUploadCompletedPart, S3FileUploadCompletedPart$Outbound } from "./s3fileuploadcompletedpart.js";
export type FileUploadCompleted = {
    id: string;
    path: string;
    parts: Array<S3FileUploadCompletedPart>;
};
/** @internal */
export declare const FileUploadCompleted$inboundSchema: z.ZodType<FileUploadCompleted, z.ZodTypeDef, unknown>;
/** @internal */
export type FileUploadCompleted$Outbound = {
    id: string;
    path: string;
    parts: Array<S3FileUploadCompletedPart$Outbound>;
};
/** @internal */
export declare const FileUploadCompleted$outboundSchema: z.ZodType<FileUploadCompleted$Outbound, z.ZodTypeDef, FileUploadCompleted>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileUploadCompleted$ {
    /** @deprecated use `FileUploadCompleted$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileUploadCompleted, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileUploadCompleted$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileUploadCompleted$Outbound, z.ZodTypeDef, FileUploadCompleted>;
    /** @deprecated use `FileUploadCompleted$Outbound` instead. */
    type Outbound = FileUploadCompleted$Outbound;
}
export declare function fileUploadCompletedToJSON(fileUploadCompleted: FileUploadCompleted): string;
export declare function fileUploadCompletedFromJSON(jsonString: string): SafeParseResult<FileUploadCompleted, SDKValidationError>;
//# sourceMappingURL=fileuploadcompleted.d.ts.map