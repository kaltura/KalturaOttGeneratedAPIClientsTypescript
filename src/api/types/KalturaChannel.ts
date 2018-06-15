
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaAssetOrderBy } from './KalturaAssetOrderBy';
import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaBaseChannel, KalturaBaseChannelArgs } from './KalturaBaseChannel';

export interface KalturaChannelArgs  extends KalturaBaseChannelArgs {
    name? : string;
	description? : string;
	images? : KalturaMediaImage[];
	assetTypes? : KalturaIntegerValue[];
	filterExpression? : string;
	isActive? : boolean;
	order? : KalturaAssetOrderBy;
	groupBy? : KalturaAssetGroupBy;
}


export class KalturaChannel extends KalturaBaseChannel {

    name : string;
	description : string;
	images : KalturaMediaImage[];
	assetTypes : KalturaIntegerValue[];
	filterExpression : string;
	isActive : boolean;
	order : KalturaAssetOrderBy;
	groupBy : KalturaAssetGroupBy;

    constructor(data? : KalturaChannelArgs)
    {
        super(data);
        if (typeof this.images === 'undefined') this.images = [];
		if (typeof this.assetTypes === 'undefined') this.assetTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannel' },
				name : { type : 's' },
				description : { type : 's' },
				images : { type : 'a', subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' },
				assetTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				filterExpression : { type : 's' },
				isActive : { type : 'b' },
				order : { type : 'es', subTypeConstructor : KalturaAssetOrderBy, subType : 'KalturaAssetOrderBy' },
				groupBy : { type : 'o', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannel',KalturaChannel);
