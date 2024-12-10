import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LicenseKeyActivateConditions = {};
export type LicenseKeyActivateMeta = {};
export type LicenseKeyActivate = {
    key: string;
    organizationId: string;
    label: string;
    conditions?: LicenseKeyActivateConditions | undefined;
    meta?: LicenseKeyActivateMeta | undefined;
};
/** @internal */
export declare const LicenseKeyActivateConditions$inboundSchema: z.ZodType<LicenseKeyActivateConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivateConditions$Outbound = {};
/** @internal */
export declare const LicenseKeyActivateConditions$outboundSchema: z.ZodType<LicenseKeyActivateConditions$Outbound, z.ZodTypeDef, LicenseKeyActivateConditions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivateConditions$ {
    /** @deprecated use `LicenseKeyActivateConditions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivateConditions, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivateConditions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivateConditions$Outbound, z.ZodTypeDef, LicenseKeyActivateConditions>;
    /** @deprecated use `LicenseKeyActivateConditions$Outbound` instead. */
    type Outbound = LicenseKeyActivateConditions$Outbound;
}
export declare function licenseKeyActivateConditionsToJSON(licenseKeyActivateConditions: LicenseKeyActivateConditions): string;
export declare function licenseKeyActivateConditionsFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivateConditions, SDKValidationError>;
/** @internal */
export declare const LicenseKeyActivateMeta$inboundSchema: z.ZodType<LicenseKeyActivateMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivateMeta$Outbound = {};
/** @internal */
export declare const LicenseKeyActivateMeta$outboundSchema: z.ZodType<LicenseKeyActivateMeta$Outbound, z.ZodTypeDef, LicenseKeyActivateMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivateMeta$ {
    /** @deprecated use `LicenseKeyActivateMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivateMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivateMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivateMeta$Outbound, z.ZodTypeDef, LicenseKeyActivateMeta>;
    /** @deprecated use `LicenseKeyActivateMeta$Outbound` instead. */
    type Outbound = LicenseKeyActivateMeta$Outbound;
}
export declare function licenseKeyActivateMetaToJSON(licenseKeyActivateMeta: LicenseKeyActivateMeta): string;
export declare function licenseKeyActivateMetaFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivateMeta, SDKValidationError>;
/** @internal */
export declare const LicenseKeyActivate$inboundSchema: z.ZodType<LicenseKeyActivate, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivate$Outbound = {
    key: string;
    organization_id: string;
    label: string;
    conditions?: LicenseKeyActivateConditions$Outbound | undefined;
    meta?: LicenseKeyActivateMeta$Outbound | undefined;
};
/** @internal */
export declare const LicenseKeyActivate$outboundSchema: z.ZodType<LicenseKeyActivate$Outbound, z.ZodTypeDef, LicenseKeyActivate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivate$ {
    /** @deprecated use `LicenseKeyActivate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivate$Outbound, z.ZodTypeDef, LicenseKeyActivate>;
    /** @deprecated use `LicenseKeyActivate$Outbound` instead. */
    type Outbound = LicenseKeyActivate$Outbound;
}
export declare function licenseKeyActivateToJSON(licenseKeyActivate: LicenseKeyActivate): string;
export declare function licenseKeyActivateFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivate, SDKValidationError>;
//# sourceMappingURL=licensekeyactivate.d.ts.map