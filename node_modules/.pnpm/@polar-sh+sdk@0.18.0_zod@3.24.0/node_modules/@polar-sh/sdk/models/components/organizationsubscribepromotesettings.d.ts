import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrganizationSubscribePromoteSettings = {
    /**
     * Promote email subscription (free)
     */
    promote?: boolean | undefined;
    /**
     * Show subscription count publicly
     */
    showCount?: boolean | undefined;
    /**
     * Include free subscribers in total count
     */
    countFree?: boolean | undefined;
};
/** @internal */
export declare const OrganizationSubscribePromoteSettings$inboundSchema: z.ZodType<OrganizationSubscribePromoteSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationSubscribePromoteSettings$Outbound = {
    promote: boolean;
    show_count: boolean;
    count_free: boolean;
};
/** @internal */
export declare const OrganizationSubscribePromoteSettings$outboundSchema: z.ZodType<OrganizationSubscribePromoteSettings$Outbound, z.ZodTypeDef, OrganizationSubscribePromoteSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationSubscribePromoteSettings$ {
    /** @deprecated use `OrganizationSubscribePromoteSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationSubscribePromoteSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationSubscribePromoteSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationSubscribePromoteSettings$Outbound, z.ZodTypeDef, OrganizationSubscribePromoteSettings>;
    /** @deprecated use `OrganizationSubscribePromoteSettings$Outbound` instead. */
    type Outbound = OrganizationSubscribePromoteSettings$Outbound;
}
export declare function organizationSubscribePromoteSettingsToJSON(organizationSubscribePromoteSettings: OrganizationSubscribePromoteSettings): string;
export declare function organizationSubscribePromoteSettingsFromJSON(jsonString: string): SafeParseResult<OrganizationSubscribePromoteSettings, SDKValidationError>;
//# sourceMappingURL=organizationsubscribepromotesettings.d.ts.map