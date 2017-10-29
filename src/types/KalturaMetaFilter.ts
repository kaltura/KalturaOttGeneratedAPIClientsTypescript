
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaType } from './KalturaMetaType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMetaFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	assetStructIdEqual? : number;
	typeEqual? : KalturaMetaType;
}


export class KalturaMetaFilter extends KalturaFilter {

    idIn : string;
	assetStructIdEqual : number;
	typeEqual : KalturaMetaType;

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
				typeEqual : { type : 'es', subTypeConstructor : KalturaMetaType, subType : 'KalturaMetaType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaFilter',KalturaMetaFilter);
