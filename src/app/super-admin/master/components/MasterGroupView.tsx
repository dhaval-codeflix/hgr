import BoardAccordion from '@/components/accordions/BoardAccordion'
import React, { Fragment, useState } from 'react'
import { Table, TableCell, TableHeaderGroup, TableRow, TableRowGroup } from '@/components/table'
import CheckBox from '@/components/form/checkboxs/CheckBox'
import PlusIcon from '@/assets/icons/PlusIcon'
import useGetAssetMasterGroup from '@/api/hooks/queries/super-admin/master/useGetAssetMasterGroup'
import { UseQueryResult } from '@tanstack/react-query'
import { IAssetMasterApiQuery, IData } from '@/api/interfaces/queries/super-admin/master/useGetAssetMasterGroup.interface'
import { AxiosResponse } from 'axios'
import TableSkeleton from '@/components/skeleton/TableSkeleton'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import TableActionWrapper from '@/components/actions/TableActionWrapper'
import { PopoverClose } from '@radix-ui/react-popover'
import TrashIcon from '@/assets/icons/TrashIcon'
import MultiSelectComboBox from '@/components/form/combobox/MultiSelectComboBox'
import CellInputField from '@/components/form/inputs/CellInputField'
import SingleSelectComboBox from '@/components/form/combobox/SingleSelectComboBox'
import BottomBar from '@/components/bottom-bar/BottomBar'

const MasterGroupView = () => {
    const [title, setTitle] = useState<string>('Asset Master')
    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([])
    const [selectedRowIndex, setSelectedRowIndex] = useState<number[]>([])
    const assetMasterQuery: UseQueryResult<AxiosResponse<IAssetMasterApiQuery>, Error> = useGetAssetMasterGroup()
    const form = useForm<Pick<IData, 'rows'>>({
        values: {
            rows: assetMasterQuery.data?.data.data.rows || [],
        }
    })

    const assetMasterRowData = useFieldArray({
        name: 'rows',
        control: form.control,
        keyName: '_id'
    })
    console.log(assetMasterRowData.fields)
    // const data = {
    //     columns: [
    //         {
    //             heading: "Asset Type"
    //         },
    //         {
    //             heading: "Manufacturer"
    //         },
    //         {
    //             heading: "Type"
    //         },
    //         {
    //             heading: "Model"
    //         },
    //         {
    //             heading: "Engine Count"
    //         },
    //         {
    //             heading: "Applicable Engines"
    //         },
    //         {
    //             heading: "LG Count"
    //         },
    //         {
    //             heading: "LG Position"
    //         },
    //         {
    //             heading: "Applicable LG"
    //         },
    //         {
    //             heading: "Applicable APU"
    //         },

    //     ]
    // }
    if (assetMasterQuery.isLoading) {
        return <TableSkeleton cols={4} rows={8} />
    }
    return (
        <Fragment>
            <BoardAccordion title={title} setTitle={setTitle} totalItems={assetMasterRowData.fields.length}>
                <Table layout='table-auto'>
                    <TableHeaderGroup>
                        <TableRow>
                            <TableCell
                                className='min-w-[40px] w-[40px] max-w-[40px]'
                                variant='heading'
                            >
                                <CheckBox
                                    isCheckBoxChecked={assetMasterRowData.fields.length ? assetMasterRowData.fields.length === selectedRowIds.length : false}
                                    onClick={() => {
                                        if (selectedRowIds.length === assetMasterRowData.fields.length) {
                                            setSelectedRowIds([])
                                            setSelectedRowIndex([])
                                        } else {
                                            setSelectedRowIds(assetMasterRowData.fields.map(i => i.id))
                                            setSelectedRowIndex(assetMasterRowData.fields.map((_i, index) => index))
                                        }
                                    }}
                                />
                            </TableCell>
                            {
                                assetMasterQuery.data?.data.data.columns.map((column, colIndex) => (
                                    <TableCell
                                        key={colIndex}
                                        variant='heading'
                                        align='left'

                                    >
                                        {column.heading}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHeaderGroup>
                    <TableRowGroup className='relative'>
                        {
                            assetMasterRowData.fields.map((item, rowIndex) => (
                                <TableRow key={item._id} className='group relative'>
                                    <TableCell
                                        className='min-w-[40px] w-[40px] max-w-[40px]'

                                    >
                                        <TableActionWrapper rowIndex={rowIndex} remove={assetMasterRowData.remove} >
                                            <div className='popover-item'>
                                                <PopoverClose onClick={() => {
                                                    assetMasterRowData.remove(rowIndex)
                                                }} className='popover-item-close'>
                                                    <TrashIcon />Delete
                                                </PopoverClose>
                                            </div>
                                        </TableActionWrapper>
                                        <CheckBox
                                            key={item._id}
                                            isCheckBoxChecked={selectedRowIds.includes(item.id)}
                                            onClick={() => {
                                                if (selectedRowIds.includes(item.id)) {
                                                    setSelectedRowIds(selectedRowIds.filter(i => i !== item.id))
                                                    setSelectedRowIndex((prevIndexes) => prevIndexes.filter((i) => i !== rowIndex));

                                                } else {
                                                    setSelectedRowIds([...selectedRowIds, item.id])
                                                    setSelectedRowIndex((prevIndexes) => [...prevIndexes, rowIndex]);
                                                }
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.asset_type_id.selected_item`}
                                            render={({ field: { value, onChange } }) => (
                                                <SingleSelectComboBox
                                                    listItems={assetMasterQuery.data?.data.data.columns[0].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    id={item.id}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.manufacturer_id.selected_item`}
                                            render={({ field: { value, onChange } }) => (
                                                <SingleSelectComboBox
                                                    listItems={assetMasterQuery.data?.data.data.columns[1].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    id={item.id}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.type_id.selected_item`}
                                            render={({ field: { value, onChange } }) => (
                                                <SingleSelectComboBox
                                                    listItems={assetMasterQuery.data?.data.data.columns[2].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    id={item.id}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.model_ids`}
                                            render={({ field: { onChange, value } }) => (
                                                <MultiSelectComboBox
                                                    listItems={assetMasterQuery.data?.data.data.columns[3].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    onChangeHandler={() => { }}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align='left'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.eng_count`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <CellInputField
                                                            type="text"
                                                            inputMode="numeric"
                                                            pattern="[0-9]*"
                                                            onChange={(e) => {
                                                                const numericValue = e.target.value.replace(/\D/g, "");
                                                                onChange(numericValue);
                                                            }}
                                                            value={value}
                                                        />
                                                    )}
                                                />
                                                : <p className='text-left w-full cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.applicable_eng_type_ids`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <MultiSelectComboBox
                                                            listItems={assetMasterQuery.data?.data.data.columns[5].item_list || []}
                                                            onChange={onChange}
                                                            value={value}
                                                            onChangeHandler={() => { }}
                                                        />
                                                    )}
                                                /> : <p className='text-left w-full px-6 cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                    <TableCell align='left'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.lg_count`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <CellInputField
                                                            type="text"
                                                            inputMode="numeric"
                                                            pattern="[0-9]*"
                                                            onChange={(e) => {
                                                                const numericValue = e.target.value.replace(/\D/g, "");
                                                                onChange(numericValue);
                                                            }}
                                                            value={value}
                                                        />
                                                    )}
                                                /> : <p className='text-left w-full px-6 cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.lg_position`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <MultiSelectComboBox
                                                            listItems={assetMasterQuery.data?.data.data.columns[7].item_list || []}
                                                            onChange={onChange}
                                                            value={value}
                                                            onChangeHandler={() => { }}
                                                        />
                                                    )}
                                                /> : <p className='text-left w-full px-6 cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.applicable_lg_type_ids`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <MultiSelectComboBox
                                                            listItems={assetMasterQuery.data?.data.data.columns[8].item_list || []}
                                                            onChange={onChange}
                                                            value={value}
                                                            onChangeHandler={() => { }}
                                                        />
                                                    )}
                                                /> : <p className='text-left w-full px-6 cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                    <TableCell childrenClassName='p-0'>
                                        {
                                            form.watch(`rows.${rowIndex}.asset_type_id.selected_item`) === 1 ?
                                                <Controller
                                                    control={form.control}
                                                    name={`rows.${rowIndex}.applicable_apu_type_ids`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <MultiSelectComboBox
                                                            listItems={assetMasterQuery.data?.data.data.columns[9].item_list || []}
                                                            onChange={onChange}
                                                            value={value}
                                                            onChangeHandler={() => { }}
                                                        />
                                                    )}
                                                /> : <p className='text-left w-full px-6 cursor-not-allowed'>-</p>
                                        }

                                    </TableCell>
                                </TableRow>
                            ))
                        }

                        <TableRow>
                            <TableCell
                                className='min-w-[40px] w-[40px] max-w-[40px]'>
                                <CheckBox disabled />

                            </TableCell>
                            <TableCell
                                className='min-w-[41px] w-[41px] max-w-[41px] relative'
                            >
                                <div className='gap-2 flex px-6 left-0 absolute z-[1] items-center cursor-pointer' onClick={() => {
                                    assetMasterRowData.append({
                                        id: 0,
                                        type_id: null,
                                        applicable_apu_type_ids: [],
                                        applicable_eng_type_ids: [],
                                        applicable_lg_type_ids: [],
                                        asset_type_id: null,
                                        eng_count: 0,
                                        lg_count: 0,
                                        lg_position: [],
                                        manufacturer_id: null,
                                        model_ids: []

                                    })
                                    // createAssetTypeMutation.mutate("", {
                                    //     onSuccess: (data) => {
                                    //         assetTypeRowsData.remove(assetTypeRowsData.fields.length)
                                    //         assetTypeRowsData.append({
                                    //             id: data.data.data.id,
                                    //             asset_type: {
                                    //                 selected_item: 0,

                                    //             },
                                    //             icon: 'plus-icon',
                                    //             applicable_platforms: { selected_items: [] },
                                    //             system_board_for_brokerage: { selected_items: [] },
                                    //             system_board_for_records: { selected_items: [] }
                                    //         })
                                    //     }
                                    // })

                                }}>
                                    <PlusIcon /> Add Row
                                </div>
                            </TableCell>
                            {
                                Array(9).fill(0).map((i, index) => (
                                    <TableCell key={index} className='border-l-0'>
                                        {''}
                                    </TableCell>
                                ))
                            }
                        </TableRow>

                    </TableRowGroup>
                </Table >
            </BoardAccordion >
            <BottomBar
                deleteRowHandler={() => {
                    setSelectedRowIds([])
                    setSelectedRowIndex([])
                    assetMasterRowData.remove(selectedRowIndex)
                }}
                selectedRowIds={selectedRowIds}
                setSelectedRowIds={setSelectedRowIds} />

        </Fragment >
    )
}

export default MasterGroupView