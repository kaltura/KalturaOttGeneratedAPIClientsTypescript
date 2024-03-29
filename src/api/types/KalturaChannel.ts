
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaChannelOrder } from './KalturaChannelOrder';
import { KalturaBaseChannelOrder } from './KalturaBaseChannelOrder';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaBaseChannel, KalturaBaseChannelArgs } from './KalturaBaseChannel';

export interface KalturaChannelArgs  extends KalturaBaseChannelArgs {
    multilingualName? : KalturaTranslationToken[];
	oldName? : string;
	systemName? : string;
	multilingualDescription? : KalturaTranslationToken[];
	oldDescription? : string;
	isActive? : boolean;
	orderBy? : KalturaChannelOrder;
	orderingParametersEqual? : KalturaBaseChannelOrder[];
	supportSegmentBasedOrdering? : boolean;
	assetUserRuleId? : number;
	metaData? : { [key : string] : KalturaStringValue};
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
	orderingParametersEqual : KalturaBaseChannelOrder[];
	readonly createDate : number;
	readonly updateDate : number;
	supportSegmentBasedOrdering : boolean;
	assetUserRuleId : number;
	metaData : { [key : string] : KalturaStringValue};
	readonly virtualAssetId : number;

    constructor(data? : KalturaChannelArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.orderingParametersEqual === 'undefined') this.orderingParametersEqual = [];
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
				orderingParametersEqual : { type : 'a', subTypeConstructor : KalturaBaseChannelOrder, subType : 'KalturaBaseChannelOrder' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				supportSegmentBasedOrdering : { type : 'b' },
				assetUserRuleId : { type : 'n' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				virtualAssetId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannel',KalturaChannel);
