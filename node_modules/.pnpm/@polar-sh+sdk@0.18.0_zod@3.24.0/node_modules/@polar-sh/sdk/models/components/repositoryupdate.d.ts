import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RepositoryProfileSettingsUpdate, RepositoryProfileSettingsUpdate$Outbound } from "./repositoryprofilesettingsupdate.js";
export type RepositoryUpdate = {
    profileSettings?: RepositoryProfileSettingsUpdate | null | undefined;
};
/** @internal */
export declare const RepositoryUpdate$inboundSchema: z.ZodType<RepositoryUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type RepositoryUpdate$Outbound = {
    profile_settings?: RepositoryProfileSettingsUpdate$Outbound | null | undefined;
};
/** @internal */
export declare const RepositoryUpdate$outboundSchema: z.ZodType<RepositoryUpdate$Outbound, z.ZodTypeDef, RepositoryUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepositoryUpdate$ {
    /** @deprecated use `RepositoryUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RepositoryUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RepositoryUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RepositoryUpdate$Outbound, z.ZodTypeDef, RepositoryUpdate>;
    /** @deprecated use `RepositoryUpdate$Outbound` instead. */
    type Outbound = RepositoryUpdate$Outbound;
}
export declare function repositoryUpdateToJSON(repositoryUpdate: RepositoryUpdate): string;
export declare function repositoryUpdateFromJSON(jsonString: string): SafeParseResult<RepositoryUpdate, SDKValidationError>;
//# sourceMappingURL=repositoryupdate.d.ts.map