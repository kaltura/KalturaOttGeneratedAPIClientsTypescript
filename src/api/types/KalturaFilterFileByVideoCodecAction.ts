
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByVideoCodecActionArgs  extends KalturaFilterActionArgs {
    videoCodecIn? : string;
}


export class KalturaFilterFileByVideoCodecAction extends KalturaFilterAction {

    videoCodecIn : string;

    constructor(data? : KalturaFilterFileByVideoCodecActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecAction' },
				videoCodecIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByVideoCodecAction',KalturaFilterFileByVideoCodecAction);
