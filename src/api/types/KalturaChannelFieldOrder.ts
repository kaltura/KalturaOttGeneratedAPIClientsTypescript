
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelFieldOrderByType } from './KalturaChannelFieldOrderByType';
import { KalturaBaseChannelOrder, KalturaBaseChannelOrderArgs } from './KalturaBaseChannelOrder';

export interface KalturaChannelFieldOrderArgs  extends KalturaBaseChannelOrderArgs {
    orderBy? : KalturaChannelFieldOrderByType;
}


export class KalturaChannelFieldOrder extends KalturaBaseChannelOrder {

    orderBy : KalturaChannelFieldOrderByType;

    constructor(data? : KalturaChannelFieldOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelFieldOrder' },
				orderBy : { type : 'es', subTypeConstructor : KalturaChannelFieldOrderByType, subType : 'KalturaChannelFieldOrderByType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelFieldOrder',KalturaChannelFieldOrder);
