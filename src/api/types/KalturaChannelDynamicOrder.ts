
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaTagOrderBy } from './KalturaMetaTagOrderBy';
import { KalturaBaseChannelOrder, KalturaBaseChannelOrderArgs } from './KalturaBaseChannelOrder';

export interface KalturaChannelDynamicOrderArgs  extends KalturaBaseChannelOrderArgs {
    name? : string;
	orderBy? : KalturaMetaTagOrderBy;
}


export class KalturaChannelDynamicOrder extends KalturaBaseChannelOrder {

    name : string;
	orderBy : KalturaMetaTagOrderBy;

    constructor(data? : KalturaChannelDynamicOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelDynamicOrder' },
				name : { type : 's' },
				orderBy : { type : 'es', subTypeConstructor : KalturaMetaTagOrderBy, subType : 'KalturaMetaTagOrderBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelDynamicOrder',KalturaChannelDynamicOrder);
