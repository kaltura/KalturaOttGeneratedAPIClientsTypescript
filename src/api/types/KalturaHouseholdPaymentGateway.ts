
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdPaymentGatewaySelectedBy } from './KalturaHouseholdPaymentGatewaySelectedBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdPaymentGatewayArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isDefault? : boolean;
	selectedBy? : KalturaHouseholdPaymentGatewaySelectedBy;
}


export class KalturaHouseholdPaymentGateway extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isDefault : boolean;
	selectedBy : KalturaHouseholdPaymentGatewaySelectedBy;

    constructor(data? : KalturaHouseholdPaymentGatewayArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdPaymentGateway' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isDefault : { type : 'b' },
				selectedBy : { type : 'es', subTypeConstructor : KalturaHouseholdPaymentGatewaySelectedBy, subType : 'KalturaHouseholdPaymentGatewaySelectedBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPaymentGateway',KalturaHouseholdPaymentGateway);
