import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LicenseKeysGetRequest = {
    id: string;
};
/** @internal */
export declare const LicenseKeysGetRequest$inboundSchema: z.ZodType<LicenseKeysGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LicenseKeysGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const LicenseKeysGetRequest$outboundSchema: z.ZodType<LicenseKeysGetRequest$Outbound, z.ZodTypeDef, LicenseKeysGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeysGetRequest$ {
    /** @deprecated use `LicenseKeysGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LicenseKeysGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LicenseKeysGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LicenseKeysGetRequest$Outbound, z.ZodTypeDef, LicenseKeysGetRequest>;
    /** @deprecated use `LicenseKeysGetRequest$Outbound` instead. */
    type Outbound = LicenseKeysGetRequest$Outbound;
}
export declare function licenseKeysGetRequestToJSON(licenseKeysGetRequest: LicenseKeysGetRequest): string;
export declare function licenseKeysGetRequestFromJSON(jsonString: string): SafeParseResult<LicenseKeysGetRequest, SDKValidationError>;
//# sourceMappingURL=licensekeysget.d.ts.map