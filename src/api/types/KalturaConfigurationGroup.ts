
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaConfigurationIdentifier } from './KalturaConfigurationIdentifier';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfigurationGroupArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isDefault? : boolean;
}


export class KalturaConfigurationGroup extends KalturaObjectBase {

    readonly id : string;
	name : string;
	readonly partnerId : number;
	isDefault : boolean;
	readonly tags : KalturaStringValue[];
	readonly numberOfDevices : number;
	readonly configurationIdentifiers : KalturaConfigurationIdentifier[];

    constructor(data? : KalturaConfigurationGroupArgs)
    {
        super(data);
        if (typeof this.tags === 'undefined') this.tags = [];
		if (typeof this.configurationIdentifiers === 'undefined') this.configurationIdentifiers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroup' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				isDefault : { type : 'b' },
				tags : { type : 'a', readOnly : true, subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				numberOfDevices : { type : 'n', readOnly : true },
				configurationIdentifiers : { type : 'a', readOnly : true, subTypeConstructor : KalturaConfigurationIdentifier, subType : 'KalturaConfigurationIdentifier' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroup',KalturaConfigurationGroup);
