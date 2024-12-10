import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrganizationsGetRequest = {
    id: string;
};
/** @internal */
export declare const OrganizationsGetRequest$inboundSchema: z.ZodType<OrganizationsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationsGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const OrganizationsGetRequest$outboundSchema: z.ZodType<OrganizationsGetRequest$Outbound, z.ZodTypeDef, OrganizationsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationsGetRequest$ {
    /** @deprecated use `OrganizationsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationsGetRequest$Outbound, z.ZodTypeDef, OrganizationsGetRequest>;
    /** @deprecated use `OrganizationsGetRequest$Outbound` instead. */
    type Outbound = OrganizationsGetRequest$Outbound;
}
export declare function organizationsGetRequestToJSON(organizationsGetRequest: OrganizationsGetRequest): string;
export declare function organizationsGetRequestFromJSON(jsonString: string): SafeParseResult<OrganizationsGetRequest, SDKValidationError>;
//# sourceMappingURL=organizationsget.d.ts.map