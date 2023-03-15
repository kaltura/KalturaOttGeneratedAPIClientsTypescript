
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByDynamicDataAction, KalturaFilterFileByDynamicDataActionArgs } from './KalturaFilterFileByDynamicDataAction';

export interface KalturaFilterFileByDynamicDataInPlaybackActionArgs  extends KalturaFilterFileByDynamicDataActionArgs {
    
}


export class KalturaFilterFileByDynamicDataInPlaybackAction extends KalturaFilterFileByDynamicDataAction {

    

    constructor(data? : KalturaFilterFileByDynamicDataInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByDynamicDataInPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByDynamicDataInPlaybackAction',KalturaFilterFileByDynamicDataInPlaybackAction);
