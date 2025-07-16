
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaGeoBlockRuleFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaGeoBlockRuleFilter extends KalturaFilter {

    

    constructor(data? : KalturaGeoBlockRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeoBlockRuleFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGeoBlockRuleFilter',KalturaGeoBlockRuleFilter);
