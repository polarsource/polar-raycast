import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { LicenseKeyStatus } from "./licensekeystatus.js";
export type LicenseKeyUpdate = {
    status?: LicenseKeyStatus | null | undefined;
    usage?: number | undefined;
    limitActivations?: number | null | undefined;
    limitUsage?: number | null | undefined;
    expiresAt?: Date | null | undefined;
};
/** @internal */
export declare const LicenseKeyUpdate$inboundSchema: z.ZodType<LicenseKeyUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyUpdate$Outbound = {
    status?: string | null | undefined;
    usage: number;
    limit_activations?: number | null | undefined;
    limit_usage?: number | null | undefined;
    expires_at?: string | null | undefined;
};
/** @internal */
export declare const LicenseKeyUpdate$outboundSchema: z.ZodType<LicenseKeyUpdate$Outbound, z.ZodTypeDef, LicenseKeyUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyUpdate$ {
    /** @deprecated use `LicenseKeyUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyUpdate$Outbound, z.ZodTypeDef, LicenseKeyUpdate>;
    /** @deprecated use `LicenseKeyUpdate$Outbound` instead. */
    type Outbound = LicenseKeyUpdate$Outbound;
}
export declare function licenseKeyUpdateToJSON(licenseKeyUpdate: LicenseKeyUpdate): string;
export declare function licenseKeyUpdateFromJSON(jsonString: string): SafeParseResult<LicenseKeyUpdate, SDKValidationError>;
//# sourceMappingURL=licensekeyupdate.d.ts.map