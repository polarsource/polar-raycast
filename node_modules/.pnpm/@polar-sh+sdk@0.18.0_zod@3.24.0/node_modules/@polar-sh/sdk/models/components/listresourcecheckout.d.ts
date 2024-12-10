import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Checkout, Checkout$Outbound } from "./checkout.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceCheckout = {
    items: Array<Checkout>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceCheckout$inboundSchema: z.ZodType<ListResourceCheckout, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceCheckout$Outbound = {
    items: Array<Checkout$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceCheckout$outboundSchema: z.ZodType<ListResourceCheckout$Outbound, z.ZodTypeDef, ListResourceCheckout>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceCheckout$ {
    /** @deprecated use `ListResourceCheckout$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceCheckout, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceCheckout$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceCheckout$Outbound, z.ZodTypeDef, ListResourceCheckout>;
    /** @deprecated use `ListResourceCheckout$Outbound` instead. */
    type Outbound = ListResourceCheckout$Outbound;
}
export declare function listResourceCheckoutToJSON(listResourceCheckout: ListResourceCheckout): string;
export declare function listResourceCheckoutFromJSON(jsonString: string): SafeParseResult<ListResourceCheckout, SDKValidationError>;
//# sourceMappingURL=listresourcecheckout.d.ts.map