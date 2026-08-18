
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContentTypeSelectorArgs  extends KalturaObjectBaseArgs {
    includeRecordings? : boolean;
	includePrograms? : boolean;
	mediaTypeIdIn? : string;
}


export class KalturaContentTypeSelector extends KalturaObjectBase {

    includeRecordings : boolean;
	includePrograms : boolean;
	mediaTypeIdIn : string;

    constructor(data? : KalturaContentTypeSelectorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentTypeSelector' },
				includeRecordings : { type : 'b' },
				includePrograms : { type : 'b' },
				mediaTypeIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentTypeSelector',KalturaContentTypeSelector);
