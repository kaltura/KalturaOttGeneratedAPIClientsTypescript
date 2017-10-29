
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCompensation } from './KalturaCompensation';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CompensationAddActionArgs  extends KalturaRequestArgs {
    compensation : KalturaCompensation;
}

/**
 * Build request payload for service 'compensation' action 'add'.
 *
 * Usage: Adds a new compensation for a household for a given number of iterations of a subscription renewal for a fixed amount / percentage of the renewal price
 *
 * Server response type:         KalturaCompensation
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CompensationAddAction extends KalturaRequest<KalturaCompensation> {

    compensation : KalturaCompensation;

    constructor(data : CompensationAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				compensation : { type : 'o', subTypeConstructor : KalturaCompensation, subType : 'KalturaCompensation' }
            }
        );
        return result;
    }
}

