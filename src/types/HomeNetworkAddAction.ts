
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHomeNetwork } from './KalturaHomeNetwork';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HomeNetworkAddActionArgs  extends KalturaRequestArgs {
    homeNetwork : KalturaHomeNetwork;
}

/** 
* Add a new home network to a household
**/
export class HomeNetworkAddAction extends KalturaRequest<KalturaHomeNetwork> {

    homeNetwork : KalturaHomeNetwork;

    constructor(data : HomeNetworkAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHomeNetwork', responseConstructor : KalturaHomeNetwork  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'homenetwork' },
				action : { type : 'c', default : 'add' },
				homeNetwork : { type : 'o', subTypeConstructor : KalturaHomeNetwork, subType : 'KalturaHomeNetwork' }
            }
        );
        return result;
    }
}

