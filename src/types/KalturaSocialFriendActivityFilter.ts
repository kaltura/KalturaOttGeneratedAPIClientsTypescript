
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSocialFriendActivityFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	assetTypeEqual? : KalturaAssetType;
	actionTypeIn? : string;
}


export class KalturaSocialFriendActivityFilter extends KalturaFilter {

    assetIdEqual : number;
	assetTypeEqual : KalturaAssetType;
	actionTypeIn : string;

    constructor(data? : KalturaSocialFriendActivityFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialFriendActivityFilter' },
				assetIdEqual : { type : 'n' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				actionTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialFriendActivityFilter',KalturaSocialFriendActivityFilter);
