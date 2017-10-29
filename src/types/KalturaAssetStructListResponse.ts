
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetStruct } from './KalturaAssetStruct';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetStructListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetStruct[];
}


export class KalturaAssetStructListResponse extends KalturaListResponse {

    objects : KalturaAssetStruct[];

    constructor(data? : KalturaAssetStructListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetStructListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetStruct, subType : 'KalturaAssetStruct' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStructListResponse',KalturaAssetStructListResponse);
