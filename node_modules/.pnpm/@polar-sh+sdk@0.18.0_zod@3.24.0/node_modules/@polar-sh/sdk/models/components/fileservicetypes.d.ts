import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const FileServiceTypes: {
    readonly Downloadable: "downloadable";
    readonly ProductMedia: "product_media";
    readonly OrganizationAvatar: "organization_avatar";
};
export type FileServiceTypes = ClosedEnum<typeof FileServiceTypes>;
/** @internal */
export declare const FileServiceTypes$inboundSchema: z.ZodNativeEnum<typeof FileServiceTypes>;
/** @internal */
export declare const FileServiceTypes$outboundSchema: z.ZodNativeEnum<typeof FileServiceTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileServiceTypes$ {
    /** @deprecated use `FileServiceTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Downloadable: "downloadable";
        readonly ProductMedia: "product_media";
        readonly OrganizationAvatar: "organization_avatar";
    }>;
    /** @deprecated use `FileServiceTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Downloadable: "downloadable";
        readonly ProductMedia: "product_media";
        readonly OrganizationAvatar: "organization_avatar";
    }>;
}
//# sourceMappingURL=fileservicetypes.d.ts.map