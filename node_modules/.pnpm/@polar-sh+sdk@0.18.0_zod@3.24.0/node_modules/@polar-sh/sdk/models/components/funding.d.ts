import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CurrencyAmount, CurrencyAmount$Outbound } from "./currencyamount.js";
export type Funding = {
    fundingGoal?: CurrencyAmount | null | undefined;
    /**
     * Sum of pledges to this isuse (including currently open pledges and pledges that have been paid out). Always in USD.
     */
    pledgesSum?: CurrencyAmount | null | undefined;
};
/** @internal */
export declare const Funding$inboundSchema: z.ZodType<Funding, z.ZodTypeDef, unknown>;
/** @internal */
export type Funding$Outbound = {
    funding_goal?: CurrencyAmount$Outbound | null | undefined;
    pledges_sum?: CurrencyAmount$Outbound | null | undefined;
};
/** @internal */
export declare const Funding$outboundSchema: z.ZodType<Funding$Outbound, z.ZodTypeDef, Funding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Funding$ {
    /** @deprecated use `Funding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Funding, z.ZodTypeDef, unknown>;
    /** @deprecated use `Funding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Funding$Outbound, z.ZodTypeDef, Funding>;
    /** @deprecated use `Funding$Outbound` instead. */
    type Outbound = Funding$Outbound;
}
export declare function fundingToJSON(funding: Funding): string;
export declare function fundingFromJSON(jsonString: string): SafeParseResult<Funding, SDKValidationError>;
//# sourceMappingURL=funding.d.ts.map