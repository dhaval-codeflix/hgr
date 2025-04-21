import { Skeleton } from '@/components/shadcn-ui/skeleton'
import { Table, TableCell, TableHeaderGroup, TableRow, TableRowGroup } from '@/components/table'
import React, { FC } from 'react'

type TableSkeleton = {
    cols: number,
    rows: number
}

const TableSkeleton: FC<TableSkeleton> = ({ cols, rows }) => {
    return (
        <Table layout='table-fixed' className='w-full' isSkeleton>
            <TableHeaderGroup>
                <TableRow className='hover:bg-transparent'>
                    {
                        Array(cols).fill(0).map((_column, colIndex) => (
                            <TableCell
                                key={colIndex}
                                variant='skeleton'
                                hasBorder={false}
                            >
                                <Skeleton className='w-full h-full' />
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHeaderGroup>
            <TableRowGroup className='relative'>
                {
                    Array(rows).fill(0).map((_item, rowIndex) => (
                        <TableRow key={rowIndex} className='group relative hover:bg-transparent'>
                            <TableCell variant='skeleton' hasBorder={false}>
                                <Skeleton className='w-full h-full' />
                            </TableCell>
                            <TableCell variant='skeleton' hasBorder={false}>
                                <Skeleton className='w-full h-full' />
                            </TableCell>
                            <TableCell variant='skeleton' hasBorder={false}>
                                <Skeleton className='w-full h-full' />
                            </TableCell>
                            <TableCell variant='skeleton' hasBorder={false}>
                                <Skeleton className='w-full h-full' />
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableRowGroup>
        </Table >
    )
}

export default TableSkeleton