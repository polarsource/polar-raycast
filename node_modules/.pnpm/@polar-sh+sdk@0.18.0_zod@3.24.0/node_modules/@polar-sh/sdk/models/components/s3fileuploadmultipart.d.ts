import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { S3FileUploadPart, S3FileUploadPart$Outbound } from "./s3fileuploadpart.js";
export type S3FileUploadMultipart = {
    id: string;
    path: string;
    parts: Array<S3FileUploadPart>;
};
/** @internal */
export declare const S3FileUploadMultipart$inboundSchema: z.ZodType<S3FileUploadMultipart, z.ZodTypeDef, unknown>;
/** @internal */
export type S3FileUploadMultipart$Outbound = {
    id: string;
    path: string;
    parts: Array<S3FileUploadPart$Outbound>;
};
/** @internal */
export declare const S3FileUploadMultipart$outboundSchema: z.ZodType<S3FileUploadMultipart$Outbound, z.ZodTypeDef, S3FileUploadMultipart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3FileUploadMultipart$ {
    /** @deprecated use `S3FileUploadMultipart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3FileUploadMultipart, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3FileUploadMultipart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3FileUploadMultipart$Outbound, z.ZodTypeDef, S3FileUploadMultipart>;
    /** @deprecated use `S3FileUploadMultipart$Outbound` instead. */
    type Outbound = S3FileUploadMultipart$Outbound;
}
export declare function s3FileUploadMultipartToJSON(s3FileUploadMultipart: S3FileUploadMultipart): string;
export declare function s3FileUploadMultipartFromJSON(jsonString: string): SafeParseResult<S3FileUploadMultipart, SDKValidationError>;
//# sourceMappingURL=s3fileuploadmultipart.d.ts.map