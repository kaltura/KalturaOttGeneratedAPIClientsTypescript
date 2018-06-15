
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPurchaseBaseArgs  extends KalturaObjectBaseArgs {
    productId? : number;
	contentId? : number;
	productType? : KalturaTransactionType;
}


export class KalturaPurchaseBase extends KalturaObjectBase {

    productId : number;
	contentId : number;
	productType : KalturaTransactionType;

    constructor(data? : KalturaPurchaseBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPurchaseBase' },
				productId : { type : 'n' },
				contentId : { type : 'n' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPurchaseBase',KalturaPurchaseBase);
