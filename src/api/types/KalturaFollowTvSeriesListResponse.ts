
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFollowTvSeries } from './KalturaFollowTvSeries';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFollowTvSeriesListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaFollowTvSeries[];
}


export class KalturaFollowTvSeriesListResponse extends KalturaListResponse {

    objects : KalturaFollowTvSeries[];

    constructor(data? : KalturaFollowTvSeriesListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFollowTvSeriesListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaFollowTvSeries, subType : 'KalturaFollowTvSeries' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFollowTvSeriesListResponse',KalturaFollowTvSeriesListResponse);
