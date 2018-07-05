
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaImageTypeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	ratioId? : number;
	helpText? : string;
	defaultImageId? : number;
}


export class KalturaImageType extends KalturaObjectBase {

    readonly id : number;
	name : string;
	systemName : string;
	ratioId : number;
	helpText : string;
	defaultImageId : number;

    constructor(data? : KalturaImageTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageType' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				ratioId : { type : 'n' },
				helpText : { type : 's' },
				defaultImageId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageType',KalturaImageType);
