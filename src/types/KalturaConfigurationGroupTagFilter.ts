
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaConfigurationGroupTagFilterArgs  extends KalturaFilterArgs {
    configurationGroupIdEqual? : string;
}

/** 
* Configuration group tag filter
**/
export class KalturaConfigurationGroupTagFilter extends KalturaFilter {

    configurationGroupIdEqual : string;

    constructor(data? : KalturaConfigurationGroupTagFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroupTagFilter' },
				configurationGroupIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupTagFilter',KalturaConfigurationGroupTagFilter);
