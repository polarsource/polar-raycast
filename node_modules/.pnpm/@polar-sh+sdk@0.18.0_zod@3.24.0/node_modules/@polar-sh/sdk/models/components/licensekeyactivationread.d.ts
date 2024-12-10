import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { LicenseKeyRead, LicenseKeyRead$Outbound } from "./licensekeyread.js";
export type LicenseKeyActivationReadMeta = {};
export type LicenseKeyActivationRead = {
    id: string;
    licenseKeyId: string;
    label: string;
    meta: LicenseKeyActivationReadMeta;
    createdAt: Date;
    modifiedAt: Date | null;
    licenseKey: LicenseKeyRead;
};
/** @internal */
export declare const LicenseKeyActivationReadMeta$inboundSchema: z.ZodType<LicenseKeyActivationReadMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivationReadMeta$Outbound = {};
/** @internal */
export declare const LicenseKeyActivationReadMeta$outboundSchema: z.ZodType<LicenseKeyActivationReadMeta$Outbound, z.ZodTypeDef, LicenseKeyActivationReadMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivationReadMeta$ {
    /** @deprecated use `LicenseKeyActivationReadMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivationReadMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivationReadMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivationReadMeta$Outbound, z.ZodTypeDef, LicenseKeyActivationReadMeta>;
    /** @deprecated use `LicenseKeyActivationReadMeta$Outbound` instead. */
    type Outbound = LicenseKeyActivationReadMeta$Outbound;
}
export declare function licenseKeyActivationReadMetaToJSON(licenseKeyActivationReadMeta: LicenseKeyActivationReadMeta): string;
export declare function licenseKeyActivationReadMetaFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivationReadMeta, SDKValidationError>;
/** @internal */
export declare const LicenseKeyActivationRead$inboundSchema: z.ZodType<LicenseKeyActivationRead, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivationRead$Outbound = {
    id: string;
    license_key_id: string;
    label: string;
    meta: LicenseKeyActivationReadMeta$Outbound;
    created_at: string;
    modified_at: string | null;
    license_key: LicenseKeyRead$Outbound;
};
/** @internal */
export declare const LicenseKeyActivationRead$outboundSchema: z.ZodType<LicenseKeyActivationRead$Outbound, z.ZodTypeDef, LicenseKeyActivationRead>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivationRead$ {
    /** @deprecated use `LicenseKeyActivationRead$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivationRead, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivationRead$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivationRead$Outbound, z.ZodTypeDef, LicenseKeyActivationRead>;
    /** @deprecated use `LicenseKeyActivationRead$Outbound` instead. */
    type Outbound = LicenseKeyActivationRead$Outbound;
}
export declare function licenseKeyActivationReadToJSON(licenseKeyActivationRead: LicenseKeyActivationRead): string;
export declare function licenseKeyActivationReadFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivationRead, SDKValidationError>;
//# sourceMappingURL=licensekeyactivationread.d.ts.map