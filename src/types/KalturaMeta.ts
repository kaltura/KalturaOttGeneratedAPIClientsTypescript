
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMultilingualString } from './KalturaMultilingualString';
import { KalturaMetaType } from './KalturaMetaType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multilingualName? : KalturaMultilingualString;
	systemName? : string;
	type? : KalturaMetaType;
	multipleValue? : boolean;
	isProtected? : boolean;
	helpText? : string;
	features? : string;
	parentId? : number;
}


export class KalturaMeta extends KalturaObjectBase {

    readonly id : number;
	name : string;
	multilingualName : KalturaMultilingualString;
	systemName : string;
	type : KalturaMetaType;
	multipleValue : boolean;
	isProtected : boolean;
	helpText : string;
	features : string;
	parentId : number;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaMetaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeta' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				multilingualName : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				systemName : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaMetaType, subType : 'KalturaMetaType' },
				multipleValue : { type : 'b' },
				isProtected : { type : 'b' },
				helpText : { type : 's' },
				features : { type : 's' },
				parentId : { type : 'n' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMeta',KalturaMeta);
