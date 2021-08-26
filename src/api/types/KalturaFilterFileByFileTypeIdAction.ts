
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByFileTypeIdActionArgs  extends KalturaFilterActionArgs {
    fileTypeIdIn? : string;
}


export class KalturaFilterFileByFileTypeIdAction extends KalturaFilterAction {

    fileTypeIdIn : string;

    constructor(data? : KalturaFilterFileByFileTypeIdActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdAction' },
				fileTypeIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeIdAction',KalturaFilterFileByFileTypeIdAction);
