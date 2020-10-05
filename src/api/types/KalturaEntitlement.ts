
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPaymentMethodType } from './KalturaPaymentMethodType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntitlementArgs  extends KalturaObjectBaseArgs {
    endDate? : number;
	isPending? : boolean;
}


export class KalturaEntitlement extends KalturaObjectBase {

    readonly id : number;
	readonly productId : string;
	readonly currentUses : number;
	endDate : number;
	readonly currentDate : number;
	readonly lastViewDate : number;
	readonly purchaseDate : number;
	readonly paymentMethod : KalturaPaymentMethodType;
	readonly deviceUdid : string;
	readonly deviceName : string;
	readonly isCancelationWindowEnabled : boolean;
	readonly maxUses : number;
	readonly userId : string;
	readonly householdId : number;
	isPending : boolean;

    constructor(data? : KalturaEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlement' },
				id : { type : 'n', readOnly : true },
				productId : { type : 's', readOnly : true },
				currentUses : { type : 'n', readOnly : true },
				endDate : { type : 'n' },
				currentDate : { type : 'n', readOnly : true },
				lastViewDate : { type : 'n', readOnly : true },
				purchaseDate : { type : 'n', readOnly : true },
				paymentMethod : { type : 'es', readOnly : true, subTypeConstructor : KalturaPaymentMethodType, subType : 'KalturaPaymentMethodType' },
				deviceUdid : { type : 's', readOnly : true },
				deviceName : { type : 's', readOnly : true },
				isCancelationWindowEnabled : { type : 'b', readOnly : true },
				maxUses : { type : 'n', readOnly : true },
				userId : { type : 's', readOnly : true },
				householdId : { type : 'n', readOnly : true },
				isPending : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlement',KalturaEntitlement);
