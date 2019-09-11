
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegionalChannel } from './KalturaRegionalChannel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	externalId? : string;
	linearChannels? : KalturaRegionalChannel[];
	parentId? : number;
}


export class KalturaRegion extends KalturaObjectBase {

    id : number;
	name : string;
	externalId : string;
	readonly isDefault : boolean;
	linearChannels : KalturaRegionalChannel[];
	parentId : number;

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
				isDefault : { type : 'b', readOnly : true },
				linearChannels : { type : 'a', subTypeConstructor : KalturaRegionalChannel, subType : 'KalturaRegionalChannel' },
				parentId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegion',KalturaRegion);
