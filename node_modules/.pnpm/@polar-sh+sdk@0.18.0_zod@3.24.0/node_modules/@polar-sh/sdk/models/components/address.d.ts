import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Address = {
    line1?: string | null | undefined;
    line2?: string | null | undefined;
    postalCode?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    country: string;
};
/** @internal */
export declare const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
/** @internal */
export type Address$Outbound = {
    line1?: string | null | undefined;
    line2?: string | null | undefined;
    postal_code?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    country: string;
};
/** @internal */
export declare const Address$outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Address$ {
    /** @deprecated use `Address$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
    /** @deprecated use `Address$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
    /** @deprecated use `Address$Outbound` instead. */
    type Outbound = Address$Outbound;
}
export declare function addressToJSON(address: Address): string;
export declare function addressFromJSON(jsonString: string): SafeParseResult<Address, SDKValidationError>;
//# sourceMappingURL=address.d.ts.map