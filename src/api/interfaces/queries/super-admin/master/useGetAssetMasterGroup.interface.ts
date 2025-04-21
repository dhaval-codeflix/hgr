export interface IAssetMasterApiQuery {
    status: string
    message: string
    data: IData
}

export interface IData {
    columns: Column[]
    rows: Row[]
}

export interface Column {
    key: string
    heading: string
    is_editable: boolean
    item_list?: ItemList[]
}

export interface ItemList {
    value: number
    name: string
}

export interface Row {
    id: number
    asset_type_id: AssetTypeId | null
    manufacturer_id: ManufacturerId | null
    type_id: TypeId | null
    model_ids: number[]
    eng_count: number
    applicable_eng_type_ids: number[]
    lg_count: number
    lg_position: number[]
    applicable_lg_type_ids: number[]
    applicable_apu_type_ids: number[]
}

export interface AssetTypeId {
    selected_item: number
}

export interface ManufacturerId {
    selected_item: number
}

export interface TypeId {
    selected_item: number
}
