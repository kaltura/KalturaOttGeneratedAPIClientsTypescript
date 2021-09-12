
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileTypeIdAction, KalturaFilterFileByFileTypeIdActionArgs } from './KalturaFilterFileByFileTypeIdAction';

export interface KalturaFilterFileByFileTypeIdInDiscoveryActionArgs  extends KalturaFilterFileByFileTypeIdActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdInDiscoveryAction extends KalturaFilterFileByFileTypeIdAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeIdInDiscoveryAction',KalturaFilterFileByFileTypeIdInDiscoveryAction);
