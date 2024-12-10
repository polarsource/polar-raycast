import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DownloadableFileRead, DownloadableFileRead$Outbound } from "./downloadablefileread.js";
import { OrganizationAvatarFileRead, OrganizationAvatarFileRead$Outbound } from "./organizationavatarfileread.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { ProductMediaFileRead, ProductMediaFileRead$Outbound } from "./productmediafileread.js";
export type FileRead = (DownloadableFileRead & {
    service: "downloadable";
}) | (OrganizationAvatarFileRead & {
    service: "organization_avatar";
}) | (ProductMediaFileRead & {
    service: "product_media";
});
export type ListResourceFileRead = {
    items: Array<(DownloadableFileRead & {
        service: "downloadable";
    }) | (OrganizationAvatarFileRead & {
        service: "organization_avatar";
    }) | (ProductMediaFileRead & {
        service: "product_media";
    })>;
    pagination: Pagination;
};
/** @internal */
export declare const FileRead$inboundSchema: z.ZodType<FileRead, z.ZodTypeDef, unknown>;
/** @internal */
export type FileRead$Outbound = (DownloadableFileRead$Outbound & {
    service: "downloadable";
}) | (OrganizationAvatarFileRead$Outbound & {
    service: "organization_avatar";
}) | (ProductMediaFileRead$Outbound & {
    service: "product_media";
});
/** @internal */
export declare const FileRead$outboundSchema: z.ZodType<FileRead$Outbound, z.ZodTypeDef, FileRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileRead$ {
    /** @deprecated use `FileRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileRead$Outbound, z.ZodTypeDef, FileRead>;
    /** @deprecated use `FileRead$Outbound` instead. */
    type Outbound = FileRead$Outbound;
}
export declare function fileReadToJSON(fileRead: FileRead): string;
export declare function fileReadFromJSON(jsonString: string): SafeParseResult<FileRead, SDKValidationError>;
/** @internal */
export declare const ListResourceFileRead$inboundSchema: z.ZodType<ListResourceFileRead, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceFileRead$Outbound = {
    items: Array<(DownloadableFileRead$Outbound & {
        service: "downloadable";
    }) | (OrganizationAvatarFileRead$Outbound & {
        service: "organization_avatar";
    }) | (ProductMediaFileRead$Outbound & {
        service: "product_media";
    })>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceFileRead$outboundSchema: z.ZodType<ListResourceFileRead$Outbound, z.ZodTypeDef, ListResourceFileRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceFileRead$ {
    /** @deprecated use `ListResourceFileRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceFileRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceFileRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceFileRead$Outbound, z.ZodTypeDef, ListResourceFileRead>;
    /** @deprecated use `ListResourceFileRead$Outbound` instead. */
    type Outbound = ListResourceFileRead$Outbound;
}
export declare function listResourceFileReadToJSON(listResourceFileRead: ListResourceFileRead): string;
export declare function listResourceFileReadFromJSON(jsonString: string): SafeParseResult<ListResourceFileRead, SDKValidationError>;
//# sourceMappingURL=listresourcefileread.d.ts.map