
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEventNotificationScopeArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEventNotificationScope extends KalturaObjectBase {

    

    constructor(data? : KalturaEventNotificationScopeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationScope' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationScope',KalturaEventNotificationScope);
