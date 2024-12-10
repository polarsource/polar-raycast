import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RepositoryProfileSettings = {
    /**
     * A description of the repository
     */
    description?: string | null | undefined;
    /**
     * A URL to a cover image
     */
    coverImageUrl?: string | null | undefined;
    /**
     * A list of featured organizations
     */
    featuredOrganizations?: Array<string> | null | undefined;
    /**
     * A list of highlighted subscription tiers
     */
    highlightedSubscriptionTiers?: Array<string> | null | undefined;
    /**
     * A list of links related to the repository
     */
    links?: Array<string> | null | undefined;
};
/** @internal */
export declare const RepositoryProfileSettings$inboundSchema: z.ZodType<RepositoryProfileSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type RepositoryProfileSettings$Outbound = {
    description?: string | null | undefined;
    cover_image_url?: string | null | undefined;
    featured_organizations?: Array<string> | null | undefined;
    highlighted_subscription_tiers?: Array<string> | null | undefined;
    links?: Array<string> | null | undefined;
};
/** @internal */
export declare const RepositoryProfileSettings$outboundSchema: z.ZodType<RepositoryProfileSettings$Outbound, z.ZodTypeDef, RepositoryProfileSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepositoryProfileSettings$ {
    /** @deprecated use `RepositoryProfileSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RepositoryProfileSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `RepositoryProfileSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RepositoryProfileSettings$Outbound, z.ZodTypeDef, RepositoryProfileSettings>;
    /** @deprecated use `RepositoryProfileSettings$Outbound` instead. */
    type Outbound = RepositoryProfileSettings$Outbound;
}
export declare function repositoryProfileSettingsToJSON(repositoryProfileSettings: RepositoryProfileSettings): string;
export declare function repositoryProfileSettingsFromJSON(jsonString: string): SafeParseResult<RepositoryProfileSettings, SDKValidationError>;
//# sourceMappingURL=repositoryprofilesettings.d.ts.map