import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BenefitType } from "./benefittype.js";
export type BenefitBase = {
    /**
     * Creation timestamp of the object.
     */
    createdAt: Date;
    /**
     * Last modification timestamp of the object.
     */
    modifiedAt: Date | null;
    /**
     * The ID of the benefit.
     */
    id: string;
    type: BenefitType;
    /**
     * The description of the benefit.
     */
    description: string;
    /**
     * Whether the benefit is selectable when creating a product.
     */
    selectable: boolean;
    /**
     * Whether the benefit is deletable.
     */
    deletable: boolean;
    /**
     * The ID of the organization owning the benefit.
     */
    organizationId: string;
};
/** @internal */
export declare const BenefitBase$inboundSchema: z.ZodType<BenefitBase, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitBase$Outbound = {
    created_at: string;
    modified_at: string | null;
    id: string;
    type: string;
    description: string;
    selectable: boolean;
    deletable: boolean;
    organization_id: string;
};
/** @internal */
export declare const BenefitBase$outboundSchema: z.ZodType<BenefitBase$Outbound, z.ZodTypeDef, BenefitBase>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitBase$ {
    /** @deprecated use `BenefitBase$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitBase, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitBase$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitBase$Outbound, z.ZodTypeDef, BenefitBase>;
    /** @deprecated use `BenefitBase$Outbound` instead. */
    type Outbound = BenefitBase$Outbound;
}
export declare function benefitBaseToJSON(benefitBase: BenefitBase): string;
export declare function benefitBaseFromJSON(jsonString: string): SafeParseResult<BenefitBase, SDKValidationError>;
//# sourceMappingURL=benefitbase.d.ts.map