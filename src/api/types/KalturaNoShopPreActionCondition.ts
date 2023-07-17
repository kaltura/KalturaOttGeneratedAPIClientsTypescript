
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBasePreActionCondition, KalturaBasePreActionConditionArgs } from './KalturaBasePreActionCondition';

export interface KalturaNoShopPreActionConditionArgs  extends KalturaBasePreActionConditionArgs {
    
}


export class KalturaNoShopPreActionCondition extends KalturaBasePreActionCondition {

    

    constructor(data? : KalturaNoShopPreActionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNoShopPreActionCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNoShopPreActionCondition',KalturaNoShopPreActionCondition);
