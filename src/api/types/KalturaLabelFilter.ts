
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntityAttribute } from './KalturaEntityAttribute';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaLabelFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	labelEqual? : string;
	labelStartsWith? : string;
	entityAttributeEqual? : KalturaEntityAttribute;
}


export class KalturaLabelFilter extends KalturaFilter {

    idIn : string;
	labelEqual : string;
	labelStartsWith : string;
	entityAttributeEqual : KalturaEntityAttribute;

    constructor(data? : KalturaLabelFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLabelFilter' },
				idIn : { type : 's' },
				labelEqual : { type : 's' },
				labelStartsWith : { type : 's' },
				entityAttributeEqual : { type : 'es', subTypeConstructor : KalturaEntityAttribute, subType : 'KalturaEntityAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLabelFilter',KalturaLabelFilter);
