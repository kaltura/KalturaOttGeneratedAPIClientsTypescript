
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBookmarkEventThresholdArgs  extends KalturaObjectBaseArgs {
    transactionType? : KalturaTransactionType;
	threshold? : number;
}


export class KalturaBookmarkEventThreshold extends KalturaObjectBase {

    transactionType : KalturaTransactionType;
	threshold : number;

    constructor(data? : KalturaBookmarkEventThresholdArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBookmarkEventThreshold' },
				transactionType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				threshold : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBookmarkEventThreshold',KalturaBookmarkEventThreshold);
