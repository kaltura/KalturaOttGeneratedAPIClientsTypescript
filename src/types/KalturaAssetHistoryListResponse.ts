
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetHistory } from './KalturaAssetHistory';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetHistoryListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetHistory[];
}

/** 
* Watch history asset wrapper
**/
export class KalturaAssetHistoryListResponse extends KalturaListResponse {

    objects : KalturaAssetHistory[];

    constructor(data? : KalturaAssetHistoryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetHistoryListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetHistory, subType : 'KalturaAssetHistory' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetHistoryListResponse',KalturaAssetHistoryListResponse);
