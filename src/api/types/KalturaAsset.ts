
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaMediaImage } from './KalturaMediaImage';
import { KalturaMediaFile } from './KalturaMediaFile';
import { KalturaValue } from './KalturaValue';
import { KalturaMultilingualStringValueArray } from './KalturaMultilingualStringValueArray';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetArgs  extends KalturaObjectBaseArgs {
    type? : number;
	multilingualName? : KalturaTranslationToken[];
	multilingualDescription? : KalturaTranslationToken[];
	metas? : { [key : string] : KalturaValue};
	tags? : { [key : string] : KalturaMultilingualStringValueArray};
	startDate? : number;
	endDate? : number;
	externalId? : string;
}


export class KalturaAsset extends KalturaObjectBase {

    readonly id : number;
	type : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	readonly images : KalturaMediaImage[];
	readonly mediaFiles : KalturaMediaFile[];
	metas : { [key : string] : KalturaValue};
	tags : { [key : string] : KalturaMultilingualStringValueArray};
	startDate : number;
	endDate : number;
	readonly createDate : number;
	readonly updateDate : number;
	externalId : string;

    constructor(data? : KalturaAssetArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
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
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				images : { type : 'a', readOnly : true, subTypeConstructor : KalturaMediaImage, subType : 'KalturaMediaImage' },
				mediaFiles : { type : 'a', readOnly : true, subTypeConstructor : KalturaMediaFile, subType : 'KalturaMediaFile' },
				metas : { type : 'm', subTypeConstructor : KalturaValue, subType : 'KalturaValue' },
				tags : { type : 'm', subTypeConstructor : KalturaMultilingualStringValueArray, subType : 'KalturaMultilingualStringValueArray' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAsset',KalturaAsset);
