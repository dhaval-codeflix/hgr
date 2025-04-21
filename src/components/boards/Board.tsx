import React, { useState } from 'react'
import { TableCell, TableHeaderGroup, TableRow, TableRowGroup } from '../table'
import PlusIcon from '@/assets/icons/PlusIcon'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import SortableTableCell from '../dnd/draggables/SortableTableCell';
import dynamic from 'next/dynamic';
import SortableTableRow from '../dnd/draggables/SortableTableRow';
const Table = dynamic(() => import('@/components/table/Table'), { ssr: false });


const Board = () => {

    const rows = [
        {
            id: "1",
            name: "John Doe",
            email: "johndoe@example.com",
            role: "Admin",
            status: "Active",
            created_at: "2024-02-01"
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "janesmith@example.com",
            role: "User",
            status: "Inactive",
            created_at: "2024-01-15"
        },
        {
            id: "3",
            name: "Michael Brown",
            email: "michaelbrown@example.com",
            role: "Moderator",
            status: "Pending",
            created_at: "2024-02-05"
        },
        {
            id: "4",
            name: "Emily Johnson",
            email: "emilyjohnson@example.com",
            role: "User",
            status: "Active",
            created_at: "2024-01-20"
        },
        {
            id: "5",
            name: "Daniel Wilson",
            email: "danielwilson@example.com",
            role: "Admin",
            status: "Suspended",
            created_at: "2023-12-30"
        }
    ]

    const cols = [
        {
            heading: "Id",
            id: "1",
            key: "id",
            type: "Text",
        },
        {
            heading: "Name",
            id: "2",
            key: "name",
            type: "Text",
        },
        {
            heading: "Email",
            id: "3",
            key: "email",
            type: "Text",
        },
        {
            heading: "Role",
            id: "4",
            key: "role",
            type: "Text",
        },
        {
            heading: "Status",
            id: "5",
            key: "status",
            type: "Text",
        },
        {
            heading: "Created At",
            id: "6",
            key: "created_at",
            type: "Text",
        }
    ]


    interface IRowsForm {
        rows: typeof rows
    }
    type User = typeof rows[0]
    type ColumnsKeys = keyof typeof rows[0]
    type Columns = typeof cols[0] & { key: ColumnsKeys }

    const [columns, setColumns] = useState(cols as Columns[])
    const [grabbedColumn, setGrabbedColumn] = useState<string>('')
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const { control, setValue, getValues } = useForm<IRowsForm>({
        defaultValues: {
            rows: rows
        }
    });
    const { fields, append } = useFieldArray({
        control,
        name: "rows",
        keyName: "_id"
    });
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5
            }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),

    );
    const handleColumnDragEnd = (event: DragEndEvent) => {
        const sourceIndex = event.active.data.current?.sortable.index;
        const destinationIndex = event.over?.data.current?.sortable.index;
        if (sourceIndex !== undefined && destinationIndex !== undefined) {
            const updatedColumns = arrayMove(columns, sourceIndex, destinationIndex);
            setColumns(updatedColumns);
            setValue(
                'rows',
                getValues('rows')
            );
        }
    }
    const handleRowDragEnd = (event: DragEndEvent) => {

        setDraggedRow(null); // Clear the dragged row after drop
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = fields.findIndex((item) => item.id === active.id);
            const newIndex = fields.findIndex((item) => item.id === over?.id);

            if (oldIndex !== -1 && newIndex !== -1) {
                const updatedRows = arrayMove(getValues('rows'), oldIndex, newIndex);
                setValue('rows', updatedRows);
            }
        }
    };

    const [draggedRow, setDraggedRow] = useState<User | null>(null);

    const handleRowDragStart = (event: DragStartEvent) => {
        const draggedItem = fields.find((item) => item.id === event.active.id);
        if (draggedItem) {
            setDraggedRow(draggedItem);
        }
    };


    return (
        <Table>
            <TableHeaderGroup>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleColumnDragEnd}
                    onDragStart={(event) => {
                        setGrabbedColumn(columns.find((i) => i.id === event.active.id)?.heading as string)
                    }}
                >
                    <TableRow>
                        <SortableContext
                            items={columns.map((item) => item)}
                            strategy={horizontalListSortingStrategy}
                        >
                            {
                                columns.map((column) => (
                                    <SortableTableCell
                                        key={column.id}
                                        id={column.id}
                                        variant='heading'
                                    >
                                        {column.heading}
                                    </SortableTableCell>
                                ))
                            }
                        </SortableContext>
                    </TableRow>
                    <DragOverlay dropAnimation={null}>
                        <div className='bg-white cursor-grabbing rounded-lg h-[120px] flex justify-center p-4 bg-opacity-90 shadow'>
                            {grabbedColumn}
                        </div>
                    </DragOverlay>
                </DndContext>

            </TableHeaderGroup>
            <TableRowGroup className='relative'>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleRowDragStart}
                    onDragEnd={handleRowDragEnd}
                >
                    <SortableContext
                        disabled={isFocus}
                        items={fields.map((item) => item.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        {
                            fields.map((row: User, rowIndex: number) => (
                                <SortableTableRow
                                    key={row.id}
                                    id={row.id}
                                    className='table-row bg-white'
                                >
                                    {
                                        columns.map((column) => (
                                            <TableCell className='cursor-grab' key={column.id}>
                                                <Controller
                                                    control={control}
                                                    name={`rows.${rowIndex}.${column.key}`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <input
                                                            onFocus={() => {
                                                                setIsFocus(true)
                                                            }}
                                                            onBlur={() => {
                                                                setIsFocus(false)
                                                            }}
                                                            type="text"
                                                            className='w-full border-[1px] border-transparent hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 focus:outline-none rounded-sm px-1'
                                                            value={value}
                                                            onChange={onChange} />
                                                    )}
                                                />
                                                {/* {row[column.key]} */}
                                            </TableCell>
                                        ))
                                    }
                                </SortableTableRow>
                            ))
                        }
                        <DragOverlay dropAnimation={null}>
                            {draggedRow ? (
                                <SortableTableRow id={draggedRow.id}
                                    hasBorder={false}
                                    className='table-row cursor-grabbing rotate-2 bg-white shadow'>
                                    {columns.map((column, index) => (
                                        <TableCell className='w-[300px]'
                                            hasBorder={false}
                                            key={index}>{draggedRow[column.key]}</TableCell>
                                    ))}
                                </SortableTableRow>
                            ) : null}
                        </DragOverlay>
                    </SortableContext>
                    <TableRow hasBorder>
                        <TableCell hasBorder={false}>
                            <div className='gap-2 flex items-center cursor-pointer' onClick={() => {
                                const newRow = {} as { [key in keyof typeof rows[0]]: string; }
                                for (const key of columns) {
                                    if (key.key === 'id') {
                                        newRow[key.key] = String(fields.length + 1)
                                    } else {
                                        newRow[key.key] = ''
                                    }
                                }
                                append(newRow)
                            }}>
                                <PlusIcon /> Add Row
                            </div>

                        </TableCell>
                    </TableRow>

                </DndContext>
            </TableRowGroup>
        </Table >
    )
}

export default Board

{/* {
                    fields.map((row: User, rowIndex: number) => (
                        <TableRow
                            key={row.id}
                            className='table-row bg-white'
                        >
                            {
                                columns.map((column) => (
                                    <TableCell key={column.id}>
                                        <Controller
                                                    control={control}
                                                    name={`rows.${rowIndex}.${column.key}`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <input
                                                            onFocus={() => {
                                                                setIsFocus(true)
                                                            }}
                                                            onBlur={() => {
                                                                setIsFocus(false)
                                                            }}
                                                            type="text"
                                                            className='w-full border-[1px] border-transparent hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 focus:outline-none rounded-sm px-1'
                                                            value={value}
                                                            onChange={onChange} />
                                                    )}
                                                />
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                } */}