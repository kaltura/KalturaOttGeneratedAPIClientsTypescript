
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetPersonalMarkup } from './KalturaAssetPersonalMarkup';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetPersonalMarkupListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetPersonalMarkup[];
}


export class KalturaAssetPersonalMarkupListResponse extends KalturaListResponse {

    objects : KalturaAssetPersonalMarkup[];

    constructor(data? : KalturaAssetPersonalMarkupListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetPersonalMarkupListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetPersonalMarkup, subType : 'KalturaAssetPersonalMarkup' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetPersonalMarkupListResponse',KalturaAssetPersonalMarkupListResponse);
