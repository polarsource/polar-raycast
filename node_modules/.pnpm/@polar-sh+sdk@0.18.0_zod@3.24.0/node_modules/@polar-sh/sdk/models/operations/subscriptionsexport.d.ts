import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Filter by organization ID.
 */
export type OrganizationId = string | Array<string>;
export type SubscriptionsExportRequest = {
    /**
     * Filter by organization ID.
     */
    organizationId?: string | Array<string> | null | undefined;
};
/** @internal */
export declare const OrganizationId$inboundSchema: z.ZodType<OrganizationId, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationId$Outbound = string | Array<string>;
/** @internal */
export declare const OrganizationId$outboundSchema: z.ZodType<OrganizationId$Outbound, z.ZodTypeDef, OrganizationId>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationId$ {
    /** @deprecated use `OrganizationId$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationId, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationId$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationId$Outbound, z.ZodTypeDef, OrganizationId>;
    /** @deprecated use `OrganizationId$Outbound` instead. */
    type Outbound = OrganizationId$Outbound;
}
export declare function organizationIdToJSON(organizationId: OrganizationId): string;
export declare function organizationIdFromJSON(jsonString: string): SafeParseResult<OrganizationId, SDKValidationError>;
/** @internal */
export declare const SubscriptionsExportRequest$inboundSchema: z.ZodType<SubscriptionsExportRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriptionsExportRequest$Outbound = {
    organization_id?: string | Array<string> | null | undefined;
};
/** @internal */
export declare const SubscriptionsExportRequest$outboundSchema: z.ZodType<SubscriptionsExportRequest$Outbound, z.ZodTypeDef, SubscriptionsExportRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionsExportRequest$ {
    /** @deprecated use `SubscriptionsExportRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriptionsExportRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriptionsExportRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriptionsExportRequest$Outbound, z.ZodTypeDef, SubscriptionsExportRequest>;
    /** @deprecated use `SubscriptionsExportRequest$Outbound` instead. */
    type Outbound = SubscriptionsExportRequest$Outbound;
}
export declare function subscriptionsExportRequestToJSON(subscriptionsExportRequest: SubscriptionsExportRequest): string;
export declare function subscriptionsExportRequestFromJSON(jsonString: string): SafeParseResult<SubscriptionsExportRequest, SDKValidationError>;
//# sourceMappingURL=subscriptionsexport.d.ts.map