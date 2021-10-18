
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByStreamerTypeAction, KalturaFilterFileByStreamerTypeActionArgs } from './KalturaFilterFileByStreamerTypeAction';

export interface KalturaFilterFileByStreamerTypeInDiscoveryArgs  extends KalturaFilterFileByStreamerTypeActionArgs {
    
}


export class KalturaFilterFileByStreamerTypeInDiscovery extends KalturaFilterFileByStreamerTypeAction {

    

    constructor(data? : KalturaFilterFileByStreamerTypeInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerTypeInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByStreamerTypeInDiscovery',KalturaFilterFileByStreamerTypeInDiscovery);
