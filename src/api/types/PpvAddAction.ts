
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPpv } from './KalturaPpv';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PpvAddActionArgs  extends KalturaRequestArgs {
    ppv : KalturaPpv;
}

/**
 * Build request payload for service 'ppv' action 'add'.
 *
 * Usage: Add new ppv
 *
 * Server response type:         KalturaPpv
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PpvAddAction extends KalturaRequest<KalturaPpv> {

    ppv : KalturaPpv;

    constructor(data : PpvAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				ppv : { type : 'o', subTypeConstructor : KalturaPpv, subType : 'KalturaPpv' }
            }
        );
        return result;
    }
}

