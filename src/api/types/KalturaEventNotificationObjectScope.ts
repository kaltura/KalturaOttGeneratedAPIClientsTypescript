
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventObject } from './KalturaEventObject';
import { KalturaEventNotificationScope, KalturaEventNotificationScopeArgs } from './KalturaEventNotificationScope';

export interface KalturaEventNotificationObjectScopeArgs  extends KalturaEventNotificationScopeArgs {
    eventObject? : KalturaEventObject;
}


export class KalturaEventNotificationObjectScope extends KalturaEventNotificationScope {

    eventObject : KalturaEventObject;

    constructor(data? : KalturaEventNotificationObjectScopeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationObjectScope' },
				eventObject : { type : 'o', subTypeConstructor : KalturaEventObject, subType : 'KalturaEventObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationObjectScope',KalturaEventNotificationObjectScope);
