import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { LicenseKeyRead, LicenseKeyRead$Outbound } from "./licensekeyread.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceLicenseKeyRead = {
    items: Array<LicenseKeyRead>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceLicenseKeyRead$inboundSchema: z.ZodType<ListResourceLicenseKeyRead, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceLicenseKeyRead$Outbound = {
    items: Array<LicenseKeyRead$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceLicenseKeyRead$outboundSchema: z.ZodType<ListResourceLicenseKeyRead$Outbound, z.ZodTypeDef, ListResourceLicenseKeyRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceLicenseKeyRead$ {
    /** @deprecated use `ListResourceLicenseKeyRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceLicenseKeyRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceLicenseKeyRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceLicenseKeyRead$Outbound, z.ZodTypeDef, ListResourceLicenseKeyRead>;
    /** @deprecated use `ListResourceLicenseKeyRead$Outbound` instead. */
    type Outbound = ListResourceLicenseKeyRead$Outbound;
}
export declare function listResourceLicenseKeyReadToJSON(listResourceLicenseKeyRead: ListResourceLicenseKeyRead): string;
export declare function listResourceLicenseKeyReadFromJSON(jsonString: string): SafeParseResult<ListResourceLicenseKeyRead, SDKValidationError>;
//# sourceMappingURL=listresourcelicensekeyread.d.ts.map