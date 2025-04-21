import useBasicDetailCreateColumn from '@/api/hooks/mutations/super-admin/asset-type/basic-details/useBasicDetailCreateColumn'
import useBasicDetailUpdateColumn from '@/api/hooks/mutations/super-admin/asset-type/basic-details/useBasicDetailUpdateColumn'
import useGetBasicDetails from '@/api/hooks/queries/super-admin/asset-type/basic-details/useGetBasicDetails'
import { IBasicDetails } from '@/api/interfaces/queries/super-admin/asset-type/basic-details/useGetBasicDetails.interface'
// import AlphaNumberIcon from '@/assets/icons/cell-components-icons/AlphaNumberIcon'
// import DateIcon from '@/assets/icons/cell-components-icons/DateIcon'
// import DropDownIcon from '@/assets/icons/cell-components-icons/DropDownIcon'
// import EmailIcon from '@/assets/icons/cell-components-icons/EmailIcon'
// import LongTextIcon from '@/assets/icons/cell-components-icons/LongTextIcon'
// import NumberIcon from '@/assets/icons/cell-components-icons/NumberIcon'
// import RadioButtonIcon from '@/assets/icons/cell-components-icons/RadioButtonIcon'
import RoundedPlusIcon from '@/assets/icons/RoundedPlusIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import HoverActionWrapper from '@/components/actions/HoverActionWrapper'
import CheckBox from '@/components/form/checkboxs/CheckBox'
import Popover from '@/components/popover/Popover'
import TableSkeleton from '@/components/skeleton/TableSkeleton'
import { TableHeaderGroup, TableCell, TableRowGroup, TableRow, Table } from '@/components/table'
import { PopoverClose } from '@radix-ui/react-popover'
import { UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

type BasicDetailsGroupViewProps = {
    assetTypeId: string
}
type MenuOptions = {
    id: number
    name: string
}
const BasicDetailsGroupView: FC<BasicDetailsGroupViewProps> = ({ assetTypeId }) => {
    const getBasicDetailsQuery: UseQueryResult<AxiosResponse<IBasicDetails>, Error> = useGetBasicDetails(assetTypeId)
    const [inputFocus, setInputFocus] = useState(false)
    const [menuOptions, setMenuOptions] = useState<MenuOptions[]>([]);

    useEffect(() => {
        if (!getBasicDetailsQuery.isLoading && getBasicDetailsQuery.data) {
            const { data } = getBasicDetailsQuery;
            const menuList: MenuOptions[] = data.data?.data?.data_types?.map(({ id, data_type_name }) => ({
                id,
                name: data_type_name
            }))
            setMenuOptions(menuList);
        }
    }, [getBasicDetailsQuery.isLoading, getBasicDetailsQuery.data]);

    const createColumnMutation = useBasicDetailCreateColumn()
    const updateColumnMutation = useBasicDetailUpdateColumn()

    const [inputValue, setInputValue] = useState<string>('')

    // const data = {
    //     columns: [
    //         {
    //             heading: "Manufacturer"
    //         },
    //         {
    //             heading: "Engine Type"
    //         },
    //         // {
    //         //     heading: "Part Number"
    //         // },
    //         // {
    //         //     heading: "Serial Number"
    //         // },
    //         // {
    //         //     heading: "Position"
    //         // },
    //         // {
    //         //     heading: "MFG Date"
    //         // },
    //         // {
    //         //     heading: "TSN"
    //         // },
    //         // {
    //         //     heading: "CSN"
    //         // },
    //         // {
    //         //     heading: "Status"
    //         // },
    //         // {
    //         //     heading: "Location"
    //         // },
    //         // {
    //         //     heading: "Owner"
    //         // },
    //         // {
    //         //     heading: "Operator"
    //         // }
    //     ]
    // }

    const form = useForm({
        values: {
            columns: getBasicDetailsQuery.data?.data.data.columns
        }
    })
    const columnsArray = useFieldArray({
        name: 'columns',
        keyName: '_id',
        control: form.control
    })

    // const menuOptions = [
    //     { name: "Date", icon: <DateIcon /> },
    //     { name: "Whole Number", icon: <NumberIcon /> },
    //     { name: "Alpha - Numeric", icon: <AlphaNumberIcon /> },
    //     { name: "Long text", icon: <LongTextIcon /> },
    //     { name: "Drop Down", icon: <DropDownIcon /> },
    //     { name: "Radio Button", icon: <RadioButtonIcon /> },
    //     { name: "Email", icon: <EmailIcon /> },
    // ];

    if (getBasicDetailsQuery.isLoading) {
        return <TableSkeleton cols={4} rows={8} />
    }

    return (
        <div>
            <Table layout='table-auto' className='w-auto'>
                <TableHeaderGroup>
                    <TableCell
                        className='min-w-[40px] max-w-[40px]'
                        variant='heading'
                    >
                        <CheckBox
                            disabled
                        // isCheckBoxChecked={assetTypeRowsData.fields.length ? assetTypeRowsData.fields.length === selectedRowIds.length : false}
                        // onClick={() => {
                        //     if (selectedRowIds.length === assetTypeRowsData.fields.length) {
                        //         setSelectedRowIds([])
                        //     } else {
                        //         setSelectedRowIds(assetTypeRowsData.fields.map(i => i.id))
                        //     }
                        // }}
                        />
                    </TableCell>
                    {
                        columnsArray.fields.map((column, index) => (
                            <TableCell key={column._id} variant='heading'>
                                <div className='w-full flex items-center justify-between px-4 gap-2 group'>
                                    <Controller
                                        name={`columns.${index}.heading`}
                                        control={form.control}
                                        render={({ field: { onChange, value } }) => {
                                            return <Fragment>
                                                <input
                                                    readOnly={!column.is_editable}
                                                    onFocus={() => setInputFocus(true)}
                                                    onBlur={() => {
                                                        setInputFocus(false)
                                                        updateColumnMutation.mutate({
                                                            column_name: inputValue,
                                                            id: Number(column.id),
                                                        });
                                                    }}
                                                    size={form.watch(`columns.${index}.heading`).length}
                                                    className='focus:outline-none focus:w-full bg-transparent rounded-sm px-1 border-[1px]
                                                border-transparent hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 read-only:hover:border-transparent
                                                read-only:focus:border-transparent'
                                                    onChange={(e) => {
                                                        onChange(e.target.value)
                                                        setInputValue(e.target.value)
                                                    }}
                                                    value={value} />
                                            </Fragment>
                                        }}

                                    />
                                    {
                                        (column.is_editable) &&
                                        (!inputFocus && <HoverActionWrapper>
                                            <div className='popover-item'>
                                                <PopoverClose
                                                    onClick={() => {
                                                        columnsArray.remove(index)
                                                        updateColumnMutation.mutate({
                                                            is_deleted: 1,
                                                            id: Number(column.id)
                                                        })
                                                    }}
                                                    key={index}
                                                    className="popover-item-close">
                                                    <TrashIcon />
                                                    Delete
                                                </PopoverClose>
                                            </div>

                                        </HoverActionWrapper>)
                                    }

                                </div>

                            </TableCell>
                        ))
                    }
                    <TableCell variant='heading' align='left'>
                        <Popover trigger={<RoundedPlusIcon />} contentClass='h-[300px] overflow-auto'>
                            {menuOptions.map((option, index) => (
                                <div key={index} className='popover-item'>
                                    <PopoverClose
                                        onClick={() => {

                                            createColumnMutation.mutate({
                                                asset_type_id: Number(assetTypeId),
                                                column_name: 'column',
                                                master_data_type_id: option.id
                                            },
                                                {
                                                    onSuccess: (data) => {
                                                        columnsArray.append({
                                                            heading: `column`,
                                                            is_editable: true,
                                                            id: data.data.data.columnId
                                                        })
                                                    }
                                                })
                                        }}
                                        className="popover-item-close">
                                        {/* <div> {option.icon}</div> */}
                                        {option.name}
                                    </PopoverClose>
                                </div>
                            ))}
                        </Popover>
                    </TableCell>
                </TableHeaderGroup>
                <TableRowGroup>
                    <TableRow>
                        <TableCell
                            className='min-w-[40px] max-w-[40px]'

                        >
                            <CheckBox
                                disabled
                            // key={item._id}
                            // isCheckBoxChecked={selectedRowIds.includes(item.id)}
                            // onClick={() => {
                            //     if (selectedRowIds.includes(item.id)) {
                            //         setSelectedRowIds(selectedRowIds.filter(i => i !== item.id))
                            //     } else {
                            //         setSelectedRowIds([...selectedRowIds, item.id])
                            //     }
                            // }}
                            />
                        </TableCell>
                        {
                            columnsArray.fields.map((column) => (
                                <TableCell key={column._id} variant='cell'>{''}</TableCell>
                            ))
                        }
                        <TableCell variant='cell'>{''}</TableCell>
                    </TableRow>
                </TableRowGroup>
            </Table>
        </div>
    )
}

export default BasicDetailsGroupView