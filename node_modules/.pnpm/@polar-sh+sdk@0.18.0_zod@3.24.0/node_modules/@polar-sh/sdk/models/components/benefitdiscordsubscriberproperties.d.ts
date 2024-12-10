import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Properties available to subscribers for a benefit of type `discord`.
 */
export type BenefitDiscordSubscriberProperties = {
    /**
     * The ID of the Discord server.
     */
    guildId: string;
};
/** @internal */
export declare const BenefitDiscordSubscriberProperties$inboundSchema: z.ZodType<BenefitDiscordSubscriberProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitDiscordSubscriberProperties$Outbound = {
    guild_id: string;
};
/** @internal */
export declare const BenefitDiscordSubscriberProperties$outboundSchema: z.ZodType<BenefitDiscordSubscriberProperties$Outbound, z.ZodTypeDef, BenefitDiscordSubscriberProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitDiscordSubscriberProperties$ {
    /** @deprecated use `BenefitDiscordSubscriberProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitDiscordSubscriberProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitDiscordSubscriberProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitDiscordSubscriberProperties$Outbound, z.ZodTypeDef, BenefitDiscordSubscriberProperties>;
    /** @deprecated use `BenefitDiscordSubscriberProperties$Outbound` instead. */
    type Outbound = BenefitDiscordSubscriberProperties$Outbound;
}
export declare function benefitDiscordSubscriberPropertiesToJSON(benefitDiscordSubscriberProperties: BenefitDiscordSubscriberProperties): string;
export declare function benefitDiscordSubscriberPropertiesFromJSON(jsonString: string): SafeParseResult<BenefitDiscordSubscriberProperties, SDKValidationError>;
//# sourceMappingURL=benefitdiscordsubscriberproperties.d.ts.map