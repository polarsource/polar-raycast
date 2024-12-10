import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RepositoriesGetRequest = {
    id: string;
};
/** @internal */
export declare const RepositoriesGetRequest$inboundSchema: z.ZodType<RepositoriesGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RepositoriesGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const RepositoriesGetRequest$outboundSchema: z.ZodType<RepositoriesGetRequest$Outbound, z.ZodTypeDef, RepositoriesGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepositoriesGetRequest$ {
    /** @deprecated use `RepositoriesGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RepositoriesGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RepositoriesGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RepositoriesGetRequest$Outbound, z.ZodTypeDef, RepositoriesGetRequest>;
    /** @deprecated use `RepositoriesGetRequest$Outbound` instead. */
    type Outbound = RepositoriesGetRequest$Outbound;
}
export declare function repositoriesGetRequestToJSON(repositoriesGetRequest: RepositoriesGetRequest): string;
export declare function repositoriesGetRequestFromJSON(jsonString: string): SafeParseResult<RepositoriesGetRequest, SDKValidationError>;
//# sourceMappingURL=repositoriesget.d.ts.map