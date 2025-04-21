import React, { FC, Fragment } from "react";
import { motion } from "framer-motion";
import DuplicateIcon from "@/assets/icons/DuplicateIcon";
import RoundedCircleCrossIcon from "@/assets/icons/RoundedCircleCrossIcon";
import ArchiveIcon from "@/assets/icons/ArchiveIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
import TrashIcon from "@/assets/icons/TrashIcon";

type BottomBarProps = {
    selectedRowIds: number[];
    setSelectedRowIds: (val: number[]) => void;
    deleteRowHandler: () => void
};

const BottomBar: FC<BottomBarProps> = ({ selectedRowIds, setSelectedRowIds, deleteRowHandler }) => {

    const iconVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: (delay: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.2, delay },
        }),
    };

    return (
        <Fragment>
            {selectedRowIds.length ? (
                <div
                    className='px-6 py-2 fixed left-[calc(50%+120px)] top-[90%] z-20 w-fit bg-white flex items-center gap-6 rounded-[4px] border-[1px] border-solid-basic-neutral-200 transform -translate-x-1/2 -translate-y-1/2 shadow-[0px_6px_20px_0px_rgba(0,0,0,0.20)]'
                >
                    {/* Selected File Count */}
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-[82px] rounded-[5.6px] bg-solid-basic-grayBlue-400 text-[24px] text-white font-medium flex items-center justify-center">
                            {selectedRowIds.length}
                        </div>
                        <p className="text-sm text-solid-basic-neutral-600 font-medium text-nowrap">Selected File</p>
                    </div>

                    {/* Divider */}
                    <div className="h-full w-[1px] bg-[#CCC]" />

                    {/* Action Icons */}
                    <div className="flex items-center gap-6">
                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                        >
                            <DuplicateIcon />
                            <p className="text-sm font-medium text-solid-basic-neutral-600">Duplicate</p>
                        </motion.div>

                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                        >
                            <ArchiveIcon />
                            <p className="text-sm font-medium text-solid-basic-neutral-600">Archive</p>
                        </motion.div>

                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.4}
                            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                            onClick={() => {
                                deleteRowHandler()
                            }}
                        >
                            <TrashIcon className="text-[#666]" width={24} height={24} />
                            <p className="text-sm font-medium text-solid-basic-neutral-600">Delete</p>
                        </motion.div>

                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.6}
                            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                        >
                            <ExportIcon className="text-[#666]" />
                            <p className="text-sm font-medium text-solid-basic-neutral-600">Export</p>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="h-full w-[1px] bg-[#CCC]" />

                    {/* Close Button */}
                    <RoundedCircleCrossIcon className="cursor-pointer" onClick={() => setSelectedRowIds([])} />
                </div>
            ) : null}
        </Fragment>
    );
};

export default BottomBar;
