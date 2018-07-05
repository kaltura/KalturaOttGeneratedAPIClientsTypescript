
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaImageTypeFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	ratioIdIn? : string;
}


export class KalturaImageTypeFilter extends KalturaFilter {

    idIn : string;
	ratioIdIn : string;

    constructor(data? : KalturaImageTypeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageTypeFilter' },
				idIn : { type : 's' },
				ratioIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageTypeFilter',KalturaImageTypeFilter);
