
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPpv } from './KalturaPpv';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PpvGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Returns ppv object by internal identifier
**/
export class PpvGetAction extends KalturaRequest<KalturaPpv> {

    id : number;

    constructor(data : PpvGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPpv', responseConstructor : KalturaPpv  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ppv' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

