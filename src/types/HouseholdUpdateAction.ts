
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHousehold } from './KalturaHousehold';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUpdateActionArgs  extends KalturaRequestArgs {
    household : KalturaHousehold;
}

/** 
* Update the household name and description
**/
export class HouseholdUpdateAction extends KalturaRequest<KalturaHousehold> {

    household : KalturaHousehold;

    constructor(data : HouseholdUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHousehold', responseConstructor : KalturaHousehold  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'update' },
				household : { type : 'o', subTypeConstructor : KalturaHousehold, subType : 'KalturaHousehold' }
            }
        );
        return result;
    }
}

