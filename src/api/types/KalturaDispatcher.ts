
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDispatcherArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaDispatcher extends KalturaObjectBase {

    

    constructor(data? : KalturaDispatcherArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDispatcher' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDispatcher',KalturaDispatcher);
