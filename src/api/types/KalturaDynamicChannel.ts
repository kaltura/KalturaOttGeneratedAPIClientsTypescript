
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaChannel, KalturaChannelArgs } from './KalturaChannel';

export interface KalturaDynamicChannelArgs  extends KalturaChannelArgs {
    kSql? : string;
	assetTypes? : KalturaIntegerValue[];
	groupBy? : KalturaAssetGroupBy;
}


export class KalturaDynamicChannel extends KalturaChannel {

    kSql : string;
	assetTypes : KalturaIntegerValue[];
	groupBy : KalturaAssetGroupBy;

    constructor(data? : KalturaDynamicChannelArgs)
    {
        super(data);
        if (typeof this.assetTypes === 'undefined') this.assetTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicChannel' },
				kSql : { type : 's' },
				assetTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				groupBy : { type : 'o', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicChannel',KalturaDynamicChannel);
