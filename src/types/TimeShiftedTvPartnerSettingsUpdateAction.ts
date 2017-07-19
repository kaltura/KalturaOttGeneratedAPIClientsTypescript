
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTimeShiftedTvPartnerSettings } from './KalturaTimeShiftedTvPartnerSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TimeShiftedTvPartnerSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaTimeShiftedTvPartnerSettings;
}

/** 
* Configure the account’s time-shifted TV settings (catch-up and C-DVR,
* Trick-play, Start-over)
**/
export class TimeShiftedTvPartnerSettingsUpdateAction extends KalturaRequest<boolean> {

    settings : KalturaTimeShiftedTvPartnerSettings;

    constructor(data : TimeShiftedTvPartnerSettingsUpdateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'timeshiftedtvpartnersettings' },
				action : { type : 'c', default : 'update' },
				settings : { type : 'o', subTypeConstructor : KalturaTimeShiftedTvPartnerSettings, subType : 'KalturaTimeShiftedTvPartnerSettings' }
            }
        );
        return result;
    }
}

