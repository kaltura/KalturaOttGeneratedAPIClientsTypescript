
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserAssetsListItemType } from './KalturaUserAssetsListItemType';
import { KalturaUserAssetsListType } from './KalturaUserAssetsListType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserAssetsListItemArgs  extends KalturaObjectBaseArgs {
    id? : string;
	orderIndex? : number;
	type? : KalturaUserAssetsListItemType;
	listType? : KalturaUserAssetsListType;
}

/** 
* An item of user asset list
**/
export class KalturaUserAssetsListItem extends KalturaObjectBase {

    id : string;
	orderIndex : number;
	type : KalturaUserAssetsListItemType;
	readonly userId : string;
	listType : KalturaUserAssetsListType;

    constructor(data? : KalturaUserAssetsListItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAssetsListItem' },
				id : { type : 's' },
				orderIndex : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaUserAssetsListItemType, subType : 'KalturaUserAssetsListItemType' },
				userId : { type : 's', readOnly : true },
				listType : { type : 'es', subTypeConstructor : KalturaUserAssetsListType, subType : 'KalturaUserAssetsListType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAssetsListItem',KalturaUserAssetsListItem);
