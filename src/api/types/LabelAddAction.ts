
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLabel } from './KalturaLabel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LabelAddActionArgs  extends KalturaRequestArgs {
    label : KalturaLabel;
}

/**
 * Build request payload for service 'label' action 'add'.
 *
 * Usage: Create a new label associated with a predefined entity attribute. Currently supports only labels on KalturaMediaFile
 *
 * Server response type:         KalturaLabel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LabelAddAction extends KalturaRequest<KalturaLabel> {

    label : KalturaLabel;

    constructor(data : LabelAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				label : { type : 'o', subTypeConstructor : KalturaLabel, subType : 'KalturaLabel' }
            }
        );
        return result;
    }
}

