
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFollowTvSeries } from './KalturaFollowTvSeries';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FollowTvSeriesAddActionArgs  extends KalturaRequestArgs {
    followTvSeries : KalturaFollowTvSeries;
}

/** 
* Add a user&#39;s tv series follow.              Possible status codes:
* UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024
**/
export class FollowTvSeriesAddAction extends KalturaRequest<KalturaFollowTvSeries> {

    followTvSeries : KalturaFollowTvSeries;

    constructor(data : FollowTvSeriesAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFollowTvSeries', responseConstructor : KalturaFollowTvSeries  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'followtvseries' },
				action : { type : 'c', default : 'add' },
				followTvSeries : { type : 'o', subTypeConstructor : KalturaFollowTvSeries, subType : 'KalturaFollowTvSeries' }
            }
        );
        return result;
    }
}

