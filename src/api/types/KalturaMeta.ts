
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaMetaDataType } from './KalturaMetaDataType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multilingualName? : KalturaTranslationToken[];
	systemName? : string;
	dataType? : KalturaMetaDataType;
	multipleValue? : boolean;
	isProtected? : boolean;
	helpText? : string;
	features? : string;
	parentId? : string;
}


export class KalturaMeta extends KalturaObjectBase {

    readonly id : string;
	name : string;
	multilingualName : KalturaTranslationToken[];
	systemName : string;
	dataType : KalturaMetaDataType;
	multipleValue : boolean;
	isProtected : boolean;
	helpText : string;
	features : string;
	parentId : string;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaMetaArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeta' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				systemName : { type : 's' },
				dataType : { type : 'es', subTypeConstructor : KalturaMetaDataType, subType : 'KalturaMetaDataType' },
				multipleValue : { type : 'b' },
				isProtected : { type : 'b' },
				helpText : { type : 's' },
				features : { type : 's' },
				parentId : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMeta',KalturaMeta);
