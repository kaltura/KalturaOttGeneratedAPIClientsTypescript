
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReminderFilter, KalturaReminderFilterArgs } from './KalturaReminderFilter';

export interface KalturaAssetReminderFilterArgs  extends KalturaReminderFilterArgs {
    kSql? : string;
}


export class KalturaAssetReminderFilter extends KalturaReminderFilter {

    kSql : string;

    constructor(data? : KalturaAssetReminderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetReminderFilter' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetReminderFilter',KalturaAssetReminderFilter);
