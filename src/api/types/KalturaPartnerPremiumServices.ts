
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerPremiumService } from './KalturaPartnerPremiumService';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerPremiumServicesArgs  extends KalturaObjectBaseArgs {
    objects? : KalturaPartnerPremiumService[];
}


export class KalturaPartnerPremiumServices extends KalturaObjectBase {

    objects : KalturaPartnerPremiumService[];

    constructor(data? : KalturaPartnerPremiumServicesArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerPremiumServices' },
				objects : { type : 'a', subTypeConstructor : KalturaPartnerPremiumService, subType : 'KalturaPartnerPremiumService' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerPremiumServices',KalturaPartnerPremiumServices);
