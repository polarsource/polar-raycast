import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CustomFieldsDeleteRequest = {
    /**
     * The custom field ID.
     */
    id: string;
};
/** @internal */
export declare const CustomFieldsDeleteRequest$inboundSchema: z.ZodType<CustomFieldsDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomFieldsDeleteRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const CustomFieldsDeleteRequest$outboundSchema: z.ZodType<CustomFieldsDeleteRequest$Outbound, z.ZodTypeDef, CustomFieldsDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomFieldsDeleteRequest$ {
    /** @deprecated use `CustomFieldsDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomFieldsDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomFieldsDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomFieldsDeleteRequest$Outbound, z.ZodTypeDef, CustomFieldsDeleteRequest>;
    /** @deprecated use `CustomFieldsDeleteRequest$Outbound` instead. */
    type Outbound = CustomFieldsDeleteRequest$Outbound;
}
export declare function customFieldsDeleteRequestToJSON(customFieldsDeleteRequest: CustomFieldsDeleteRequest): string;
export declare function customFieldsDeleteRequestFromJSON(jsonString: string): SafeParseResult<CustomFieldsDeleteRequest, SDKValidationError>;
//# sourceMappingURL=customfieldsdelete.d.ts.map