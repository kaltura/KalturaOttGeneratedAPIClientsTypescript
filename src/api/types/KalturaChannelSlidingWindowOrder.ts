
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelSlidingWindowOrderByType } from './KalturaChannelSlidingWindowOrderByType';
import { KalturaBaseChannelOrder, KalturaBaseChannelOrderArgs } from './KalturaBaseChannelOrder';

export interface KalturaChannelSlidingWindowOrderArgs  extends KalturaBaseChannelOrderArgs {
    period? : number;
	orderBy? : KalturaChannelSlidingWindowOrderByType;
}


export class KalturaChannelSlidingWindowOrder extends KalturaBaseChannelOrder {

    period : number;
	orderBy : KalturaChannelSlidingWindowOrderByType;

    constructor(data? : KalturaChannelSlidingWindowOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelSlidingWindowOrder' },
				period : { type : 'n' },
				orderBy : { type : 'es', subTypeConstructor : KalturaChannelSlidingWindowOrderByType, subType : 'KalturaChannelSlidingWindowOrderByType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelSlidingWindowOrder',KalturaChannelSlidingWindowOrder);
