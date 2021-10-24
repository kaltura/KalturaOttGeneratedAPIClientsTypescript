
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByLabelAction, KalturaFilterFileByLabelActionArgs } from './KalturaFilterFileByLabelAction';

export interface KalturaFilterFileByLabelInPlaybackActionArgs  extends KalturaFilterFileByLabelActionArgs {
    
}


export class KalturaFilterFileByLabelInPlaybackAction extends KalturaFilterFileByLabelAction {

    

    constructor(data? : KalturaFilterFileByLabelInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabelInPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByLabelInPlaybackAction',KalturaFilterFileByLabelInPlaybackAction);
