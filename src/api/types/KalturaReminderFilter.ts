
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaReminderFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaReminderFilter extends KalturaFilter {

    

    constructor(data? : KalturaReminderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReminderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReminderFilter',KalturaReminderFilter);
