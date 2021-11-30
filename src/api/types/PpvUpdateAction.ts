
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPpv } from './KalturaPpv';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PpvUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	ppv : KalturaPpv;
}

/**
 * Build request payload for service 'ppv' action 'update'.
 *
 * Usage: Update ppv
 *
 * Server response type:         KalturaPpv
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PpvUpdateAction extends KalturaRequest<KalturaPpv> {

    id : number;
	ppv : KalturaPpv;

    constructor(data : PpvUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				ppv : { type : 'o', subTypeConstructor : KalturaPpv, subType : 'KalturaPpv' }
            }
        );
        return result;
    }
}

