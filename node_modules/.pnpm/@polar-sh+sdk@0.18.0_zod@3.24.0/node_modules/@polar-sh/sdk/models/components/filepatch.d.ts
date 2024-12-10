import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FilePatch = {
    name?: string | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const FilePatch$inboundSchema: z.ZodType<FilePatch, z.ZodTypeDef, unknown>;
/** @internal */
export type FilePatch$Outbound = {
    name?: string | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const FilePatch$outboundSchema: z.ZodType<FilePatch$Outbound, z.ZodTypeDef, FilePatch>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FilePatch$ {
    /** @deprecated use `FilePatch$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FilePatch, z.ZodTypeDef, unknown>;
    /** @deprecated use `FilePatch$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FilePatch$Outbound, z.ZodTypeDef, FilePatch>;
    /** @deprecated use `FilePatch$Outbound` instead. */
    type Outbound = FilePatch$Outbound;
}
export declare function filePatchToJSON(filePatch: FilePatch): string;
export declare function filePatchFromJSON(jsonString: string): SafeParseResult<FilePatch, SDKValidationError>;
//# sourceMappingURL=filepatch.d.ts.map