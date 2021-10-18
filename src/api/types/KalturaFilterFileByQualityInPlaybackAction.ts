
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByQualityAction, KalturaFilterFileByQualityActionArgs } from './KalturaFilterFileByQualityAction';

export interface KalturaFilterFileByQualityInPlaybackActionArgs  extends KalturaFilterFileByQualityActionArgs {
    
}


export class KalturaFilterFileByQualityInPlaybackAction extends KalturaFilterFileByQualityAction {

    

    constructor(data? : KalturaFilterFileByQualityInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityInPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByQualityInPlaybackAction',KalturaFilterFileByQualityInPlaybackAction);
