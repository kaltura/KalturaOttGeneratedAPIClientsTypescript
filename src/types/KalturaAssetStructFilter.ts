
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetStructFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	metaIdEqual? : number;
	isProtected? : boolean;
}


export class KalturaAssetStructFilter extends KalturaFilter {

    idIn : string;
	metaIdEqual : number;
	isProtected : boolean;

    constructor(data? : KalturaAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructFilter' },
				idIn : { type : 's' },
				metaIdEqual : { type : 'n' },
				isProtected : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStructFilter',KalturaAssetStructFilter);
