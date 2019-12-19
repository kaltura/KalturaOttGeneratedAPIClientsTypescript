
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentAction, KalturaBaseSegmentActionArgs } from './KalturaBaseSegmentAction';

export interface KalturaKsqlSegmentActionArgs  extends KalturaBaseSegmentActionArgs {
    ksql? : string;
}


export class KalturaKsqlSegmentAction extends KalturaBaseSegmentAction {

    ksql : string;

    constructor(data? : KalturaKsqlSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaKsqlSegmentAction' },
				ksql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaKsqlSegmentAction',KalturaKsqlSegmentAction);
