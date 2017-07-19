
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdPremiumService } from './KalturaHouseholdPremiumService';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdPremiumServiceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdPremiumService[];
}

/** 
* Premium services list
**/
export class KalturaHouseholdPremiumServiceListResponse extends KalturaListResponse {

    objects : KalturaHouseholdPremiumService[];

    constructor(data? : KalturaHouseholdPremiumServiceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdPremiumServiceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdPremiumService, subType : 'KalturaHouseholdPremiumService' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPremiumServiceListResponse',KalturaHouseholdPremiumServiceListResponse);
