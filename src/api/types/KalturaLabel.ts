
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntityAttribute } from './KalturaEntityAttribute';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLabelArgs  extends KalturaObjectBaseArgs {
    value? : string;
	entityAttribute? : KalturaEntityAttribute;
}


export class KalturaLabel extends KalturaObjectBase {

    readonly id : number;
	value : string;
	entityAttribute : KalturaEntityAttribute;

    constructor(data? : KalturaLabelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLabel' },
				id : { type : 'n', readOnly : true },
				value : { type : 's' },
				entityAttribute : { type : 'es', subTypeConstructor : KalturaEntityAttribute, subType : 'KalturaEntityAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLabel',KalturaLabel);
