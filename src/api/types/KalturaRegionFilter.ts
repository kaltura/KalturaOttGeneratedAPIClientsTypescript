
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseRegionFilter, KalturaBaseRegionFilterArgs } from './KalturaBaseRegionFilter';

export interface KalturaRegionFilterArgs  extends KalturaBaseRegionFilterArgs {
    externalIdIn? : string;
	idIn? : string;
	parentIdEqual? : number;
	liveAssetIdEqual? : number;
	parentOnly? : boolean;
	exclusiveLcn? : boolean;
}


export class KalturaRegionFilter extends KalturaBaseRegionFilter {

    externalIdIn : string;
	idIn : string;
	parentIdEqual : number;
	liveAssetIdEqual : number;
	parentOnly : boolean;
	exclusiveLcn : boolean;

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
				liveAssetIdEqual : { type : 'n' },
				parentOnly : { type : 'b' },
				exclusiveLcn : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionFilter',KalturaRegionFilter);
