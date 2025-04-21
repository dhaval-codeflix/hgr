export interface IBasicDetails {
    status: string
    message: string
    data: Data
}

export interface Data {
    data_types: DataType[]
    columns: Column[]
}

export interface DataType {
    id: number
    data_type_name: string
    data_type_class: string
    data_type_icon: string
}

export interface Column {
    id: string | number
    heading: string
    is_editable: boolean
    column_data_type?: number
    meta_prop?: string
}
