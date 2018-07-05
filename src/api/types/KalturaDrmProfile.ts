
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDrmProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	adapterUrl? : string;
	settings? : string;
	systemName? : string;
}


export class KalturaDrmProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	adapterUrl : string;
	settings : string;
	systemName : string;
	readonly sharedSecret : string;

    constructor(data? : KalturaDrmProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				settings : { type : 's' },
				systemName : { type : 's' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmProfile',KalturaDrmProfile);
