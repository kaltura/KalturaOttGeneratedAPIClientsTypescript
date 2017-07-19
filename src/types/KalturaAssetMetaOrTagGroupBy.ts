
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetGroupBy, KalturaAssetGroupByArgs } from './KalturaAssetGroupBy';

export interface KalturaAssetMetaOrTagGroupByArgs  extends KalturaAssetGroupByArgs {
    value? : string;
}

/** 
* Group by a tag or meta - according to the name that appears in the system
* (similar to KSQL)
**/
export class KalturaAssetMetaOrTagGroupBy extends KalturaAssetGroupBy {

    value : string;

    constructor(data? : KalturaAssetMetaOrTagGroupByArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetMetaOrTagGroupBy' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetMetaOrTagGroupBy',KalturaAssetMetaOrTagGroupBy);
