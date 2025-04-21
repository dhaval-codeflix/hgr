import RoundedCircleArrowIcon from "@/assets/icons/RoundedCircleArrowIcon"
import RoundMenuIcon from "@/assets/icons/RoundMenuIcon"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/shadcn-ui/accordion"
import { cn } from "@/utils/cn"
import React, { FC, useState } from 'react'

type BoardAccordionProps = {
    children: React.ReactNode,
    title: string,
    setTitle: (val: string) => void,
    totalItems?: number
}
const BoardAccordion: FC<BoardAccordionProps> = ({ children, setTitle, title, totalItems = 0 }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <Accordion type="single" defaultValue="accordion" collapsible onValueChange={(e) => {
            if (e) {
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }

        }}>
            <AccordionItem value={"accordion"}>
                <div>
                    <div className="flex w-full justify-between items-center group">
                        <div className="flex gap-2 items-end px-[10px] justify-start">
                            <AccordionTrigger>
                                <RoundedCircleArrowIcon
                                    className={cn('transition-all duration-200', isOpen && 'rotate-180')} />
                            </AccordionTrigger>
                            <div
                                data-tooltip-id="white-tooltip"
                                data-tooltip-html={`
                                          Click To Edit
                                          `}
                            >

                                <input type="text" value={title} size={title.length} onChange={(e) => setTitle(e.target.value)} className={cn(" border-[1px] border-transparent rounded-[5.6px] outline-none hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 px-1  font-semibold text-lg leading-[28px] text-solid-basic-neutral-600 ")} />
                            </div>
                            {/* <p contentEditable suppressContentEditableWarning onInput={(e: React.FormEvent<HTMLParagraphElement>) => setTitle((e.target as HTMLParagraphElement).textContent || "")} className={cn("border-transparent border-[1px]  rounded-[5.6px] outline-none hover:border-solid-basic-neutral-200 focus:border-solid-basic-neutral-200 px-1  font-semibold text-lg leading-[28px] text-solid-basic-neutral-600")} >{title}</p> */}
                            {/* <p className="group-hover:block hidden font-medium text-sm leading-[28px] text-solid-basic-neutral-600">{totalItems} Items</p> */}
                            <p className="group-hover:block hidden pb-[3px] font-medium text-sm text-solid-basic-neutral-600">{totalItems} Items</p>
                        </div>
                        <RoundMenuIcon className="fixed right-[32px]" onClick={(e) => {
                            e.stopPropagation()
                            alert('Menu')
                        }} />
                    </div>
                </div>
                <AccordionContent >
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion >

    )
}

export default BoardAccordion  