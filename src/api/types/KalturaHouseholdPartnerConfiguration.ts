
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    retentionPeriodDays? : number;
}


export class KalturaHouseholdPartnerConfiguration extends KalturaObjectBase {

    retentionPeriodDays : number;

    constructor(data? : KalturaHouseholdPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdPartnerConfiguration' },
				retentionPeriodDays : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPartnerConfiguration',KalturaHouseholdPartnerConfiguration);
