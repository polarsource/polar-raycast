import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldDateProperties = {
    formLabel?: string | undefined;
    formHelpText?: string | undefined;
    formPlaceholder?: string | undefined;
    ge?: number | undefined;
    le?: number | undefined;
};
/** @internal */
export declare const CustomFieldDateProperties$inboundSchema: z.ZodType<CustomFieldDateProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldDateProperties$Outbound = {
    form_label?: string | undefined;
    form_help_text?: string | undefined;
    form_placeholder?: string | undefined;
    ge?: number | undefined;
    le?: number | undefined;
};
/** @internal */
export declare const CustomFieldDateProperties$outboundSchema: z.ZodType<CustomFieldDateProperties$Outbound, z.ZodTypeDef, CustomFieldDateProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldDateProperties$ {
    /** @deprecated use `CustomFieldDateProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldDateProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldDateProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldDateProperties$Outbound, z.ZodTypeDef, CustomFieldDateProperties>;
    /** @deprecated use `CustomFieldDateProperties$Outbound` instead. */
    type Outbound = CustomFieldDateProperties$Outbound;
}
export declare function customFieldDatePropertiesToJSON(customFieldDateProperties: CustomFieldDateProperties): string;
export declare function customFieldDatePropertiesFromJSON(jsonString: string): SafeParseResult<CustomFieldDateProperties, SDKValidationError>;
//# sourceMappingURL=customfielddateproperties.d.ts.map