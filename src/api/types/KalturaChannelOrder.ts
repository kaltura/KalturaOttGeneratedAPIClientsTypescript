
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicOrderBy } from './KalturaDynamicOrderBy';
import { KalturaChannelOrderBy } from './KalturaChannelOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaChannelOrderArgs  extends KalturaObjectBaseArgs {
    dynamicOrderBy? : KalturaDynamicOrderBy;
	orderBy? : KalturaChannelOrderBy;
	period? : number;
}


export class KalturaChannelOrder extends KalturaObjectBase {

    dynamicOrderBy : KalturaDynamicOrderBy;
	orderBy : KalturaChannelOrderBy;
	period : number;

    constructor(data? : KalturaChannelOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelOrder' },
				dynamicOrderBy : { type : 'o', subTypeConstructor : KalturaDynamicOrderBy, subType : 'KalturaDynamicOrderBy' },
				orderBy : { type : 'es', subTypeConstructor : KalturaChannelOrderBy, subType : 'KalturaChannelOrderBy' },
				period : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelOrder',KalturaChannelOrder);
