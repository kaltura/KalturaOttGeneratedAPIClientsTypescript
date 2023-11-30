
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLineupChannelAsset } from './KalturaLineupChannelAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLineupChannelAssetListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaLineupChannelAsset[];
}


export class KalturaLineupChannelAssetListResponse extends KalturaListResponse {

    objects : KalturaLineupChannelAsset[];

    constructor(data? : KalturaLineupChannelAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaLineupChannelAssetListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaLineupChannelAsset, subType : 'KalturaLineupChannelAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLineupChannelAssetListResponse',KalturaLineupChannelAssetListResponse);
