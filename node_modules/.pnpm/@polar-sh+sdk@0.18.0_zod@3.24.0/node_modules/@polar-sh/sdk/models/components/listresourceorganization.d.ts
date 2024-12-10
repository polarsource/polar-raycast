import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Organization, Organization$Outbound } from "./organization.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceOrganization = {
    items: Array<Organization>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceOrganization$inboundSchema: z.ZodType<ListResourceOrganization, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceOrganization$Outbound = {
    items: Array<Organization$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceOrganization$outboundSchema: z.ZodType<ListResourceOrganization$Outbound, z.ZodTypeDef, ListResourceOrganization>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceOrganization$ {
    /** @deprecated use `ListResourceOrganization$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceOrganization, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceOrganization$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceOrganization$Outbound, z.ZodTypeDef, ListResourceOrganization>;
    /** @deprecated use `ListResourceOrganization$Outbound` instead. */
    type Outbound = ListResourceOrganization$Outbound;
}
export declare function listResourceOrganizationToJSON(listResourceOrganization: ListResourceOrganization): string;
export declare function listResourceOrganizationFromJSON(jsonString: string): SafeParseResult<ListResourceOrganization, SDKValidationError>;
//# sourceMappingURL=listresourceorganization.d.ts.map