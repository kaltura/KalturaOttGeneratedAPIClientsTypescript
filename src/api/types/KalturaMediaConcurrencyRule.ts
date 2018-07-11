
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConcurrencyLimitationType } from './KalturaConcurrencyLimitationType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaConcurrencyRuleArgs  extends KalturaObjectBaseArgs {
    id? : string;
	name? : string;
	concurrencyLimitationType? : KalturaConcurrencyLimitationType;
	limitation? : number;
}


export class KalturaMediaConcurrencyRule extends KalturaObjectBase {

    id : string;
	name : string;
	concurrencyLimitationType : KalturaConcurrencyLimitationType;
	limitation : number;

    constructor(data? : KalturaMediaConcurrencyRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaConcurrencyRule' },
				id : { type : 's' },
				name : { type : 's' },
				concurrencyLimitationType : { type : 'es', subTypeConstructor : KalturaConcurrencyLimitationType, subType : 'KalturaConcurrencyLimitationType' },
				limitation : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaConcurrencyRule',KalturaMediaConcurrencyRule);
