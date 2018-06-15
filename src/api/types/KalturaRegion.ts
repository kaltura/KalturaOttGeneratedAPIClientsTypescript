
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegionalChannel } from './KalturaRegionalChannel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	externalId? : string;
	isDefault? : boolean;
	linearChannels? : KalturaRegionalChannel[];
}


export class KalturaRegion extends KalturaObjectBase {

    id : number;
	name : string;
	externalId : string;
	isDefault : boolean;
	linearChannels : KalturaRegionalChannel[];

    constructor(data? : KalturaRegionArgs)
    {
        super(data);
        if (typeof this.linearChannels === 'undefined') this.linearChannels = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegion' },
				id : { type : 'n' },
				name : { type : 's' },
				externalId : { type : 's' },
				isDefault : { type : 'b' },
				linearChannels : { type : 'a', subTypeConstructor : KalturaRegionalChannel, subType : 'KalturaRegionalChannel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegion',KalturaRegion);
