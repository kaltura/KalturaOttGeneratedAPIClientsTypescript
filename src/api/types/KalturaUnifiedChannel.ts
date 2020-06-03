
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelType } from './KalturaChannelType';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaUnifiedChannelArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : number;
	type? : KalturaChannelType;
}


export class KalturaUnifiedChannel extends KalturaOTTObjectSupportNullable {

    id : number;
	type : KalturaChannelType;

    constructor(data? : KalturaUnifiedChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnifiedChannel' },
				id : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaChannelType, subType : 'KalturaChannelType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnifiedChannel',KalturaUnifiedChannel);
