
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPurchaseSettingsType } from './KalturaPurchaseSettingsType';
import { KalturaPin, KalturaPinArgs } from './KalturaPin';

export interface KalturaPurchaseSettingsArgs  extends KalturaPinArgs {
    permission? : KalturaPurchaseSettingsType;
}

/** 
* Purchase settings and PIN
**/
export class KalturaPurchaseSettings extends KalturaPin {

    permission : KalturaPurchaseSettingsType;

    constructor(data? : KalturaPurchaseSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPurchaseSettings' },
				permission : { type : 'es', subTypeConstructor : KalturaPurchaseSettingsType, subType : 'KalturaPurchaseSettingsType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPurchaseSettings',KalturaPurchaseSettings);
