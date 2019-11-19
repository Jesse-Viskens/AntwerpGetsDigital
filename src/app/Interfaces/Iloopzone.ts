export interface FieldAliases {
}

export interface SpatialReference {
}

export interface ILoopzone {
    OBJECTID_1: number;
    OBJECTID: number;
    ID: string;
    EBDD?: number;
    EEDD?: any;
    PUBL: string;
    NAAM: string;
    STRAATNAAM: string;
    POSTCODE: string;
    DISTRICT: string;
    GROND_OPP: number;
    OPP_HA?: number;
    LIGGING: string;
    BEZOEKERSAANTAL: string;
    AANTAL_KLACHTEN: string;
    ALGEMEEN_UITZICHT: string;
    NETHEID: string;
    STAAT_AFSLUITING: string;
    HOOGTE_AFSLUITING: string;
    MATERIAAL_AFSLUITING: string;
    STAAT_VUILNISBAKKEN: string;
    AANTAL_VUILNISBAKKEN?: number;
    STAAT_POORTEN: string;
    AANTAL_POORTEN?: number;
    STAAT_ZITBANKEN: string;
    AANTAL_ZITBANKEN?: number;
    VERLICHTING: string;
    ANDERE_OBJECTEN: string;
    TYPE_ONDERGROND: string;
    TYPE_BEPLANTING: string;
    QUOTERING_ALGEMEEN: string;
    QUOT_SCALE?: number;
    Shape_Length: number;
    Shape_Area: number;
}

export interface Geometry {
    rings: number[][][];
}

export interface Feature {
    attributes: ILoopzone;
    geometry: Geometry;
}

export interface RootObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: any[];
    features: Feature[];
}
export interface GLocation{
    lat: number;
    lng: number;
}
export interface Zone{
    marks: GLocation[];
}