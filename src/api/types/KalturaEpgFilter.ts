
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEpgFilterArgs  extends KalturaFilterArgs {
    dateEqual? : number;
	liveAssetIdEqual? : number;
}


export class KalturaEpgFilter extends KalturaFilter {

    dateEqual : number;
	liveAssetIdEqual : number;

    constructor(data? : KalturaEpgFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpgFilter' },
				dateEqual : { type : 'n' },
				liveAssetIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpgFilter',KalturaEpgFilter);
