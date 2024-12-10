import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BenefitGrant, BenefitGrant$Outbound } from "./benefitgrant.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
export type ListResourceBenefitGrant = {
    items: Array<BenefitGrant>;
    pagination: Pagination;
};
/** @internal */
export declare const ListResourceBenefitGrant$inboundSchema: z.ZodType<ListResourceBenefitGrant, z.ZodTypeDef, unknown>;
/** @internal */
export type ListResourceBenefitGrant$Outbound = {
    items: Array<BenefitGrant$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListResourceBenefitGrant$outboundSchema: z.ZodType<ListResourceBenefitGrant$Outbound, z.ZodTypeDef, ListResourceBenefitGrant>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListResourceBenefitGrant$ {
    /** @deprecated use `ListResourceBenefitGrant$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListResourceBenefitGrant, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListResourceBenefitGrant$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListResourceBenefitGrant$Outbound, z.ZodTypeDef, ListResourceBenefitGrant>;
    /** @deprecated use `ListResourceBenefitGrant$Outbound` instead. */
    type Outbound = ListResourceBenefitGrant$Outbound;
}
export declare function listResourceBenefitGrantToJSON(listResourceBenefitGrant: ListResourceBenefitGrant): string;
export declare function listResourceBenefitGrantFromJSON(jsonString: string): SafeParseResult<ListResourceBenefitGrant, SDKValidationError>;
//# sourceMappingURL=listresourcebenefitgrant.d.ts.map