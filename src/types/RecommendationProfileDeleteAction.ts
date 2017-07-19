
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete recommendation engine by recommendation engine id
**/
export class RecommendationProfileDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : RecommendationProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recommendationprofile' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

