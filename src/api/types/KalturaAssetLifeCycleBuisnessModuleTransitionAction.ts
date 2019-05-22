
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetLifeCycleTransitionAction, KalturaAssetLifeCycleTransitionActionArgs } from './KalturaAssetLifeCycleTransitionAction';

export interface KalturaAssetLifeCycleBuisnessModuleTransitionActionArgs  extends KalturaAssetLifeCycleTransitionActionArgs {
    fileTypeIds? : string;
	ppvIds? : string;
}


export class KalturaAssetLifeCycleBuisnessModuleTransitionAction extends KalturaAssetLifeCycleTransitionAction {

    fileTypeIds : string;
	ppvIds : string;

    constructor(data? : KalturaAssetLifeCycleBuisnessModuleTransitionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetLifeCycleBuisnessModuleTransitionAction' },
				fileTypeIds : { type : 's' },
				ppvIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetLifeCycleBuisnessModuleTransitionAction',KalturaAssetLifeCycleBuisnessModuleTransitionAction);
