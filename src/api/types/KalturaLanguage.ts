
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLanguageArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	systemName? : string;
	code? : string;
	direction? : string;
	isDefault? : boolean;
}


export class KalturaLanguage extends KalturaObjectBase {

    id : number;
	name : string;
	systemName : string;
	code : string;
	direction : string;
	isDefault : boolean;

    constructor(data? : KalturaLanguageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLanguage' },
				id : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				code : { type : 's' },
				direction : { type : 's' },
				isDefault : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLanguage',KalturaLanguage);
