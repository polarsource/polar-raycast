import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Discount, Discount$Outbound } from "./discount.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceDiscount = {
    items: Array<Discount>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceDiscount$inboundSchema: z.ZodType<ListResourceDiscount, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceDiscount$Outbound = {
    items: Array<Discount$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceDiscount$outboundSchema: z.ZodType<ListResourceDiscount$Outbound, z.ZodTypeDef, ListResourceDiscount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceDiscount$ {
    /** @deprecated use `ListResourceDiscount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceDiscount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceDiscount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceDiscount$Outbound, z.ZodTypeDef, ListResourceDiscount>;
    /** @deprecated use `ListResourceDiscount$Outbound` instead. */
    type Outbound = ListResourceDiscount$Outbound;
}
export declare function listResourceDiscountToJSON(listResourceDiscount: ListResourceDiscount): string;
export declare function listResourceDiscountFromJSON(jsonString: string): SafeParseResult<ListResourceDiscount, SDKValidationError>;
//# sourceMappingURL=listresourcediscount.d.ts.map