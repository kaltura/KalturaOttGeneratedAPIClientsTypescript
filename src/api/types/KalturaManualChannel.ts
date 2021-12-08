
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannel, KalturaChannelArgs } from './KalturaChannel';

export interface KalturaManualChannelArgs  extends KalturaChannelArgs {
    mediaIds? : string;
}


export class KalturaManualChannel extends KalturaChannel {

    mediaIds : string;

    constructor(data? : KalturaManualChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaManualChannel' },
				mediaIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaManualChannel',KalturaManualChannel);
