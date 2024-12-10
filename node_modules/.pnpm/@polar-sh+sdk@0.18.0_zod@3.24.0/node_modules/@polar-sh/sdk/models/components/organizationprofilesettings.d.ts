import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OrganizationSubscribePromoteSettings, OrganizationSubscribePromoteSettings$Outbound } from "./organizationsubscribepromotesettings.js";
export type OrganizationProfileSettings = {
    /**
     * If this organization has a profile enabled
     */
    enabled?: boolean | null | undefined;
    /**
     * A description of the organization
     */
    description?: string | null | undefined;
    /**
     * A list of featured projects
     */
    featuredProjects?: Array<string> | null | undefined;
    /**
     * A list of featured organizations
     */
    featuredOrganizations?: Array<string> | null | undefined;
    /**
     * A list of links associated with the organization
     */
    links?: Array<string> | null | undefined;
    /**
     * Subscription promotion settings
     */
    subscribe?: OrganizationSubscribePromoteSettings | null | undefined;
    /**
     * Accent color for the organization
     */
    accentColor?: string | null | undefined;
};
/** @internal */
export declare const OrganizationProfileSettings$inboundSchema: z.ZodType<OrganizationProfileSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationProfileSettings$Outbound = {
    enabled?: boolean | null | undefined;
    description?: string | null | undefined;
    featured_projects?: Array<string> | null | undefined;
    featured_organizations?: Array<string> | null | undefined;
    links?: Array<string> | null | undefined;
    subscribe?: OrganizationSubscribePromoteSettings$Outbound | null | undefined;
    accent_color?: string | null | undefined;
};
/** @internal */
export declare const OrganizationProfileSettings$outboundSchema: z.ZodType<OrganizationProfileSettings$Outbound, z.ZodTypeDef, OrganizationProfileSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationProfileSettings$ {
    /** @deprecated use `OrganizationProfileSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationProfileSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationProfileSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationProfileSettings$Outbound, z.ZodTypeDef, OrganizationProfileSettings>;
    /** @deprecated use `OrganizationProfileSettings$Outbound` instead. */
    type Outbound = OrganizationProfileSettings$Outbound;
}
export declare function organizationProfileSettingsToJSON(organizationProfileSettings: OrganizationProfileSettings): string;
export declare function organizationProfileSettingsFromJSON(jsonString: string): SafeParseResult<OrganizationProfileSettings, SDKValidationError>;
//# sourceMappingURL=organizationprofilesettings.d.ts.map