import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type S3FileCreatePart = {
    number: number;
    chunkStart: number;
    chunkEnd: number;
    checksumSha256Base64?: string | null | undefined;
};
/** @internal */
export declare const S3FileCreatePart$inboundSchema: z.ZodType<S3FileCreatePart, z.ZodTypeDef, unknown>;
/** @internal */
export type S3FileCreatePart$Outbound = {
    number: number;
    chunk_start: number;
    chunk_end: number;
    checksum_sha256_base64?: string | null | undefined;
};
/** @internal */
export declare const S3FileCreatePart$outboundSchema: z.ZodType<S3FileCreatePart$Outbound, z.ZodTypeDef, S3FileCreatePart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace S3FileCreatePart$ {
    /** @deprecated use `S3FileCreatePart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<S3FileCreatePart, z.ZodTypeDef, unknown>;
    /** @deprecated use `S3FileCreatePart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<S3FileCreatePart$Outbound, z.ZodTypeDef, S3FileCreatePart>;
    /** @deprecated use `S3FileCreatePart$Outbound` instead. */
    type Outbound = S3FileCreatePart$Outbound;
}
export declare function s3FileCreatePartToJSON(s3FileCreatePart: S3FileCreatePart): string;
export declare function s3FileCreatePartFromJSON(jsonString: string): SafeParseResult<S3FileCreatePart, SDKValidationError>;
//# sourceMappingURL=s3filecreatepart.d.ts.map