
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHomeNetwork } from './KalturaHomeNetwork';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HomeNetworkUpdateActionArgs  extends KalturaRequestArgs {
    externalId : string;
	homeNetwork : KalturaHomeNetwork;
}

/**
 * Build request payload for service 'homeNetwork' action 'update'.
 *
 * Usage: Update and existing home network for a household
 *
 * Server response type:         KalturaHomeNetwork
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HomeNetworkUpdateAction extends KalturaRequest<KalturaHomeNetwork> {

    externalId : string;
	homeNetwork : KalturaHomeNetwork;

    constructor(data : HomeNetworkUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				externalId : { type : 's' },
				homeNetwork : { type : 'o', subTypeConstructor : KalturaHomeNetwork, subType : 'KalturaHomeNetwork' }
            }
        );
        return result;
    }
}

