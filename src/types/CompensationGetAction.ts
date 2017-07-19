
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCompensation } from './KalturaCompensation';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CompensationGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get a compensation by identifier
**/
export class CompensationGetAction extends KalturaRequest<KalturaCompensation> {

    id : number;

    constructor(data : CompensationGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCompensation', responseConstructor : KalturaCompensation  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'compensation' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

