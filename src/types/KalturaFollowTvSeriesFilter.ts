
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaFollowTvSeriesFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaFollowTvSeriesFilter extends KalturaFilter {

    

    constructor(data? : KalturaFollowTvSeriesFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFollowTvSeriesFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFollowTvSeriesFilter',KalturaFollowTvSeriesFilter);
