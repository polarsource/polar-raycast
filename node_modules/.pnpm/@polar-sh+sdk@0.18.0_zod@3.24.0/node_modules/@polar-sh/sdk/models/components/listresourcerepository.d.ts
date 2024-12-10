import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { Repository, Repository$Outbound } from "./repository.js";
export type ListResourceRepository = {
    items: Array<Repository>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceRepository$inboundSchema: z.ZodType<ListResourceRepository, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceRepository$Outbound = {
    items: Array<Repository$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceRepository$outboundSchema: z.ZodType<ListResourceRepository$Outbound, z.ZodTypeDef, ListResourceRepository>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceRepository$ {
    /** @deprecated use `ListResourceRepository$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceRepository, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceRepository$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceRepository$Outbound, z.ZodTypeDef, ListResourceRepository>;
    /** @deprecated use `ListResourceRepository$Outbound` instead. */
    type Outbound = ListResourceRepository$Outbound;
}
export declare function listResourceRepositoryToJSON(listResourceRepository: ListResourceRepository): string;
export declare function listResourceRepositoryFromJSON(jsonString: string): SafeParseResult<ListResourceRepository, SDKValidationError>;
//# sourceMappingURL=listresourcerepository.d.ts.map