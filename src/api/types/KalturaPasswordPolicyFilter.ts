
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaPasswordPolicyFilterArgs  extends KalturaCrudFilterArgs {
    userRoleIdIn? : string;
}


export class KalturaPasswordPolicyFilter extends KalturaCrudFilter {

    userRoleIdIn : string;

    constructor(data? : KalturaPasswordPolicyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPasswordPolicyFilter' },
				userRoleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPasswordPolicyFilter',KalturaPasswordPolicyFilter);
