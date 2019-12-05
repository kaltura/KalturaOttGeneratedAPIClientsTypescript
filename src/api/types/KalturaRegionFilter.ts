
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRegionFilterArgs  extends KalturaFilterArgs {
    externalIdIn? : string;
	idIn? : string;
	parentIdEqual? : number;
	liveAssetIdEqual? : number;
}


export class KalturaRegionFilter extends KalturaFilter {

    externalIdIn : string;
	idIn : string;
	parentIdEqual : number;
	liveAssetIdEqual : number;

    constructor(data? : KalturaRegionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionFilter' },
				externalIdIn : { type : 's' },
				idIn : { type : 's' },
				parentIdEqual : { type : 'n' },
				liveAssetIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionFilter',KalturaRegionFilter);
