
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLabel } from './KalturaLabel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LabelUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	label : KalturaLabel;
}

/**
 * Build request payload for service 'label' action 'update'.
 *
 * Usage: Updates the existing label with a new value
 *
 * Server response type:         KalturaLabel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LabelUpdateAction extends KalturaRequest<KalturaLabel> {

    id : number;
	label : KalturaLabel;

    constructor(data : LabelUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLabel', responseConstructor : KalturaLabel  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'label' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				label : { type : 'o', subTypeConstructor : KalturaLabel, subType : 'KalturaLabel' }
            }
        );
        return result;
    }
}

