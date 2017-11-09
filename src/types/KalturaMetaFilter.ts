
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaDataType } from './KalturaMetaDataType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMetaFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	assetStructIdEqual? : number;
	dataTypeEqual? : KalturaMetaDataType;
	multipleValue? : boolean;
}


export class KalturaMetaFilter extends KalturaFilter {

    idIn : string;
	assetStructIdEqual : number;
	dataTypeEqual : KalturaMetaDataType;
	multipleValue : boolean;

    constructor(data? : KalturaMetaFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetaFilter' },
				idIn : { type : 's' },
				assetStructIdEqual : { type : 'n' },
				dataTypeEqual : { type : 'es', subTypeConstructor : KalturaMetaDataType, subType : 'KalturaMetaDataType' },
				multipleValue : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaFilter',KalturaMetaFilter);
