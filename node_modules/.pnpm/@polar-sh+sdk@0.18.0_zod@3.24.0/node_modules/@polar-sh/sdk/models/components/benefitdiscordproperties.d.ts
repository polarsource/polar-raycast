import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties for a benefit of type `discord`.
 */
export type BenefitDiscordProperties = {
    /**
     * The ID of the Discord server.
     */
    guildId: string;
    /**
     * The ID of the Discord role to grant.
     */
    roleId: string;
    guildToken: string;
};
/** @internal */
export declare const BenefitDiscordProperties$inboundSchema: z.ZodType<BenefitDiscordProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDiscordProperties$Outbound = {
    guild_id: string;
    role_id: string;
    guild_token: string;
};
/** @internal */
export declare const BenefitDiscordProperties$outboundSchema: z.ZodType<BenefitDiscordProperties$Outbound, z.ZodTypeDef, BenefitDiscordProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDiscordProperties$ {
    /** @deprecated use `BenefitDiscordProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDiscordProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDiscordProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDiscordProperties$Outbound, z.ZodTypeDef, BenefitDiscordProperties>;
    /** @deprecated use `BenefitDiscordProperties$Outbound` instead. */
    type Outbound = BenefitDiscordProperties$Outbound;
}
export declare function benefitDiscordPropertiesToJSON(benefitDiscordProperties: BenefitDiscordProperties): string;
export declare function benefitDiscordPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDiscordProperties, SDKValidationError>;
//# sourceMappingURL=benefitdiscordproperties.d.ts.map