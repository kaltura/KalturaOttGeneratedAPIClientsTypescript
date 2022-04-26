
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUnifiedChannel } from './KalturaUnifiedChannel';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaCategoryItemArgs  extends KalturaOTTObjectSupportNullableArgs {
    multilingualName? : KalturaTranslationToken[];
	childrenIds? : string;
	unifiedChannels? : KalturaUnifiedChannel[];
	dynamicData? : { [key : string] : KalturaStringValue};
	isActive? : boolean;
	startDateInSeconds? : number;
	endDateInSeconds? : number;
	type? : string;
	referenceId? : string;
}


export class KalturaCategoryItem extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly parentId : number;
	childrenIds : string;
	unifiedChannels : KalturaUnifiedChannel[];
	dynamicData : { [key : string] : KalturaStringValue};
	readonly updateDate : number;
	isActive : boolean;
	startDateInSeconds : number;
	endDateInSeconds : number;
	type : string;
	readonly versionId : number;
	readonly virtualAssetId : number;
	referenceId : string;

    constructor(data? : KalturaCategoryItemArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.unifiedChannels === 'undefined') this.unifiedChannels = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryItem' },
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				parentId : { type : 'n', readOnly : true },
				childrenIds : { type : 's' },
				unifiedChannels : { type : 'a', subTypeConstructor : KalturaUnifiedChannel, subType : 'KalturaUnifiedChannel' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				updateDate : { type : 'n', readOnly : true },
				isActive : { type : 'b' },
				startDateInSeconds : { type : 'n' },
				endDateInSeconds : { type : 'n' },
				type : { type : 's' },
				versionId : { type : 'n', readOnly : true },
				virtualAssetId : { type : 'n', readOnly : true },
				referenceId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItem',KalturaCategoryItem);
