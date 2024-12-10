import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomFieldUpdateCheckbox, CustomFieldUpdateCheckbox$Outbound } from "./customfieldupdatecheckbox.js";
import { CustomFieldUpdateDate, CustomFieldUpdateDate$Outbound } from "./customfieldupdatedate.js";
import { CustomFieldUpdateNumber, CustomFieldUpdateNumber$Outbound } from "./customfieldupdatenumber.js";
import { CustomFieldUpdateSelect, CustomFieldUpdateSelect$Outbound } from "./customfieldupdateselect.js";
import { CustomFieldUpdateText, CustomFieldUpdateText$Outbound } from "./customfieldupdatetext.js";
export type CustomFieldUpdate = (CustomFieldUpdateCheckbox & {
    type: "checkbox";
}) | (CustomFieldUpdateDate & {
    type: "date";
}) | (CustomFieldUpdateNumber & {
    type: "number";
}) | (CustomFieldUpdateSelect & {
    type: "select";
}) | (CustomFieldUpdateText & {
    type: "text";
});
/** @internal */
export declare const CustomFieldUpdate$inboundSchema: z.ZodType<CustomFieldUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldUpdate$Outbound = (CustomFieldUpdateCheckbox$Outbound & {
    type: "checkbox";
}) | (CustomFieldUpdateDate$Outbound & {
    type: "date";
}) | (CustomFieldUpdateNumber$Outbound & {
    type: "number";
}) | (CustomFieldUpdateSelect$Outbound & {
    type: "select";
}) | (CustomFieldUpdateText$Outbound & {
    type: "text";
});
/** @internal */
export declare const CustomFieldUpdate$outboundSchema: z.ZodType<CustomFieldUpdate$Outbound, z.ZodTypeDef, CustomFieldUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldUpdate$ {
    /** @deprecated use `CustomFieldUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldUpdate$Outbound, z.ZodTypeDef, CustomFieldUpdate>;
    /** @deprecated use `CustomFieldUpdate$Outbound` instead. */
    type Outbound = CustomFieldUpdate$Outbound;
}
export declare function customFieldUpdateToJSON(customFieldUpdate: CustomFieldUpdate): string;
export declare function customFieldUpdateFromJSON(jsonString: string): SafeParseResult<CustomFieldUpdate, SDKValidationError>;
//# sourceMappingURL=customfieldupdate.d.ts.map