"use client"
import React, { Fragment, useEffect, useState } from 'react'
import PlusIcon from '@/assets/icons/PlusIcon'
import { UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import Accordion from '@/components/accordions/BoardAccordion'
import SingleSelectComboBox, { UpdatePayload } from '@/components/form/combobox/SingleSelectComboBox'
import { Table, TableCell, TableHeaderGroup, TableRow, TableRowGroup } from '@/components/table'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { IAssetTypeGroupApiQuery, IData } from '@/api/interfaces/queries/super-admin/asset-type/useGetAssetTypeGroup.interface'
import useGetAssetTypeGroup from '@/api/hooks/queries/super-admin/asset-type/useGetAssetTypeGroup'
import useUpdateAssetTypeList from '@/api/hooks/mutations/super-admin/asset-type/useUpdateAssetTypeList'
import MultiSelectComboBox from '@/components/form/combobox/MultiSelectComboBox'
import useUpdateAssetTypePlatforms from '@/api/hooks/mutations/super-admin/asset-type/useUpdateAssetTypePlatforms'
import useUpdateAssetTypeBoards from '@/api/hooks/mutations/super-admin/asset-type/useUpdateAssetTypeBoards'
import TableSkeleton from '@/components/skeleton/TableSkeleton'
import { PopoverClose } from '@radix-ui/react-popover'
import TrashIcon from '@/assets/icons/TrashIcon'
import { useRouter } from 'next/navigation'
import { ROUTER_PATH } from '@/constants/router-paths'
import TableActionWrapper from '@/components/actions/TableActionWrapper'
import useCreateAssetType from '@/api/hooks/mutations/super-admin/asset-type/useCreateAssetType'
import useUpdateAssetType from '@/api/hooks/mutations/super-admin/asset-type/useUpdateAssetType'
import CheckBox from '@/components/form/checkboxs/CheckBox'
import DialogBox from '@/components/dialogs/DialogBox'
import EngineIcon from '@/assets/icons/lib/EngineIcon'
import useCreateAssetTypeItem from '@/api/hooks/mutations/super-admin/asset-type/useCreateAssetTypeItem'
import { cn } from '@/utils/cn'
import Button from '@/components/form/buttons/Button'
import { libIcons } from './IconsLib'
import BottomBar from '@/components/bottom-bar/BottomBar'
import BasicDetailsIcon from '@/assets/icons/BasicDetailsIcon'
import useTakeActions from "@/api/hooks/mutations/super-admin/asset-type/useActions";


const AssetTypeGroupView = () => {
    const router = useRouter()

    const [title, setTitle] = useState<string>('Type')
    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([])
    const [selectedRowIndex, setSelectedRowIndex] = useState<number[]>([])
    const [isDialogBoxOpen, setIsDialogBoxOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<number[]>([])
    const [rowIndex, setRowIndex] = useState<null | number>(null)
    const [selectedIconIndex, setSelectedIconIndex] = useState(0)

    const assetTypeGroupQuery: UseQueryResult<AxiosResponse<IAssetTypeGroupApiQuery>, Error> = useGetAssetTypeGroup()

    const updateAssetTypeListMutation = useUpdateAssetTypeList()
    const updateAssetTypePlatformsMutation = useUpdateAssetTypePlatforms()
    const updateAssetTypeBoardsMutation = useUpdateAssetTypeBoards()
    const createAssetTypeMutation = useCreateAssetType()
    const updateAssetTypeMutation = useUpdateAssetType()
    const createAssetTypeItemMutation = useCreateAssetTypeItem()
    const takeActionMutation = useTakeActions();


    const form = useForm<Pick<IData, 'rows'>>({
        values: {
            rows: assetTypeGroupQuery.data?.data.data.rows || [],
        }
    })

    const assetTypeRowsData = useFieldArray({
        name: 'rows',
        control: form.control,
        keyName: '_id'
    })

    const itemListForm = useForm({
        values: {
            itemList: assetTypeGroupQuery.data?.data.data.columns[1].item_list || []
        }
    })

    useEffect(() => {
        if (!assetTypeGroupQuery.isLoading) {
            setSelectedItems(assetTypeGroupQuery.data?.data.data.columns[0].selected_items || [])
        }
    }, [assetTypeGroupQuery.data?.data.data.columns, assetTypeGroupQuery.isLoading])

    const listItemsArray = useFieldArray({
        name: `itemList`,
        control: itemListForm.control,
        keyName: "_id"
    })

    const onChangeAssetTypeBrokerageHandler = async (id: number | string, val: string | number | number[] | string[]) => {
        await updateAssetTypeBoardsMutation.mutateAsync({
            id: id as number, payload: { board_id: val as number[], platform_id: 1 }
        })
    }
    const onChangeAssetTypeRecordsHandler = async (id: number | string, val: string | number | number[] | string[]) => {
        await updateAssetTypeBoardsMutation.mutateAsync({
            id: id as number, payload: { board_id: val as number[], platform_id: 2 }
        })
    }
    const onChangeAssetTypePlatFormHandler = async (id: number | string, val: string | number | number[] | string[]) => {
        await updateAssetTypePlatformsMutation.mutateAsync({
            id: id as number, payload: { platform_id: val as number[] }
        })
    }
    const onChangeAssetTypeHandler = (rowId: number, selectedValue: number, previousValue: number) => {
        updateAssetTypeMutation.mutate({
            rowId: rowId,
            payload: {
                master_asset_types_id: selectedValue
            }
        })
        setSelectedItems(() => {
            const removePrevValue = selectedItems.filter(i => i !== previousValue)
            return [...removePrevValue, selectedValue]
        });
    }
    const onEditAssetTypeLableHandler = async (payload: UpdatePayload) => {
        await updateAssetTypeListMutation.mutateAsync({
            payload: payload
        })
    }
    const onDeleteAssetTypeLableHandler = async (index: number) => {
        listItemsArray.remove(index)

    }
    const onCreateAssetTypeLabelHandler = async (name: string) => {
        createAssetTypeItemMutation.mutate(name, {
            onSuccess: (data) => {
                listItemsArray.append({
                    name: name,
                    value: data.data.data.id
                })
            }
        })

    }
    const deleteRowHandler = () => {
        takeActionMutation.mutate({
            row_id: selectedRowIds,
            action: "delete",
        });
        setSelectedRowIds([])
        setSelectedRowIndex([])
        assetTypeRowsData.remove(selectedRowIndex)

    }

    if (assetTypeGroupQuery.isLoading) {
        return <TableSkeleton cols={4} rows={8} />
    }

    return (
        <Fragment>
            <Accordion title={title} setTitle={setTitle} totalItems={assetTypeRowsData.fields.length}>
                <Table layout='table-auto' className='w-full'>
                    <TableHeaderGroup>
                        <TableRow>
                            <TableCell
                                className='min-w-[40px] w-[40px] max-w-[40px]'
                                variant='heading'
                                columnIndex={0}
                            >
                                <CheckBox
                                    isCheckBoxChecked={assetTypeRowsData.fields.length ? assetTypeRowsData.fields.length === selectedRowIds.length : false}
                                    onClick={() => {
                                        if (selectedRowIds.length === assetTypeRowsData.fields.length) {
                                            setSelectedRowIds([])
                                            setSelectedRowIndex([])
                                        } else {
                                            setSelectedRowIds(assetTypeRowsData.fields.map(i => i.id))
                                            setSelectedRowIndex(assetTypeRowsData.fields.map((_i, index) => index))
                                        }
                                    }}
                                />
                            </TableCell>
                            {
                                assetTypeGroupQuery.data?.data.data.columns.map((column, colIndex) => (
                                    <TableCell
                                        key={colIndex + 1}
                                        variant='heading'
                                        align={column.heading !== 'Icon' ? 'left' : 'center'}
                                        className={cn(column.heading === 'Icon' && 'min-w-[40px] w-[40px] max-w-[40px]')}
                                        columnIndex={colIndex + 1}
                                    >
                                        {column.heading}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHeaderGroup>
                    <TableRowGroup className='relative'>
                        {
                            assetTypeRowsData.fields.map((item, rowIndex) => (
                                <TableRow key={item._id} isRowSelected={selectedRowIds.includes(item.id)} className='group relative'>
                                    <TableCell
                                        className='min-w-[40px] w-[40px] max-w-[40px]'
                                        columnIndex={0}

                                    >
                                        <TableActionWrapper rowIndex={rowIndex} remove={assetTypeRowsData.remove} >
                                            <div className='popover-item'>
                                                <PopoverClose onClick={() => {
                                                    router.push(ROUTER_PATH.superAdmin.assetType.basicDetails + `/${item.asset_type.selected_item}`)
                                                }} className='popover-item-close'>
                                                    <BasicDetailsIcon />
                                                    Basic details
                                                </PopoverClose>
                                            </div>
                                            <div className='popover-item'>
                                                <PopoverClose onClick={() => {
                                                    updateAssetTypeMutation.mutate({
                                                        rowId: item.id,
                                                        payload: {
                                                            is_deleted: 1
                                                        }
                                                    })
                                                    assetTypeRowsData.remove(rowIndex)
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
                                    <TableCell
                                        className='min-w-[40px] w-[40px] max-w-[40px] p-0'
                                        columnIndex={1}
                                    >
                                        <div
                                            className="cursor-pointer w-full h-full items-center flex justify-center"
                                            onClick={() => {
                                                setIsDialogBoxOpen(true);
                                                setRowIndex(rowIndex);
                                            }}
                                        >
                                            {(() => {
                                                const iconData = libIcons.find(i => i.name === form.watch(`rows.${rowIndex}.icon`));
                                                return iconData ? React.cloneElement(iconData.icon, { width: 15, height: 15 }) : <EngineIcon width={15} height={15} />;
                                            })()}
                                        </div>



                                    </TableCell>
                                    <TableCell childrenClassName='p-0' columnIndex={2}>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.asset_type.selected_item`}
                                            render={({ field: { onChange, value } }) => (
                                                <SingleSelectComboBox
                                                    listItems={listItemsArray.fields}
                                                    onChange={onChange}
                                                    value={value}
                                                    onChangeApiHandler={onChangeAssetTypeHandler}
                                                    onEditApiHandler={onEditAssetTypeLableHandler}
                                                    id={item.id}
                                                    form={itemListForm}
                                                    onAddApiHandler={onCreateAssetTypeLabelHandler}
                                                    selectedItems={selectedItems}
                                                    onDeleteLabelApiHandler={onDeleteAssetTypeLableHandler}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0' columnIndex={3}>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.applicable_platforms.selected_items`}
                                            render={({ field: { onChange, value } }) => (
                                                <MultiSelectComboBox
                                                    listItems={assetTypeGroupQuery.data?.data.data.columns[2].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    onChangeHandler={onChangeAssetTypePlatFormHandler}
                                                    id={item.id}
                                                />

                                            )}
                                        />

                                    </TableCell>
                                    <TableCell childrenClassName='p-0' columnIndex={4}>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.system_board_for_brokerage.selected_items`}
                                            render={({ field: { onChange, value } }) => (
                                                <MultiSelectComboBox
                                                    listItems={assetTypeGroupQuery.data?.data.data.columns[3].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    onChangeHandler={onChangeAssetTypeBrokerageHandler}
                                                    id={item.id}
                                                />

                                            )}
                                        />
                                    </TableCell>
                                    <TableCell childrenClassName='p-0' columnIndex={5}>
                                        <Controller
                                            control={form.control}
                                            name={`rows.${rowIndex}.system_board_for_records.selected_items`}
                                            render={({ field: { onChange, value } }) => (
                                                <MultiSelectComboBox
                                                    listItems={assetTypeGroupQuery.data?.data.data.columns[4].item_list || []}
                                                    onChange={onChange}
                                                    value={value}
                                                    onChangeHandler={onChangeAssetTypeRecordsHandler}
                                                    id={item.id}
                                                />

                                            )}
                                        />
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
                                    assetTypeRowsData.append({
                                        id: 0,
                                        asset_type: {
                                            selected_item: 0,

                                        },
                                        icon: 'plus-icon',
                                        applicable_platforms: { selected_items: [] },
                                        system_board_for_brokerage: { selected_items: [] },
                                        system_board_for_records: { selected_items: [] }
                                    })
                                    createAssetTypeMutation.mutate("", {
                                        onSuccess: (data) => {
                                            assetTypeRowsData.remove(assetTypeRowsData.fields.length)
                                            assetTypeRowsData.append({
                                                id: data.data.data.id,
                                                asset_type: {
                                                    selected_item: 0,

                                                },
                                                icon: 'plus-icon',
                                                applicable_platforms: { selected_items: [] },
                                                system_board_for_brokerage: { selected_items: [] },
                                                system_board_for_records: { selected_items: [] }
                                            })
                                        }
                                    })

                                }}>
                                    <PlusIcon /> Add Row
                                </div>
                            </TableCell>
                            {
                                Array(4).fill(0).map((i, index) => (
                                    <TableCell key={index} className='border-l-0'>
                                        {''}
                                    </TableCell>
                                ))
                            }
                        </TableRow>

                    </TableRowGroup>
                </Table >
            </Accordion >
            <BottomBar
                deleteRowHandler={deleteRowHandler}
                selectedRowIds={selectedRowIds}
                setSelectedRowIds={setSelectedRowIds} />
            <DialogBox
                setIsOpen={setIsDialogBoxOpen}
                isOpen={isDialogBoxOpen}
                title='Icons'
            >
                <div className='flex flex-col gap-4'>
                    <div className='rounded-[5.6px] border-[1px] border-solid-basic-neutral-200 p-2 flex items-center justify-normal gap-4 '>
                        <div className='w-[136px] h-[136px] bg-solid-basic-grayBlue-50 flex items-center justify-center rounded-[5.6px]'>
                            {React.cloneElement(libIcons[selectedIconIndex].icon, { width: 55, height: 55 })}
                        </div>
                        <div className='h-full w-[1px] bg-[#CCC]' />
                        <div className='flex gap-2 h-full justify-start items-start'>
                            {
                                libIcons.filter((i) => i.name !== 'plus-icon').map((i, index) => (
                                    <div key={i.name}
                                        onClick={() => {
                                            setSelectedIconIndex(index)
                                        }}
                                        className={cn('w-10 h-10 flex items-center justify-center cursor-pointer shrink-0 rounded-[4px] border-[0.5px] border-solid-basic-neutral-200',
                                            selectedIconIndex === index && 'bg-solid-basic-neutral-50'
                                        )}>
                                        {React.cloneElement(i.icon, { width: 24, height: 24 })}
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-4 border-t-[1px] border-solid-basic-neutral-200 pt-4'>

                        <Button variant='outline' className='w-[90px] h-[32px] px-4 py-2 font-normal text-sm' onClick={() => {
                            setIsDialogBoxOpen(false)
                        }}>Cancle</Button>
                        <Button onClick={() => {
                            form.setValue(`rows.${rowIndex || 0}.icon`, libIcons[selectedIconIndex].name)
                            setIsDialogBoxOpen(false)
                        }} className='w-[90px] h-[32px]
                                                        px-4 py-2 font-normal text-sm'>Save</Button>

                    </div>
                </div>
            </DialogBox>
        </Fragment >

    )
}

export default AssetTypeGroupView