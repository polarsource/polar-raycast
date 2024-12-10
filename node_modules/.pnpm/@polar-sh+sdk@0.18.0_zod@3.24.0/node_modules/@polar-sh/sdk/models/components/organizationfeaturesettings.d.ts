import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrganizationFeatureSettings = {
    /**
     * If this organization has issue funding enabled
     */
    issueFundingEnabled?: boolean | undefined;
};
/** @internal */
export declare const OrganizationFeatureSettings$inboundSchema: z.ZodType<OrganizationFeatureSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationFeatureSettings$Outbound = {
    issue_funding_enabled: boolean;
};
/** @internal */
export declare const OrganizationFeatureSettings$outboundSchema: z.ZodType<OrganizationFeatureSettings$Outbound, z.ZodTypeDef, OrganizationFeatureSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationFeatureSettings$ {
    /** @deprecated use `OrganizationFeatureSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationFeatureSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationFeatureSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationFeatureSettings$Outbound, z.ZodTypeDef, OrganizationFeatureSettings>;
    /** @deprecated use `OrganizationFeatureSettings$Outbound` instead. */
    type Outbound = OrganizationFeatureSettings$Outbound;
}
export declare function organizationFeatureSettingsToJSON(organizationFeatureSettings: OrganizationFeatureSettings): string;
export declare function organizationFeatureSettingsFromJSON(jsonString: string): SafeParseResult<OrganizationFeatureSettings, SDKValidationError>;
//# sourceMappingURL=organizationfeaturesettings.d.ts.map