
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDispatcher, KalturaDispatcherArgs } from './KalturaDispatcher';

export interface KalturaSmsDispatcherArgs  extends KalturaDispatcherArgs {
    
}


export class KalturaSmsDispatcher extends KalturaDispatcher {

    

    constructor(data? : KalturaSmsDispatcherArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSmsDispatcher' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSmsDispatcher',KalturaSmsDispatcher);
