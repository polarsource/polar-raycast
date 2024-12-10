import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RepositoryProfileSettingsUpdate = {
    setDescription?: boolean | null | undefined;
    description?: string | null | undefined;
    setCoverImageUrl?: boolean | null | undefined;
    coverImageUrl?: string | null | undefined;
    featuredOrganizations?: Array<string> | null | undefined;
    highlightedSubscriptionTiers?: Array<string> | null | undefined;
    links?: Array<string> | null | undefined;
};
/** @internal */
export declare const RepositoryProfileSettingsUpdate$inboundSchema: z.ZodType<RepositoryProfileSettingsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type RepositoryProfileSettingsUpdate$Outbound = {
    set_description?: boolean | null | undefined;
    description?: string | null | undefined;
    set_cover_image_url?: boolean | null | undefined;
    cover_image_url?: string | null | undefined;
    featured_organizations?: Array<string> | null | undefined;
    highlighted_subscription_tiers?: Array<string> | null | undefined;
    links?: Array<string> | null | undefined;
};
/** @internal */
export declare const RepositoryProfileSettingsUpdate$outboundSchema: z.ZodType<RepositoryProfileSettingsUpdate$Outbound, z.ZodTypeDef, RepositoryProfileSettingsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepositoryProfileSettingsUpdate$ {
    /** @deprecated use `RepositoryProfileSettingsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RepositoryProfileSettingsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RepositoryProfileSettingsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RepositoryProfileSettingsUpdate$Outbound, z.ZodTypeDef, RepositoryProfileSettingsUpdate>;
    /** @deprecated use `RepositoryProfileSettingsUpdate$Outbound` instead. */
    type Outbound = RepositoryProfileSettingsUpdate$Outbound;
}
export declare function repositoryProfileSettingsUpdateToJSON(repositoryProfileSettingsUpdate: RepositoryProfileSettingsUpdate): string;
export declare function repositoryProfileSettingsUpdateFromJSON(jsonString: string): SafeParseResult<RepositoryProfileSettingsUpdate, SDKValidationError>;
//# sourceMappingURL=repositoryprofilesettingsupdate.d.ts.map