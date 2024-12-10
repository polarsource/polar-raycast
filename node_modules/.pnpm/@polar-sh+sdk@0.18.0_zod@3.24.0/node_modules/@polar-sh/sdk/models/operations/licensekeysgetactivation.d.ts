import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LicenseKeysGetActivationRequest = {
    id: string;
    activationId: string;
};
/** @internal */
export declare const LicenseKeysGetActivationRequest$inboundSchema: z.ZodType<LicenseKeysGetActivationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeysGetActivationRequest$Outbound = {
    id: string;
    activation_id: string;
};
/** @internal */
export declare const LicenseKeysGetActivationRequest$outboundSchema: z.ZodType<LicenseKeysGetActivationRequest$Outbound, z.ZodTypeDef, LicenseKeysGetActivationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeysGetActivationRequest$ {
    /** @deprecated use `LicenseKeysGetActivationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeysGetActivationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeysGetActivationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeysGetActivationRequest$Outbound, z.ZodTypeDef, LicenseKeysGetActivationRequest>;
    /** @deprecated use `LicenseKeysGetActivationRequest$Outbound` instead. */
    type Outbound = LicenseKeysGetActivationRequest$Outbound;
}
export declare function licenseKeysGetActivationRequestToJSON(licenseKeysGetActivationRequest: LicenseKeysGetActivationRequest): string;
export declare function licenseKeysGetActivationRequestFromJSON(jsonString: string): SafeParseResult<LicenseKeysGetActivationRequest, SDKValidationError>;
//# sourceMappingURL=licensekeysgetactivation.d.ts.map