
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupByField } from './KalturaGroupByField';
import { KalturaAssetGroupBy, KalturaAssetGroupByArgs } from './KalturaAssetGroupBy';

export interface KalturaAssetFieldGroupByArgs  extends KalturaAssetGroupByArgs {
    value? : KalturaGroupByField;
}


export class KalturaAssetFieldGroupBy extends KalturaAssetGroupBy {

    value : KalturaGroupByField;

    constructor(data? : KalturaAssetFieldGroupByArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFieldGroupBy' },
				value : { type : 'es', subTypeConstructor : KalturaGroupByField, subType : 'KalturaGroupByField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFieldGroupBy',KalturaAssetFieldGroupBy);
