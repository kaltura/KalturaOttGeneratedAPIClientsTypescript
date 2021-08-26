
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByVideoCodecAction, KalturaFilterFileByVideoCodecActionArgs } from './KalturaFilterFileByVideoCodecAction';

export interface KalturaFilterFileByVideoCodecInDiscoveryActionArgs  extends KalturaFilterFileByVideoCodecActionArgs {
    
}


export class KalturaFilterFileByVideoCodecInDiscoveryAction extends KalturaFilterFileByVideoCodecAction {

    

    constructor(data? : KalturaFilterFileByVideoCodecInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByVideoCodecInDiscoveryAction',KalturaFilterFileByVideoCodecInDiscoveryAction);
