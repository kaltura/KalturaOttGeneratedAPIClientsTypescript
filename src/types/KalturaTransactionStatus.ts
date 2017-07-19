
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionAdapterStatus } from './KalturaTransactionAdapterStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTransactionStatusArgs  extends KalturaObjectBaseArgs {
    adapterTransactionStatus? : KalturaTransactionAdapterStatus;
	externalId? : string;
	externalStatus? : string;
	externalMessage? : string;
	failReason? : number;
}


export class KalturaTransactionStatus extends KalturaObjectBase {

    adapterTransactionStatus : KalturaTransactionAdapterStatus;
	externalId : string;
	externalStatus : string;
	externalMessage : string;
	failReason : number;

    constructor(data? : KalturaTransactionStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransactionStatus' },
				adapterTransactionStatus : { type : 'es', subTypeConstructor : KalturaTransactionAdapterStatus, subType : 'KalturaTransactionAdapterStatus' },
				externalId : { type : 's' },
				externalStatus : { type : 's' },
				externalMessage : { type : 's' },
				failReason : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransactionStatus',KalturaTransactionStatus);
