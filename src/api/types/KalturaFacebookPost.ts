
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialNetworkComment, KalturaSocialNetworkCommentArgs } from './KalturaSocialNetworkComment';

export interface KalturaFacebookPostArgs  extends KalturaSocialNetworkCommentArgs {
    comments? : KalturaSocialNetworkComment[];
	link? : string;
}


export class KalturaFacebookPost extends KalturaSocialNetworkComment {

    comments : KalturaSocialNetworkComment[];
	link : string;

    constructor(data? : KalturaFacebookPostArgs)
    {
        super(data);
        if (typeof this.comments === 'undefined') this.comments = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookPost' },
				comments : { type : 'a', subTypeConstructor : KalturaSocialNetworkComment, subType : 'KalturaSocialNetworkComment' },
				link : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFacebookPost',KalturaFacebookPost);
