
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTimeShiftedTvPartnerSettings } from './KalturaTimeShiftedTvPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TimeShiftedTvPartnerSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve the account’s time-shifted TV settings (catch-up and C-DVR,
* Trick-play, Start-over)
**/
export class TimeShiftedTvPartnerSettingsGetAction extends KalturaRequest<KalturaTimeShiftedTvPartnerSettings> {

    

    constructor(data? : TimeShiftedTvPartnerSettingsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTimeShiftedTvPartnerSettings', responseConstructor : KalturaTimeShiftedTvPartnerSettings  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'timeshiftedtvpartnersettings' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

