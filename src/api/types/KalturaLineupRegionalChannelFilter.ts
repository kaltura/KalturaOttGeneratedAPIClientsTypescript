
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaLineupRegionalChannelFilterArgs  extends KalturaFilterArgs {
    regionIdEqual? : number;
	parentRegionIncluded? : boolean;
	kSql? : string;
	lcnGreaterThanOrEqual? : number;
	lcnLessThanOrEqual? : number;
}


export class KalturaLineupRegionalChannelFilter extends KalturaFilter {

    regionIdEqual : number;
	parentRegionIncluded : boolean;
	kSql : string;
	lcnGreaterThanOrEqual : number;
	lcnLessThanOrEqual : number;

    constructor(data? : KalturaLineupRegionalChannelFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLineupRegionalChannelFilter' },
				regionIdEqual : { type : 'n' },
				parentRegionIncluded : { type : 'b' },
				kSql : { type : 's' },
				lcnGreaterThanOrEqual : { type : 'n' },
				lcnLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLineupRegionalChannelFilter',KalturaLineupRegionalChannelFilter);
