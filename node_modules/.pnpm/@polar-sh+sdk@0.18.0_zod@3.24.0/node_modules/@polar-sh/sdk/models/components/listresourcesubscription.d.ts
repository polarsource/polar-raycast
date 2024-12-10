import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { Subscription, Subscription$Outbound } from "./subscription.js";
export type ListResourceSubscription = {
    items: Array<Subscription>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceSubscription$inboundSchema: z.ZodType<ListResourceSubscription, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceSubscription$Outbound = {
    items: Array<Subscription$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceSubscription$outboundSchema: z.ZodType<ListResourceSubscription$Outbound, z.ZodTypeDef, ListResourceSubscription>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceSubscription$ {
    /** @deprecated use `ListResourceSubscription$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceSubscription, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceSubscription$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceSubscription$Outbound, z.ZodTypeDef, ListResourceSubscription>;
    /** @deprecated use `ListResourceSubscription$Outbound` instead. */
    type Outbound = ListResourceSubscription$Outbound;
}
export declare function listResourceSubscriptionToJSON(listResourceSubscription: ListResourceSubscription): string;
export declare function listResourceSubscriptionFromJSON(jsonString: string): SafeParseResult<ListResourceSubscription, SDKValidationError>;
//# sourceMappingURL=listresourcesubscription.d.ts.map