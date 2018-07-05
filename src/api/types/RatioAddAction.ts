
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRatio } from './KalturaRatio';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatioAddActionArgs  extends KalturaRequestArgs {
    ratio : KalturaRatio;
}

/**
 * Build request payload for service 'ratio' action 'add'.
 *
 * Usage: Add new group ratio
 *
 * Server response type:         KalturaRatio
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RatioAddAction extends KalturaRequest<KalturaRatio> {

    ratio : KalturaRatio;

    constructor(data : RatioAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRatio', responseConstructor : KalturaRatio  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ratio' },
				action : { type : 'c', default : 'add' },
				ratio : { type : 'o', subTypeConstructor : KalturaRatio, subType : 'KalturaRatio' }
            }
        );
        return result;
    }
}

