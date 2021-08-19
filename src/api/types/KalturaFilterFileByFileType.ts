
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByFileTypeArgs  extends KalturaAssetRuleActionArgs {
    fileTypesIds? : string;
}


export class KalturaFilterFileByFileType extends KalturaAssetRuleAction {

    fileTypesIds : string;

    constructor(data? : KalturaFilterFileByFileTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileType' },
				fileTypesIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileType',KalturaFilterFileByFileType);
