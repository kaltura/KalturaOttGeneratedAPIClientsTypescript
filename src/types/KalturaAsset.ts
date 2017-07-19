
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultilingualString } from './KalturaMultilingualString';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaMediaFile } from './KalturaMediaFile';
import { KalturaValue } from './KalturaValue';
import { KalturaMultilingualStringValueArray } from './KalturaMultilingualStringValueArray';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetArgs  extends KalturaObjectBaseArgs {
    type? : number;
	name? : string;
	multilingualName? : KalturaMultilingualString;
	description? : string;
	multilingualDescription? : KalturaMultilingualString;
	images? : KalturaMediaImage[];
	mediaFiles? : KalturaMediaFile[];
	metas? : { [key : string] : KalturaValue};
	tags? : { [key : string] : KalturaMultilingualStringValueArray};
	startDate? : number;
	endDate? : number;
	enableCdvr? : boolean;
	enableCatchUp? : boolean;
	enableStartOver? : boolean;
	enableTrickPlay? : boolean;
	externalId? : string;
}

/** 
* Asset info
**/
export class KalturaAsset extends KalturaObjectBase {

    readonly id : number;
	type : number;
	name : string;
	multilingualName : KalturaMultilingualString;
	description : string;
	multilingualDescription : KalturaMultilingualString;
	images : KalturaMediaImage[];
	mediaFiles : KalturaMediaFile[];
	metas : { [key : string] : KalturaValue};
	tags : { [key : string] : KalturaMultilingualStringValueArray};
	startDate : number;
	endDate : number;
	enableCdvr : boolean;
	enableCatchUp : boolean;
	enableStartOver : boolean;
	enableTrickPlay : boolean;
	externalId : string;

    constructor(data? : KalturaAssetArgs)
    {
        super(data);
        if (typeof this.images === 'undefined') this.images = [];
		if (typeof this.mediaFiles === 'undefined') this.mediaFiles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAsset' },
				id : { type : 'n', readOnly : true },
				type : { type : 'n' },
				name : { type : 's' },
				multilingualName : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				description : { type : 's' },
				multilingualDescription : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				images : { type : 'a', subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' },
				mediaFiles : { type : 'a', subTypeConstructor : KalturaMediaFile, subType : 'KalturaMediaFile' },
				metas : { type : 'm', subTypeConstructor : KalturaValue, subType : 'KalturaValue' },
				tags : { type : 'm', subTypeConstructor : KalturaMultilingualStringValueArray, subType : 'KalturaMultilingualStringValueArray' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				enableCdvr : { type : 'b' },
				enableCatchUp : { type : 'b' },
				enableStartOver : { type : 'b' },
				enableTrickPlay : { type : 'b' },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAsset',KalturaAsset);
