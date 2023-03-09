
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaFileDynamicDataArgs  extends KalturaObjectBaseArgs {
    id? : number;
	mediaFileTypeId? : number;
	mediaFileTypeKeyName? : string;
	value? : string;
}


export class KalturaMediaFileDynamicData extends KalturaObjectBase {

    id : number;
	mediaFileTypeId : number;
	mediaFileTypeKeyName : string;
	value : string;

    constructor(data? : KalturaMediaFileDynamicDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFileDynamicData' },
				id : { type : 'n' },
				mediaFileTypeId : { type : 'n' },
				mediaFileTypeKeyName : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFileDynamicData',KalturaMediaFileDynamicData);
