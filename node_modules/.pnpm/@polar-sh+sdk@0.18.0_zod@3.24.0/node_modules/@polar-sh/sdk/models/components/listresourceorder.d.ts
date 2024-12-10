import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Order, Order$Outbound } from "./order.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceOrder = {
    items: Array<Order>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceOrder$inboundSchema: z.ZodType<ListResourceOrder, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceOrder$Outbound = {
    items: Array<Order$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceOrder$outboundSchema: z.ZodType<ListResourceOrder$Outbound, z.ZodTypeDef, ListResourceOrder>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceOrder$ {
    /** @deprecated use `ListResourceOrder$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceOrder, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceOrder$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceOrder$Outbound, z.ZodTypeDef, ListResourceOrder>;
    /** @deprecated use `ListResourceOrder$Outbound` instead. */
    type Outbound = ListResourceOrder$Outbound;
}
export declare function listResourceOrderToJSON(listResourceOrder: ListResourceOrder): string;
export declare function listResourceOrderFromJSON(jsonString: string): SafeParseResult<ListResourceOrder, SDKValidationError>;
//# sourceMappingURL=listresourceorder.d.ts.map