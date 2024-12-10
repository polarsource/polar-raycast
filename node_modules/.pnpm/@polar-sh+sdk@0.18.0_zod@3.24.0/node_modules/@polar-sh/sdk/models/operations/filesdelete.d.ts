import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FilesDeleteRequest = {
    id: string;
};
/** @internal */
export declare const FilesDeleteRequest$inboundSchema: z.ZodType<FilesDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FilesDeleteRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const FilesDeleteRequest$outboundSchema: z.ZodType<FilesDeleteRequest$Outbound, z.ZodTypeDef, FilesDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FilesDeleteRequest$ {
    /** @deprecated use `FilesDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FilesDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FilesDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FilesDeleteRequest$Outbound, z.ZodTypeDef, FilesDeleteRequest>;
    /** @deprecated use `FilesDeleteRequest$Outbound` instead. */
    type Outbound = FilesDeleteRequest$Outbound;
}
export declare function filesDeleteRequestToJSON(filesDeleteRequest: FilesDeleteRequest): string;
export declare function filesDeleteRequestFromJSON(jsonString: string): SafeParseResult<FilesDeleteRequest, SDKValidationError>;
//# sourceMappingURL=filesdelete.d.ts.map