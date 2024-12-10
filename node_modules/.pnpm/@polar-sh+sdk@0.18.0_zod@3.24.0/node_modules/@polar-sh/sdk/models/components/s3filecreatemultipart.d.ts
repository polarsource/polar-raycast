import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { S3FileCreatePart, S3FileCreatePart$Outbound } from "./s3filecreatepart.js";
export type S3FileCreateMultipart = {
    parts: Array<S3FileCreatePart>;
};
/** @internal */
export declare const S3FileCreateMultipart$inboundSchema: z.ZodType<S3FileCreateMultipart, z.ZodTypeDef, unknown>;
/** @internal */
export type S3FileCreateMultipart$Outbound = {
    parts: Array<S3FileCreatePart$Outbound>;
};
/** @internal */
export declare const S3FileCreateMultipart$outboundSchema: z.ZodType<S3FileCreateMultipart$Outbound, z.ZodTypeDef, S3FileCreateMultipart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3FileCreateMultipart$ {
    /** @deprecated use `S3FileCreateMultipart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3FileCreateMultipart, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3FileCreateMultipart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3FileCreateMultipart$Outbound, z.ZodTypeDef, S3FileCreateMultipart>;
    /** @deprecated use `S3FileCreateMultipart$Outbound` instead. */
    type Outbound = S3FileCreateMultipart$Outbound;
}
export declare function s3FileCreateMultipartToJSON(s3FileCreateMultipart: S3FileCreateMultipart): string;
export declare function s3FileCreateMultipartFromJSON(jsonString: string): SafeParseResult<S3FileCreateMultipart, SDKValidationError>;
//# sourceMappingURL=s3filecreatemultipart.d.ts.map