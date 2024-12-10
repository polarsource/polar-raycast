import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExternalOrganization, ExternalOrganization$Outbound } from "./externalorganization.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceExternalOrganization = {
    items: Array<ExternalOrganization>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceExternalOrganization$inboundSchema: z.ZodType<ListResourceExternalOrganization, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceExternalOrganization$Outbound = {
    items: Array<ExternalOrganization$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceExternalOrganization$outboundSchema: z.ZodType<ListResourceExternalOrganization$Outbound, z.ZodTypeDef, ListResourceExternalOrganization>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceExternalOrganization$ {
    /** @deprecated use `ListResourceExternalOrganization$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceExternalOrganization, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceExternalOrganization$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceExternalOrganization$Outbound, z.ZodTypeDef, ListResourceExternalOrganization>;
    /** @deprecated use `ListResourceExternalOrganization$Outbound` instead. */
    type Outbound = ListResourceExternalOrganization$Outbound;
}
export declare function listResourceExternalOrganizationToJSON(listResourceExternalOrganization: ListResourceExternalOrganization): string;
export declare function listResourceExternalOrganizationFromJSON(jsonString: string): SafeParseResult<ListResourceExternalOrganization, SDKValidationError>;
//# sourceMappingURL=listresourceexternalorganization.d.ts.map