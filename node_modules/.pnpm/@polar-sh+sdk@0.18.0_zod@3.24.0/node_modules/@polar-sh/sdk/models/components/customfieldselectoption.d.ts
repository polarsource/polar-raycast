import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldSelectOption = {
    value: string;
    label: string;
};
/** @internal */
export declare const CustomFieldSelectOption$inboundSchema: z.ZodType<CustomFieldSelectOption, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldSelectOption$Outbound = {
    value: string;
    label: string;
};
/** @internal */
export declare const CustomFieldSelectOption$outboundSchema: z.ZodType<CustomFieldSelectOption$Outbound, z.ZodTypeDef, CustomFieldSelectOption>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldSelectOption$ {
    /** @deprecated use `CustomFieldSelectOption$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldSelectOption, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldSelectOption$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldSelectOption$Outbound, z.ZodTypeDef, CustomFieldSelectOption>;
    /** @deprecated use `CustomFieldSelectOption$Outbound` instead. */
    type Outbound = CustomFieldSelectOption$Outbound;
}
export declare function customFieldSelectOptionToJSON(customFieldSelectOption: CustomFieldSelectOption): string;
export declare function customFieldSelectOptionFromJSON(jsonString: string): SafeParseResult<CustomFieldSelectOption, SDKValidationError>;
//# sourceMappingURL=customfieldselectoption.d.ts.map