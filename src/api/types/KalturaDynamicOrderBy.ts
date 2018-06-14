
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaTagOrderBy } from './KalturaMetaTagOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDynamicOrderByArgs  extends KalturaObjectBaseArgs {
    name? : string;
	orderBy? : KalturaMetaTagOrderBy;
}


export class KalturaDynamicOrderBy extends KalturaObjectBase {

    name : string;
	orderBy : KalturaMetaTagOrderBy;

    constructor(data? : KalturaDynamicOrderByArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicOrderBy' },
				name : { type : 's' },
				orderBy : { type : 'es', subTypeConstructor : KalturaMetaTagOrderBy, subType : 'KalturaMetaTagOrderBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicOrderBy',KalturaDynamicOrderBy);
