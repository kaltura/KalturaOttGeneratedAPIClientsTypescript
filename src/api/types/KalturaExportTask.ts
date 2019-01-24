
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExportDataType } from './KalturaExportDataType';
import { KalturaExportType } from './KalturaExportType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaExportTaskArgs  extends KalturaObjectBaseArgs {
    alias? : string;
	name? : string;
	dataType? : KalturaExportDataType;
	filter? : string;
	exportType? : KalturaExportType;
	frequency? : number;
	notificationUrl? : string;
	vodTypes? : KalturaIntegerValue[];
	isActive? : boolean;
}


export class KalturaExportTask extends KalturaObjectBase {

    readonly id : number;
	alias : string;
	name : string;
	dataType : KalturaExportDataType;
	filter : string;
	exportType : KalturaExportType;
	frequency : number;
	notificationUrl : string;
	vodTypes : KalturaIntegerValue[];
	isActive : boolean;

    constructor(data? : KalturaExportTaskArgs)
    {
        super(data);
        if (typeof this.vodTypes === 'undefined') this.vodTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportTask' },
				id : { type : 'n', readOnly : true },
				alias : { type : 's' },
				name : { type : 's' },
				dataType : { type : 'es', subTypeConstructor : KalturaExportDataType, subType : 'KalturaExportDataType' },
				filter : { type : 's' },
				exportType : { type : 'es', subTypeConstructor : KalturaExportType, subType : 'KalturaExportType' },
				frequency : { type : 'n' },
				notificationUrl : { type : 's' },
				vodTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				isActive : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExportTask',KalturaExportTask);
