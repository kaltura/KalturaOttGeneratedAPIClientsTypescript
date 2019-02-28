
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaChannelOrder } from './KalturaChannelOrder';
import { KalturaBaseChannel, KalturaBaseChannelArgs } from './KalturaBaseChannel';

export interface KalturaChannelArgs  extends KalturaBaseChannelArgs {
    multilingualName? : KalturaTranslationToken[];
	oldName? : string;
	systemName? : string;
	multilingualDescription? : KalturaTranslationToken[];
	oldDescription? : string;
	isActive? : boolean;
	orderBy? : KalturaChannelOrder;
	supportSegmentBasedOrdering? : boolean;
	assetUserRuleId? : number;
}


export class KalturaChannel extends KalturaBaseChannel {

    readonly name : string;
	multilingualName : KalturaTranslationToken[];
	oldName : string;
	systemName : string;
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	oldDescription : string;
	isActive : boolean;
	orderBy : KalturaChannelOrder;
	readonly createDate : number;
	readonly updateDate : number;
	supportSegmentBasedOrdering : boolean;
	assetUserRuleId : number;

    constructor(data? : KalturaChannelArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannel' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				oldName : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				oldDescription : { type : 's' },
				isActive : { type : 'b' },
				orderBy : { type : 'o', subTypeConstructor : KalturaChannelOrder, subType : 'KalturaChannelOrder' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				supportSegmentBasedOrdering : { type : 'b' },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannel',KalturaChannel);
