import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CurrencyAmount = {
    /**
     * Three letter currency code (eg: USD)
     */
    currency: string;
    /**
     * Amount in the currencies smallest unit (cents if currency is USD)
     */
    amount: number;
};
/** @internal */
export declare const CurrencyAmount$inboundSchema: z.ZodType<CurrencyAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CurrencyAmount$Outbound = {
    currency: string;
    amount: number;
};
/** @internal */
export declare const CurrencyAmount$outboundSchema: z.ZodType<CurrencyAmount$Outbound, z.ZodTypeDef, CurrencyAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CurrencyAmount$ {
    /** @deprecated use `CurrencyAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CurrencyAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CurrencyAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CurrencyAmount$Outbound, z.ZodTypeDef, CurrencyAmount>;
    /** @deprecated use `CurrencyAmount$Outbound` instead. */
    type Outbound = CurrencyAmount$Outbound;
}
export declare function currencyAmountToJSON(currencyAmount: CurrencyAmount): string;
export declare function currencyAmountFromJSON(jsonString: string): SafeParseResult<CurrencyAmount, SDKValidationError>;
//# sourceMappingURL=currencyamount.d.ts.map