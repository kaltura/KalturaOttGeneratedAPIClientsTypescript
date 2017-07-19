
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHousehold } from './KalturaHousehold';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdGetActionArgs  extends KalturaRequestArgs {
    id? : number;
}

/** 
* Returns the household model
**/
export class HouseholdGetAction extends KalturaRequest<KalturaHousehold> {

    id : number;

    constructor(data? : HouseholdGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

