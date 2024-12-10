import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const LicenseKeyStatus: {
    readonly Granted: "granted";
    readonly Revoked: "revoked";
    readonly Disabled: "disabled";
};
export type LicenseKeyStatus = ClosedEnum<typeof LicenseKeyStatus>;
/** @internal */
export declare const LicenseKeyStatus$inboundSchema: z.ZodNativeEnum<typeof LicenseKeyStatus>;
/** @internal */
export declare const LicenseKeyStatus$outboundSchema: z.ZodNativeEnum<typeof LicenseKeyStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LicenseKeyStatus$ {
    /** @deprecated use `LicenseKeyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Granted: "granted";
        readonly Revoked: "revoked";
        readonly Disabled: "disabled";
    }>;
    /** @deprecated use `LicenseKeyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Granted: "granted";
        readonly Revoked: "revoked";
        readonly Disabled: "disabled";
    }>;
}
//# sourceMappingURL=licensekeystatus.d.ts.map