
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaEnrichConfigurationArgs  extends KalturaObjectBaseArgs {
    isEnabled? : boolean;
	metaFieldNameMap? : { [key : string] : KalturaStringValue};
	vectorizedMetaIds? : string;
}


export class KalturaMetaEnrichConfiguration extends KalturaObjectBase {

    isEnabled : boolean;
	metaFieldNameMap : { [key : string] : KalturaStringValue};
	vectorizedMetaIds : string;

    constructor(data? : KalturaMetaEnrichConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetaEnrichConfiguration' },
				isEnabled : { type : 'b' },
				metaFieldNameMap : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				vectorizedMetaIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaEnrichConfiguration',KalturaMetaEnrichConfiguration);
