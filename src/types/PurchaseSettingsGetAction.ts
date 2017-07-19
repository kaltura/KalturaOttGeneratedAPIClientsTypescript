
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPurchaseSettings } from './KalturaPurchaseSettings';

import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PurchaseSettingsGetActionArgs  extends KalturaRequestArgs {
    by : KalturaEntityReferenceBy;
}

/** 
* Retrieve the purchase settings.              Includes specification of where
* these settings were defined – account, household or user
**/
export class PurchaseSettingsGetAction extends KalturaRequest<KalturaPurchaseSettings> {

    by : KalturaEntityReferenceBy;

    constructor(data : PurchaseSettingsGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				by : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' }
            }
        );
        return result;
    }
}

