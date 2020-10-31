
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBusinessModuleDetailsArgs  extends KalturaObjectBaseArgs {
    businessModuleId? : number;
	businessModuleType? : KalturaTransactionType;
}


export class KalturaBusinessModuleDetails extends KalturaObjectBase {

    businessModuleId : number;
	businessModuleType : KalturaTransactionType;

    constructor(data? : KalturaBusinessModuleDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleDetails' },
				businessModuleId : { type : 'n' },
				businessModuleType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessModuleDetails',KalturaBusinessModuleDetails);
