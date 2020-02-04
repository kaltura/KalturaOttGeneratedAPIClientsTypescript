
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBookmarkActionType } from './KalturaBookmarkActionType';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaEventObject, KalturaEventObjectArgs } from './KalturaEventObject';

export interface KalturaBookmarkEventArgs  extends KalturaEventObjectArgs {
    userId? : number;
	householdId? : number;
	assetId? : number;
	fileId? : number;
	position? : number;
	action? : KalturaBookmarkActionType;
	productType? : KalturaTransactionType;
	productId? : number;
}


export class KalturaBookmarkEvent extends KalturaEventObject {

    userId : number;
	householdId : number;
	assetId : number;
	fileId : number;
	position : number;
	action : KalturaBookmarkActionType;
	productType : KalturaTransactionType;
	productId : number;

    constructor(data? : KalturaBookmarkEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBookmarkEvent' },
				userId : { type : 'n' },
				householdId : { type : 'n' },
				assetId : { type : 'n' },
				fileId : { type : 'n' },
				position : { type : 'n' },
				action : { type : 'es', subTypeConstructor : KalturaBookmarkActionType, subType : 'KalturaBookmarkActionType' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				productId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBookmarkEvent',KalturaBookmarkEvent);
