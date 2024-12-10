import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrdersGetRequest = {
    /**
     * The order ID.
     */
    id: string;
};
/** @internal */
export declare const OrdersGetRequest$inboundSchema: z.ZodType<OrdersGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrdersGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const OrdersGetRequest$outboundSchema: z.ZodType<OrdersGetRequest$Outbound, z.ZodTypeDef, OrdersGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrdersGetRequest$ {
    /** @deprecated use `OrdersGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrdersGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrdersGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrdersGetRequest$Outbound, z.ZodTypeDef, OrdersGetRequest>;
    /** @deprecated use `OrdersGetRequest$Outbound` instead. */
    type Outbound = OrdersGetRequest$Outbound;
}
export declare function ordersGetRequestToJSON(ordersGetRequest: OrdersGetRequest): string;
export declare function ordersGetRequestFromJSON(jsonString: string): SafeParseResult<OrdersGetRequest, SDKValidationError>;
//# sourceMappingURL=ordersget.d.ts.map