
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveAsset, KalturaLiveAssetArgs } from './KalturaLiveAsset';

export interface KalturaLineupChannelAssetArgs  extends KalturaLiveAssetArgs {
    lcn? : number;
}


export class KalturaLineupChannelAsset extends KalturaLiveAsset {

    lcn : number;

    constructor(data? : KalturaLineupChannelAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLineupChannelAsset' },
				lcn : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLineupChannelAsset',KalturaLineupChannelAsset);
