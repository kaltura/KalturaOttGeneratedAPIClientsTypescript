
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByDynamicDataActionArgs  extends KalturaFilterActionArgs {
    key? : string;
	values? : string;
}


export class KalturaFilterFileByDynamicDataAction extends KalturaFilterAction {

    key : string;
	values : string;

    constructor(data? : KalturaFilterFileByDynamicDataActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByDynamicDataAction' },
				key : { type : 's' },
				values : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByDynamicDataAction',KalturaFilterFileByDynamicDataAction);
