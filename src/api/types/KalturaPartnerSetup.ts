
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBasePartnerConfiguration } from './KalturaBasePartnerConfiguration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerSetupArgs  extends KalturaObjectBaseArgs {
    adminUsername? : string;
	adminPassword? : string;
	basePartnerConfiguration? : KalturaBasePartnerConfiguration;
}


export class KalturaPartnerSetup extends KalturaObjectBase {

    adminUsername : string;
	adminPassword : string;
	basePartnerConfiguration : KalturaBasePartnerConfiguration;

    constructor(data? : KalturaPartnerSetupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerSetup' },
				adminUsername : { type : 's' },
				adminPassword : { type : 's' },
				basePartnerConfiguration : { type : 'o', subTypeConstructor : KalturaBasePartnerConfiguration, subType : 'KalturaBasePartnerConfiguration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerSetup',KalturaPartnerSetup);
