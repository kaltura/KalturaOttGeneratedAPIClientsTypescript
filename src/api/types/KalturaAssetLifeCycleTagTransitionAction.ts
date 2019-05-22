
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetLifeCycleTransitionAction, KalturaAssetLifeCycleTransitionActionArgs } from './KalturaAssetLifeCycleTransitionAction';

export interface KalturaAssetLifeCycleTagTransitionActionArgs  extends KalturaAssetLifeCycleTransitionActionArgs {
    tagIds? : string;
}


export class KalturaAssetLifeCycleTagTransitionAction extends KalturaAssetLifeCycleTransitionAction {

    tagIds : string;

    constructor(data? : KalturaAssetLifeCycleTagTransitionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetLifeCycleTagTransitionAction' },
				tagIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetLifeCycleTagTransitionAction',KalturaAssetLifeCycleTagTransitionAction);
