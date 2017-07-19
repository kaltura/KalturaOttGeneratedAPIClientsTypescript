
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialCommentArgs  extends KalturaObjectBaseArgs {
    header? : string;
	text? : string;
	createDate? : number;
	writer? : string;
}


export class KalturaSocialComment extends KalturaObjectBase {

    header : string;
	text : string;
	createDate : number;
	writer : string;

    constructor(data? : KalturaSocialCommentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialComment' },
				header : { type : 's' },
				text : { type : 's' },
				createDate : { type : 'n' },
				writer : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialComment',KalturaSocialComment);
