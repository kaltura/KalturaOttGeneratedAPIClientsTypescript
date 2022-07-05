
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaFileTypeConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaFileTypeCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaFileTypeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileTypeCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileTypeCondition',KalturaFileTypeCondition);
