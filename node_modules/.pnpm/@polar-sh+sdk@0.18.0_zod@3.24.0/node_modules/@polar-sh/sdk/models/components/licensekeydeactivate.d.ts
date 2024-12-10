import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LicenseKeyDeactivate = {
    key: string;
    organizationId: string;
    activationId: string;
};
/** @internal */
export declare const LicenseKeyDeactivate$inboundSchema: z.ZodType<LicenseKeyDeactivate, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeyDeactivate$Outbound = {
    key: string;
    organization_id: string;
    activation_id: string;
};
/** @internal */
export declare const LicenseKeyDeactivate$outboundSchema: z.ZodType<LicenseKeyDeactivate$Outbound, z.ZodTypeDef, LicenseKeyDeactivate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyDeactivate$ {
    /** @deprecated use `LicenseKeyDeactivate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeyDeactivate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeyDeactivate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeyDeactivate$Outbound, z.ZodTypeDef, LicenseKeyDeactivate>;
    /** @deprecated use `LicenseKeyDeactivate$Outbound` instead. */
    type Outbound = LicenseKeyDeactivate$Outbound;
}
export declare function licenseKeyDeactivateToJSON(licenseKeyDeactivate: LicenseKeyDeactivate): string;
export declare function licenseKeyDeactivateFromJSON(jsonString: string): SafeParseResult<LicenseKeyDeactivate, SDKValidationError>;
//# sourceMappingURL=licensekeydeactivate.d.ts.map