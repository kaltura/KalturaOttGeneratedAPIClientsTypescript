
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByQualityActionArgs  extends KalturaFilterActionArgs {
    typeQualityIn? : string;
}


export class KalturaFilterFileByQualityAction extends KalturaFilterAction {

    typeQualityIn : string;

    constructor(data? : KalturaFilterFileByQualityActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityAction' },
				typeQualityIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByQualityAction',KalturaFilterFileByQualityAction);
