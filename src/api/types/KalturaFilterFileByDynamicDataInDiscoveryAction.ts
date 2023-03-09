
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByDynamicDataAction, KalturaFilterFileByDynamicDataActionArgs } from './KalturaFilterFileByDynamicDataAction';

export interface KalturaFilterFileByDynamicDataInDiscoveryActionArgs  extends KalturaFilterFileByDynamicDataActionArgs {
    
}


export class KalturaFilterFileByDynamicDataInDiscoveryAction extends KalturaFilterFileByDynamicDataAction {

    

    constructor(data? : KalturaFilterFileByDynamicDataInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByDynamicDataInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByDynamicDataInDiscoveryAction',KalturaFilterFileByDynamicDataInDiscoveryAction);
