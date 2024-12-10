import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties to create a benefit of type `discord`.
 */
export type BenefitDiscordCreateProperties = {
    guildToken: string;
    /**
     * The ID of the Discord role to grant.
     */
    roleId: string;
};
/** @internal */
export declare const BenefitDiscordCreateProperties$inboundSchema: z.ZodType<BenefitDiscordCreateProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDiscordCreateProperties$Outbound = {
    guild_token: string;
    role_id: string;
};
/** @internal */
export declare const BenefitDiscordCreateProperties$outboundSchema: z.ZodType<BenefitDiscordCreateProperties$Outbound, z.ZodTypeDef, BenefitDiscordCreateProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDiscordCreateProperties$ {
    /** @deprecated use `BenefitDiscordCreateProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDiscordCreateProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDiscordCreateProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDiscordCreateProperties$Outbound, z.ZodTypeDef, BenefitDiscordCreateProperties>;
    /** @deprecated use `BenefitDiscordCreateProperties$Outbound` instead. */
    type Outbound = BenefitDiscordCreateProperties$Outbound;
}
export declare function benefitDiscordCreatePropertiesToJSON(benefitDiscordCreateProperties: BenefitDiscordCreateProperties): string;
export declare function benefitDiscordCreatePropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDiscordCreateProperties, SDKValidationError>;
//# sourceMappingURL=benefitdiscordcreateproperties.d.ts.map