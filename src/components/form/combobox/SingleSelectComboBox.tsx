import { ItemList } from '@/api/interfaces/queries/super-admin/asset-type/useGetAssetTypeGroup.interface'
import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import PlusIcon from '@/assets/icons/PlusIcon'
import Popover from '@/components/popover/Popover'
import { IListItem } from '@/interfaces/form/dropdown/dropdown.interface'
import { cn } from '@/utils/cn'
import { Transition } from '@headlessui/react'
import { FC, Fragment, Ref, useEffect, useRef, useState } from 'react'
import React from 'react'
import { useClickAway } from "@uidotdev/usehooks";
import { UseFormReturn } from 'react-hook-form'
import { PopoverClose } from '@radix-ui/react-popover'
import TrashIcon from '@/assets/icons/TrashIcon'
import OutLineThreeDots from '@/assets/icons/OutLineThreeDots'
export type UpdatePayload = {
    id: number
    name: string
    is_deleted?: string
}

type ComboBox = {
    className?: string
    listItems: IListItem[]
    onChange: (val: number | string) => void
    value: string | number
    onChangeApiHandler?: (id: number, value: number, previousValue: number) => void
    onEditApiHandler?: (payload: UpdatePayload) => Promise<void>
    onAddApiHandler?: (val: string) => void
    id?: number
    form?: UseFormReturn<{ itemList: ItemList[] }>
    selectedItems?: number[]
    onDeleteLabelApiHandler?: (val: number) => void
}

const SingleSelectComboBox: FC<ComboBox> = (props) => {
    const { className, listItems, onChange, value, onChangeApiHandler, form, onAddApiHandler, selectedItems, id, onEditApiHandler, onDeleteLabelApiHandler } = props
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [isEditLabel, setIsEditLabel] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const comboBoxRef = useClickAway(() => {
        setIsFocused(false)
    });
    const [applyPayload, setApplyPayload] = useState<{ id: number, name: string, is_deleted?: number }[]>([])
    useEffect(() => {
        setIsEditLabel(false)
        if (isFocused) {
            inputRef.current?.focus()
        }
    }, [isFocused])

    return (
        <Fragment>
            <div ref={comboBoxRef as Ref<HTMLDivElement>} className="relative h-full w-full group/comboBox">
                {/* Trigger */}
                <div
                    className={cn(
                        'relative h-full px-6 py-2 flex items-center justify-between cursor-pointer ',
                        isFocused && 'bg-solid-basic-lightBlue-50',
                        className
                    )}
                    onClick={() => setIsFocused(true)}
                >
                    {isFocused ? (
                        <input
                            ref={inputRef}
                            onChange={(e) => setSearchText(e.target.value)}
                            value={searchText}
                            className="outline-none w-full font-medium text-sm leading-[22px] text-solid-basic-neutral-600 h-auto bg-transparent pr-2"
                            type="text"
                        />
                    ) : (
                        <p className="text-sm font-medium leading-[22px] text-solid-basic-neutral-600">
                            {value ? listItems.find((i) => i.value === value)?.name : 'Select Asset'}
                        </p>
                    )}
                    <DownArrowIcon
                        className={cn(isFocused ? 'rotate-180' : '', 'group-hover/comboBox:opacity-100 opacity-0')}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsFocused(!isFocused);
                        }}
                    />
                </div>
                {/* Select */}
                <Transition show={isFocused}>
                    <div className="w-full max-h-[300px] overflow-auto border-[1px] space-y-2 shadow bg-white absolute top-12 left-0 rounded-[5.6px] border-solid-basic-neutral-200 transition duration-100 ease-in data-[closed]:opacity-0 p-2 z-10">

                        {/* Add new label */}
                        {onAddApiHandler && (
                            listItems.filter(i => typeof i.name === 'string' && i.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())).length
                            === 0 && < button
                                onClick={() => {
                                    if (onAddApiHandler) { onAddApiHandler(searchText) }
                                    setSearchText('')

                                }}
                                className='flex items-center justify-center gap-2 bg-solid-basic-brand-500 rounded-[5.6px] px-4 py-2 w-full shrink-0 text-sm font-medium leading-[22px] text-white'>
                                <PlusIcon className='text-white' /> Create as a new label
                            </button>)
                        }
                        {
                            listItems
                                .map((i, index) => (
                                    <Fragment key={i.value}>
                                        {typeof i.name === 'string' &&
                                            i.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
                                            &&
                                            <div key={i.value} className={cn('px-4 rounded-[5.6px] hover:bg-solid-basic-grayBlue-50  flex items-center justify-between ',
                                                value === i.value && 'bg-solid-basic-grayBlue-50',
                                                'focus:border-[1px] focus:border-solid-basic-neutral-500 focus:border-dashed',
                                                selectedItems?.includes(i.value as number) && 'bg-solid-basic-grayBlue-50 '
                                            )}>

                                                <input type="text"
                                                    disabled={selectedItems?.includes(i.value as number)}
                                                    readOnly={!isEditLabel}
                                                    className={cn("outline-none w-full  py-2 font-medium leading-[22px] text-sm text-solid-basic-neutral-600 bg-transparent border-[1px] border-transparent disabled:bg-solid-basic-grayBlue-50 disabled:cursor-not-allowed",
                                                        isEditLabel ? "cursor-text " : "cursor-pointer",

                                                    )}
                                                    value={form ? form.watch(`itemList.${index}.name`) : i.name}
                                                    {...(form ? form.register(`itemList.${index}.name`) : {})} onClick={() => {
                                                        if (!isEditLabel) {
                                                            const previousValue = value
                                                            onChange(i.value)
                                                            setIsFocused(false)
                                                            if (onChangeApiHandler) {
                                                                if (typeof i.value === 'number') {
                                                                    onChangeApiHandler(id as number, i.value, previousValue as number);
                                                                }
                                                            }
                                                        }
                                                    }} ></input>
                                                {
                                                    isEditLabel &&
                                                    <Popover triggerClass={''} contentClass='' trigger={<OutLineThreeDots />}>
                                                        <div className='popover-item'>
                                                            <PopoverClose onClick={() => {

                                                                if (onDeleteLabelApiHandler) {
                                                                    setApplyPayload(() => {
                                                                        return [...applyPayload, {
                                                                            id: i.value as number,
                                                                            name: i.name as string,
                                                                            is_deleted: 1
                                                                        }]
                                                                    })

                                                                    onDeleteLabelApiHandler(index)
                                                                }


                                                            }} className='popover-item-close'>
                                                                <TrashIcon />Delete
                                                            </PopoverClose>
                                                        </div>

                                                    </Popover>
                                                }

                                            </div>
                                        }
                                    </Fragment>
                                ))
                        }
                        {
                            onEditApiHandler && <div>
                                <div className='w-full h-[1px] bg-solid-basic-neutral-200'></div>
                                {/* Edit label */}
                                <p
                                    className="text-center cursor-pointer hover:bg-solid-basic-grayBlue-50 rounded-[5.6px] px-4 py-2 font-medium leading-[22px] text-sm text-solid-basic-neutral-600"
                                    onClick={async () => {
                                        setIsEditLabel(!isEditLabel)
                                        if (isEditLabel) {
                                            const payload = form?.formState.dirtyFields.itemList?.map((i, index) => {
                                                if (i.name === true) {
                                                    return {
                                                        id: form.getValues('itemList')[index].value,
                                                        name: form.getValues('itemList')[index].name
                                                    }
                                                } else {
                                                    return false
                                                }
                                            }).filter((i) => i)
                                            form?.reset({
                                                itemList: form.getValues(('itemList'))
                                            })
                                            if (onEditApiHandler) {
                                                await onEditApiHandler(payload as unknown as UpdatePayload)
                                            }
                                        }

                                        // if (isEditLabel) {
                                        //     // setIsFocused(false)
                                        //     const updatedListIndex = form.formState.dirtyFields.listItems?.map((i) => {
                                        //         if (i.name === true) {
                                        //             return true
                                        //         } else {
                                        //             return false
                                        //         }
                                        //     }).findIndex((i) => i === true) || 0
                                        //     if (onEditApiHandler) {
                                        //         await onEditApiHandler(form.getValues(`listItems.${updatedListIndex}`).value as number, form.getValues(`listItems.${updatedListIndex}`).name as string, form.reset)
                                        //     }

                                        // }

                                    }}
                                >
                                    {isEditLabel ? 'Apply' : 'Edit Labels'}

                                </p>
                            </div>
                        }

                    </div>
                </Transition>
            </div >
        </Fragment >
    )
}

export default SingleSelectComboBox
