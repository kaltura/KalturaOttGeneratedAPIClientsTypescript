
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryVersionSetDefaultActionArgs  extends KalturaRequestArgs {
    id : number;
	force? : boolean;
}

/**
 * Build request payload for service 'categoryVersion' action 'setDefault'.
 *
 * Usage: Set new default category version
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryVersionSetDefaultAction extends KalturaRequest<void> {

    id : number;
	force : boolean;

    constructor(data : CategoryVersionSetDefaultActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
        if (typeof this.force === 'undefined') this.force = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryversion' },
				action : { type : 'c', default : 'setDefault' },
				id : { type : 'n' },
				force : { type : 'b' }
            }
        );
        return result;
    }
}

