
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHomeNetworkListResponse } from './KalturaHomeNetworkListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HomeNetworkListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve the household’s home networks
**/
export class HomeNetworkListAction extends KalturaRequest<KalturaHomeNetworkListResponse> {

    

    constructor(data? : HomeNetworkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHomeNetworkListResponse', responseConstructor : KalturaHomeNetworkListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'homenetwork' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

