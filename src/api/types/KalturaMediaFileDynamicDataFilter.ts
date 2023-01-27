
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMediaFileDynamicDataFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	mediaFileTypeId? : number;
	mediaFileTypeKeyName? : string;
	valueEqual? : string;
	valueStartsWith? : string;
}


export class KalturaMediaFileDynamicDataFilter extends KalturaFilter {

    idIn : string;
	mediaFileTypeId : number;
	mediaFileTypeKeyName : string;
	valueEqual : string;
	valueStartsWith : string;

    constructor(data? : KalturaMediaFileDynamicDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFileDynamicDataFilter' },
				idIn : { type : 's' },
				mediaFileTypeId : { type : 'n' },
				mediaFileTypeKeyName : { type : 's' },
				valueEqual : { type : 's' },
				valueStartsWith : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFileDynamicDataFilter',KalturaMediaFileDynamicDataFilter);
