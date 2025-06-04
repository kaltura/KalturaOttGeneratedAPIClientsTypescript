
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSemanticQueryPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    subQueriesCount? : number;
	defaultQueriesCount? : number;
	assetsPerCollectionCount? : number;
}


export class KalturaSemanticQueryPartnerConfiguration extends KalturaObjectBase {

    subQueriesCount : number;
	defaultQueriesCount : number;
	assetsPerCollectionCount : number;

    constructor(data? : KalturaSemanticQueryPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSemanticQueryPartnerConfiguration' },
				subQueriesCount : { type : 'n' },
				defaultQueriesCount : { type : 'n' },
				assetsPerCollectionCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSemanticQueryPartnerConfiguration',KalturaSemanticQueryPartnerConfiguration);
