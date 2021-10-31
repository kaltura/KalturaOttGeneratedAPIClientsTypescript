
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByAudioCodecAction, KalturaFilterFileByAudioCodecActionArgs } from './KalturaFilterFileByAudioCodecAction';

export interface KalturaFilterFileByAudioCodecInDiscoveryActionArgs  extends KalturaFilterFileByAudioCodecActionArgs {
    
}


export class KalturaFilterFileByAudioCodecInDiscoveryAction extends KalturaFilterFileByAudioCodecAction {

    

    constructor(data? : KalturaFilterFileByAudioCodecInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAudioCodecInDiscoveryAction',KalturaFilterFileByAudioCodecInDiscoveryAction);
