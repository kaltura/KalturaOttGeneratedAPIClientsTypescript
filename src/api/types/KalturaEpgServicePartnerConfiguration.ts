
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEpgServicePartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    numberOfSlots? : number;
	firstSlotOffset? : number;
}


export class KalturaEpgServicePartnerConfiguration extends KalturaObjectBase {

    numberOfSlots : number;
	firstSlotOffset : number;

    constructor(data? : KalturaEpgServicePartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpgServicePartnerConfiguration' },
				numberOfSlots : { type : 'n' },
				firstSlotOffset : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpgServicePartnerConfiguration',KalturaEpgServicePartnerConfiguration);
