
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaBaseSegmentAction, KalturaBaseSegmentActionArgs } from './KalturaBaseSegmentAction';

export interface KalturaAssetOrderSegmentActionArgs  extends KalturaBaseSegmentActionArgs {
    name? : string;
	values? : KalturaStringValue[];
}


export class KalturaAssetOrderSegmentAction extends KalturaBaseSegmentAction {

    name : string;
	values : KalturaStringValue[];

    constructor(data? : KalturaAssetOrderSegmentActionArgs)
    {
        super(data);
        if (typeof this.values === 'undefined') this.values = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetOrderSegmentAction' },
				name : { type : 's' },
				values : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetOrderSegmentAction',KalturaAssetOrderSegmentAction);
