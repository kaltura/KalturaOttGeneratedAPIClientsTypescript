
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPersistedFilterArgs  extends KalturaFilterArgs {
    name? : string;
}


export class KalturaPersistedFilter extends KalturaFilter {

    name : string;

    constructor(data? : KalturaPersistedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersistedFilter' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersistedFilter',KalturaPersistedFilter);
