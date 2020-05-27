
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImageObjectType } from './KalturaImageObjectType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaImageFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	imageObjectIdEqual? : number;
	imageObjectTypeEqual? : KalturaImageObjectType;
	isDefaultEqual? : boolean;
	imageObjectIdIn? : string;
}


export class KalturaImageFilter extends KalturaFilter {

    idIn : string;
	imageObjectIdEqual : number;
	imageObjectTypeEqual : KalturaImageObjectType;
	isDefaultEqual : boolean;
	imageObjectIdIn : string;

    constructor(data? : KalturaImageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFilter' },
				idIn : { type : 's' },
				imageObjectIdEqual : { type : 'n' },
				imageObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaImageObjectType, subType : 'KalturaImageObjectType' },
				isDefaultEqual : { type : 'b' },
				imageObjectIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageFilter',KalturaImageFilter);
