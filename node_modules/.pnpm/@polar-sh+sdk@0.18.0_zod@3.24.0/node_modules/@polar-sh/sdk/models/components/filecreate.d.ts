import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DownloadableFileCreate, DownloadableFileCreate$Outbound } from "./downloadablefilecreate.js";
import { OrganizationAvatarFileCreate, OrganizationAvatarFileCreate$Outbound } from "./organizationavatarfilecreate.js";
import { ProductMediaFileCreate, ProductMediaFileCreate$Outbound } from "./productmediafilecreate.js";
export type FileCreate = (DownloadableFileCreate & {
    service: "downloadable";
}) | (OrganizationAvatarFileCreate & {
    service: "organization_avatar";
}) | (ProductMediaFileCreate & {
    service: "product_media";
});
/** @internal */
export declare const FileCreate$inboundSchema: z.ZodType<FileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type FileCreate$Outbound = (DownloadableFileCreate$Outbound & {
    service: "downloadable";
}) | (OrganizationAvatarFileCreate$Outbound & {
    service: "organization_avatar";
}) | (ProductMediaFileCreate$Outbound & {
    service: "product_media";
});
/** @internal */
export declare const FileCreate$outboundSchema: z.ZodType<FileCreate$Outbound, z.ZodTypeDef, FileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FileCreate$ {
    /** @deprecated use `FileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FileCreate$Outbound, z.ZodTypeDef, FileCreate>;
    /** @deprecated use `FileCreate$Outbound` instead. */
    type Outbound = FileCreate$Outbound;
}
export declare function fileCreateToJSON(fileCreate: FileCreate): string;
export declare function fileCreateFromJSON(jsonString: string): SafeParseResult<FileCreate, SDKValidationError>;
//# sourceMappingURL=filecreate.d.ts.map