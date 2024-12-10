import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Issue, Issue$Outbound } from "./issue.js";
import { Pledger, Pledger$Outbound } from "./pledger.js";
import { PledgeState } from "./pledgestate.js";
import { PledgeType } from "./pledgetype.js";
export type Pledge = {
    /**
     * Creation timestamp of the object.
     */
    createdAt: Date;
    /**
     * Last modification timestamp of the object.
     */
    modifiedAt: Date | null;
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Amount pledged towards the issue
     */
    amount: number;
    currency: string;
    state: PledgeState;
    type: PledgeType;
    /**
     * If and when the pledge was refunded to the pledger
     */
    refundedAt?: Date | null | undefined;
    /**
     * When the payout is scheduled to be made to the maintainers behind the issue. Disputes must be made before this date.
     */
    scheduledPayoutAt?: Date | null | undefined;
    issue: Issue;
    /**
     * The user or organization that made this pledge
     */
    pledger?: Pledger | null | undefined;
    /**
     * URL of invoice for this pledge
     */
    hostedInvoiceUrl?: string | null | undefined;
    /**
     * If the currently authenticated subject can perform admin actions on behalf of the maker of the peldge
     */
    authedCanAdminSender?: boolean | undefined;
    /**
     * If the currently authenticated subject can perform admin actions on behalf of the receiver of the peldge
     */
    authedCanAdminReceived?: boolean | undefined;
    /**
     * For pledges made by an organization, or on behalf of an organization. This is the user that made the pledge. Only visible for members of said organization.
     */
    createdBy?: Pledger | null | undefined;
};
/** @internal */
export declare const Pledge$inboundSchema: z.ZodType<Pledge, z.ZodTypeDef, unknown>;
/** @internal */
export type Pledge$Outbound = {
    created_at: string;
    modified_at: string | null;
    id: string;
    amount: number;
    currency: string;
    state: string;
    type: string;
    refunded_at?: string | null | undefined;
    scheduled_payout_at?: string | null | undefined;
    issue: Issue$Outbound;
    pledger?: Pledger$Outbound | null | undefined;
    hosted_invoice_url?: string | null | undefined;
    authed_can_admin_sender: boolean;
    authed_can_admin_received: boolean;
    created_by?: Pledger$Outbound | null | undefined;
};
/** @internal */
export declare const Pledge$outboundSchema: z.ZodType<Pledge$Outbound, z.ZodTypeDef, Pledge>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Pledge$ {
    /** @deprecated use `Pledge$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Pledge, z.ZodTypeDef, unknown>;
    /** @deprecated use `Pledge$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Pledge$Outbound, z.ZodTypeDef, Pledge>;
    /** @deprecated use `Pledge$Outbound` instead. */
    type Outbound = Pledge$Outbound;
}
export declare function pledgeToJSON(pledge: Pledge): string;
export declare function pledgeFromJSON(jsonString: string): SafeParseResult<Pledge, SDKValidationError>;
//# sourceMappingURL=pledge.d.ts.map