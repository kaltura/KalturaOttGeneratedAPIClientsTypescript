
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleLevel } from './KalturaRuleLevel';
import { KalturaPinType } from './KalturaPinType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPinArgs  extends KalturaObjectBaseArgs {
    pin? : string;
	origin? : KalturaRuleLevel;
	type? : KalturaPinType;
}


export class KalturaPin extends KalturaObjectBase {

    pin : string;
	origin : KalturaRuleLevel;
	type : KalturaPinType;

    constructor(data? : KalturaPinArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPin' },
				pin : { type : 's' },
				origin : { type : 'es', subTypeConstructor : KalturaRuleLevel, subType : 'KalturaRuleLevel' },
				type : { type : 'es', subTypeConstructor : KalturaPinType, subType : 'KalturaPinType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPin',KalturaPin);
