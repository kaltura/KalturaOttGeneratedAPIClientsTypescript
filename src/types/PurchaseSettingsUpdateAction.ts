
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPurchaseSettings } from './KalturaPurchaseSettings';

import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PurchaseSettingsUpdateActionArgs  extends KalturaRequestArgs {
    entityReference : KalturaEntityReferenceBy;
	settings : KalturaPurchaseSettings;
}

/** 
* Set a purchase PIN for the household or user
**/
export class PurchaseSettingsUpdateAction extends KalturaRequest<KalturaPurchaseSettings> {

    entityReference : KalturaEntityReferenceBy;
	settings : KalturaPurchaseSettings;

    constructor(data : PurchaseSettingsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPurchaseSettings', responseConstructor : KalturaPurchaseSettings  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'purchasesettings' },
				action : { type : 'c', default : 'update' },
				entityReference : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				settings : { type : 'o', subTypeConstructor : KalturaPurchaseSettings, subType : 'KalturaPurchaseSettings' }
            }
        );
        return result;
    }
}

