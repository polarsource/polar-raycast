import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Meta = {};
export type LicenseKeyActivationBase = {
    id: string;
    licenseKeyId: string;
    label: string;
    meta: Meta;
    createdAt: Date;
    modifiedAt: Date | null;
};
/** @internal */
export declare const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown>;
/** @internal */
export type Meta$Outbound = {};
/** @internal */
export declare const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Meta$ {
    /** @deprecated use `Meta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown>;
    /** @deprecated use `Meta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta>;
    /** @deprecated use `Meta$Outbound` instead. */
    type Outbound = Meta$Outbound;
}
export declare function metaToJSON(meta: Meta): string;
export declare function metaFromJSON(jsonString: string): SafeParseResult<Meta, SDKValidationError>;
/** @internal */
export declare const LicenseKeyActivationBase$inboundSchema: z.ZodType<LicenseKeyActivationBase, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyActivationBase$Outbound = {
    id: string;
    license_key_id: string;
    label: string;
    meta: Meta$Outbound;
    created_at: string;
    modified_at: string | null;
};
/** @internal */
export declare const LicenseKeyActivationBase$outboundSchema: z.ZodType<LicenseKeyActivationBase$Outbound, z.ZodTypeDef, LicenseKeyActivationBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyActivationBase$ {
    /** @deprecated use `LicenseKeyActivationBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyActivationBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyActivationBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyActivationBase$Outbound, z.ZodTypeDef, LicenseKeyActivationBase>;
    /** @deprecated use `LicenseKeyActivationBase$Outbound` instead. */
    type Outbound = LicenseKeyActivationBase$Outbound;
}
export declare function licenseKeyActivationBaseToJSON(licenseKeyActivationBase: LicenseKeyActivationBase): string;
export declare function licenseKeyActivationBaseFromJSON(jsonString: string): SafeParseResult<LicenseKeyActivationBase, SDKValidationError>;
//# sourceMappingURL=licensekeyactivationbase.d.ts.map