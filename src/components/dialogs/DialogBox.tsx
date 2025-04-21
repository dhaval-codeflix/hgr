import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/shadcn-ui/dialog"
import React, { FC } from 'react'

interface IDialogBoxProps {
    title: string
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: (val: boolean) => void

}

const DialogBox: FC<IDialogBoxProps> = ({ children, title, setIsOpen, isOpen }) => {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(e) =>
                setIsOpen(e)
            }
        >
            {/* <DialogTrigger className="p-0">{trigger}</DialogTrigger> */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default DialogBox
