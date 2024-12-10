import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Benefit, Benefit$Outbound } from "./benefit.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceBenefit = {
    items: Array<Benefit>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceBenefit$inboundSchema: z.ZodType<ListResourceBenefit, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceBenefit$Outbound = {
    items: Array<Benefit$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceBenefit$outboundSchema: z.ZodType<ListResourceBenefit$Outbound, z.ZodTypeDef, ListResourceBenefit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceBenefit$ {
    /** @deprecated use `ListResourceBenefit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceBenefit, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceBenefit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceBenefit$Outbound, z.ZodTypeDef, ListResourceBenefit>;
    /** @deprecated use `ListResourceBenefit$Outbound` instead. */
    type Outbound = ListResourceBenefit$Outbound;
}
export declare function listResourceBenefitToJSON(listResourceBenefit: ListResourceBenefit): string;
export declare function listResourceBenefitFromJSON(jsonString: string): SafeParseResult<ListResourceBenefit, SDKValidationError>;
//# sourceMappingURL=listresourcebenefit.d.ts.map