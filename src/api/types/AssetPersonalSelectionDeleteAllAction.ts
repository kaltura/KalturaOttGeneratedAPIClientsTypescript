
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetPersonalSelectionDeleteAllActionArgs  extends KalturaRequestArgs {
    slotNumber : number;
}

/**
 * Build request payload for service 'assetPersonalSelection' action 'deleteAll'.
 *
 * Usage: Remove asset selection in slot
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetPersonalSelectionDeleteAllAction extends KalturaRequest<void> {

    slotNumber : number;

    constructor(data : AssetPersonalSelectionDeleteAllActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetpersonalselection' },
				action : { type : 'c', default : 'deleteAll' },
				slotNumber : { type : 'n' }
            }
        );
        return result;
    }
}

