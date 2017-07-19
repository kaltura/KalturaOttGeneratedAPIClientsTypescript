
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetsCount } from './KalturaAssetsCount';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetCountListResponseArgs  extends KalturaListResponseArgs {
    assetsCount? : number;
	objects? : KalturaAssetsCount[];
}

/** 
* Asset counts wrapper - represents a group
**/
export class KalturaAssetCountListResponse extends KalturaListResponse {

    assetsCount : number;
	objects : KalturaAssetsCount[];

    constructor(data? : KalturaAssetCountListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetCountListResponse' },
				assetsCount : { type : 'n' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetsCount, subType : 'KalturaAssetsCount' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetCountListResponse',KalturaAssetCountListResponse);
