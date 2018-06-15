
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTransactionArgs  extends KalturaObjectBaseArgs {
    id? : string;
	paymentGatewayReferenceId? : string;
	paymentGatewayResponseId? : string;
	state? : string;
	failReasonCode? : number;
	createdAt? : number;
}


export class KalturaTransaction extends KalturaObjectBase {

    id : string;
	paymentGatewayReferenceId : string;
	paymentGatewayResponseId : string;
	state : string;
	failReasonCode : number;
	createdAt : number;

    constructor(data? : KalturaTransactionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransaction' },
				id : { type : 's' },
				paymentGatewayReferenceId : { type : 's' },
				paymentGatewayResponseId : { type : 's' },
				state : { type : 's' },
				failReasonCode : { type : 'n' },
				createdAt : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransaction',KalturaTransaction);
