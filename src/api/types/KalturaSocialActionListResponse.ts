
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialAction } from './KalturaSocialAction';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSocialActionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSocialAction[];
}


export class KalturaSocialActionListResponse extends KalturaListResponse {

    objects : KalturaSocialAction[];

    constructor(data? : KalturaSocialActionListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialActionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSocialAction, subType : 'KalturaSocialAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialActionListResponse',KalturaSocialActionListResponse);
