
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaAssetOrderBy } from './KalturaAssetOrderBy';
import { KalturaBaseChannel, KalturaBaseChannelArgs } from './KalturaBaseChannel';

export interface KalturaChannelArgs  extends KalturaBaseChannelArgs {
    description? : string;
	images? : KalturaMediaImage[];
	assetTypes? : KalturaIntegerValue[];
	filterExpression? : string;
	isActive? : boolean;
	order? : KalturaAssetOrderBy;
}

/** 
* Channel details
**/
export class KalturaChannel extends KalturaBaseChannel {

    description : string;
	images : KalturaMediaImage[];
	assetTypes : KalturaIntegerValue[];
	filterExpression : string;
	isActive : boolean;
	order : KalturaAssetOrderBy;

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
				description : { type : 's' },
				images : { type : 'a', subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' },
				assetTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				filterExpression : { type : 's' },
				isActive : { type : 'b' },
				order : { type : 'es', subTypeConstructor : KalturaAssetOrderBy, subType : 'KalturaAssetOrderBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannel',KalturaChannel);
