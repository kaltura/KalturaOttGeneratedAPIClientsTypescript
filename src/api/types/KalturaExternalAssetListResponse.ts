
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset } from './KalturaAsset';
import { KalturaAssetListResponse, KalturaAssetListResponseArgs } from './KalturaAssetListResponse';

export interface KalturaExternalAssetListResponseArgs  extends KalturaAssetListResponseArgs {
    externalQueryId? : string;
	objects? : KalturaAsset[];
}


export class KalturaExternalAssetListResponse extends KalturaAssetListResponse {

    externalQueryId : string;
	objects : KalturaAsset[];

    constructor(data? : KalturaExternalAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaExternalAssetListResponse' },
				externalQueryId : { type : 's' },
				objects : { type : 'a', subTypeConstructor : KalturaAsset, subType : 'KalturaAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalAssetListResponse',KalturaExternalAssetListResponse);
