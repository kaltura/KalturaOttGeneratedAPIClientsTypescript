
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaBaseChannelArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : number;
}


export class KalturaBaseChannel extends KalturaOTTObjectSupportNullable {

    id : number;

    constructor(data? : KalturaBaseChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseChannel' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseChannel',KalturaBaseChannel);
