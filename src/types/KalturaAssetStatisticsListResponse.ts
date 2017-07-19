
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetStatistics } from './KalturaAssetStatistics';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetStatisticsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetStatistics[];
}

/** 
* List of assets statistics
**/
export class KalturaAssetStatisticsListResponse extends KalturaListResponse {

    objects : KalturaAssetStatistics[];

    constructor(data? : KalturaAssetStatisticsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetStatisticsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetStatistics, subType : 'KalturaAssetStatistics' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStatisticsListResponse',KalturaAssetStatisticsListResponse);
