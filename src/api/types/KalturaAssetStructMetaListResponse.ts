
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetStructMeta } from './KalturaAssetStructMeta';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetStructMetaListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetStructMeta[];
}


export class KalturaAssetStructMetaListResponse extends KalturaListResponse {

    objects : KalturaAssetStructMeta[];

    constructor(data? : KalturaAssetStructMetaListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetStructMetaListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetStructMeta, subType : 'KalturaAssetStructMeta' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStructMetaListResponse',KalturaAssetStructMetaListResponse);
