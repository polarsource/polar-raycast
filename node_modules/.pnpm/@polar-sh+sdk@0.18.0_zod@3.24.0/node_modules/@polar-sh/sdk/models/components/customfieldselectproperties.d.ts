import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldSelectOption, CustomFieldSelectOption$Outbound } from "./customfieldselectoption.js";
export type CustomFieldSelectProperties = {
    formLabel?: string | undefined;
    formHelpText?: string | undefined;
    formPlaceholder?: string | undefined;
    options: Array<CustomFieldSelectOption>;
};
/** @internal */
export declare const CustomFieldSelectProperties$inboundSchema: z.ZodType<CustomFieldSelectProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldSelectProperties$Outbound = {
    form_label?: string | undefined;
    form_help_text?: string | undefined;
    form_placeholder?: string | undefined;
    options: Array<CustomFieldSelectOption$Outbound>;
};
/** @internal */
export declare const CustomFieldSelectProperties$outboundSchema: z.ZodType<CustomFieldSelectProperties$Outbound, z.ZodTypeDef, CustomFieldSelectProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldSelectProperties$ {
    /** @deprecated use `CustomFieldSelectProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldSelectProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldSelectProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldSelectProperties$Outbound, z.ZodTypeDef, CustomFieldSelectProperties>;
    /** @deprecated use `CustomFieldSelectProperties$Outbound` instead. */
    type Outbound = CustomFieldSelectProperties$Outbound;
}
export declare function customFieldSelectPropertiesToJSON(customFieldSelectProperties: CustomFieldSelectProperties): string;
export declare function customFieldSelectPropertiesFromJSON(jsonString: string): SafeParseResult<CustomFieldSelectProperties, SDKValidationError>;
//# sourceMappingURL=customfieldselectproperties.d.ts.map