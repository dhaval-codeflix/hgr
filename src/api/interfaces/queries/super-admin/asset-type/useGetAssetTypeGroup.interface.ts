export interface IAssetTypeGroupApiQuery {
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
    item_list: ItemList[]
    selected_items?: number[]
}

export interface ItemList {
    value: number
    name: string
}

export interface Row {
    id: number
    icon: string
    asset_type: AssetType
    applicable_platforms: ApplicablePlatforms
    system_board_for_brokerage: SystemBoardForBrokerage
    system_board_for_records: SystemBoardForRecords
}

export interface AssetType {
    selected_item: number
}

export interface ApplicablePlatforms {
    selected_items: number[]
}

export interface SystemBoardForBrokerage {
    selected_items: number[]
}

export interface SystemBoardForRecords {
    selected_items: number[]
}
