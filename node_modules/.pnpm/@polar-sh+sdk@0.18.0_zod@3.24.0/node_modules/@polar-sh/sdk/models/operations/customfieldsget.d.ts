import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldsGetRequest = {
    /**
     * The custom field ID.
     */
    id: string;
};
/** @internal */
export declare const CustomFieldsGetRequest$inboundSchema: z.ZodType<CustomFieldsGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldsGetRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const CustomFieldsGetRequest$outboundSchema: z.ZodType<CustomFieldsGetRequest$Outbound, z.ZodTypeDef, CustomFieldsGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldsGetRequest$ {
    /** @deprecated use `CustomFieldsGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldsGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldsGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldsGetRequest$Outbound, z.ZodTypeDef, CustomFieldsGetRequest>;
    /** @deprecated use `CustomFieldsGetRequest$Outbound` instead. */
    type Outbound = CustomFieldsGetRequest$Outbound;
}
export declare function customFieldsGetRequestToJSON(customFieldsGetRequest: CustomFieldsGetRequest): string;
export declare function customFieldsGetRequestFromJSON(jsonString: string): SafeParseResult<CustomFieldsGetRequest, SDKValidationError>;
//# sourceMappingURL=customfieldsget.d.ts.map