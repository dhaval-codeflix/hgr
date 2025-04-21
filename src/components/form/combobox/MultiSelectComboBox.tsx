import DownArrowIcon from '@/assets/icons/DownArrowIcon';
import { cn } from '@/utils/cn';
import { Transition } from '@headlessui/react';
import { FC, useEffect, useRef, useState } from 'react';

type ComboBoxProps = {
    className?: string;
    listItems: { value: string | number; name: string | number }[];
    onChange: (val: (number | string)[]) => void;
    value: (string | number)[];
    onChangeHandler?: (id: number | string, val: number[] | string[]) => void
    id?: string | number
};

const MultiSelectComboBox: FC<ComboBoxProps> = ({ className, listItems, onChange, value, id = '', onChangeHandler }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const comboBoxRef = useRef<HTMLDivElement | null>(null);
    const [selectedItems, setSelectedItems] = useState<(number | string)[]>(value);

    useEffect(() => setSelectedItems(value), [value]);

    useEffect(() => {
        if (isFocused) inputRef.current?.focus();
    }, [isFocused]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (comboBoxRef.current && !comboBoxRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const onItemSelect = (item: number | string) => {
        const newSelection = selectedItems.includes(item)
            ? selectedItems.filter((selected) => selected !== item)
            : [...selectedItems, item];
        setSelectedItems(newSelection);
        onChange(newSelection)
        if (onChangeHandler) {
            onChangeHandler(id, newSelection as number[]);
        }
    };

    const filteredItems = listItems.filter(({ name }) =>
        typeof name === 'string' ? name.toLowerCase().includes(searchText.toLowerCase()) : true
    );

    return (
        <div ref={comboBoxRef} className="relative h-full w-full group/comboBox">
            <div
                className={cn(
                    'px-6 py-2 h-full flex items-center justify-between cursor-pointer',
                    isFocused && 'bg-solid-basic-lightBlue-50',
                    className
                )}
                onClick={() => setIsFocused(true)}
            >
                {isFocused ? (
                    <input
                        ref={inputRef}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="outline-none w-full font-medium text-sm text-solid-basic-neutral-600 bg-transparent pr-2"
                        type="text"
                    />
                ) : (
                    <div className="text-sm h-auto font-medium w-full text-solid-basic-neutral-600 pr-2">
                        {selectedItems.length ? (
                            <div className='flex items-center h-auto gap-2 w-full'>
                                {selectedItems.slice(0, 2).map((item) => (
                                    <div
                                        key={item}
                                        className='bg-solid-basic-grayBlue-600 py-1 flex items-center justify-center px-2 text-xs  truncate font-medium text-white rounded-[2.8px]'
                                    >
                                        {listItems.find(({ value }) => value === item)?.name}
                                    </div>
                                ))}

                                {selectedItems.length > 2 && (
                                    <div
                                        data-tooltip-id="tooltip"
                                        data-tooltip-html={`
                                            ${selectedItems
                                                .slice(2)
                                                .map(
                                                    (item) =>
                                                        `<p>&#8226 ${listItems.find(({ value }) => value === item)?.name || ''}</p>`
                                                )
                                                .join('')}
                                          `}

                                        className='tooltip bg-solid-basic-grayBlue-600 py-1 flex items-center justify-center px-2 text-xs max-w-[100px] truncate font-medium text-white rounded-[2.8px] shrink-0'>
                                        +{selectedItems.length - 2}
                                    </div>
                                )}

                            </div>
                        ) : (
                            'Select Option'
                        )}
                    </div>
                )}

                <DownArrowIcon
                    className={cn(isFocused ? 'rotate-180' : '', 'group-hover/comboBox:opacity-100 opacity-0')}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsFocused(!isFocused);
                    }}
                />
            </div>

            <Transition show={isFocused}>
                <div className="w-full border max-h-[300px] overflow-auto space-y-2 shadow bg-white absolute top-12 left-0 rounded-[5.6px] border-solid-basic-neutral-200 transition duration-100 ease-in p-2 z-10 data-[closed]:opacity-0">
                    {filteredItems.length ? (
                        filteredItems.map(({ value, name }) => (
                            <p
                                key={value}
                                className={cn(
                                    'cursor-pointer hover:bg-solid-basic-grayBlue-50 rounded-[5.6px] px-4 py-2 font-medium leading-[22px] text-sm text-solid-basic-neutral-600',
                                    selectedItems.includes(value) && 'bg-solid-basic-grayBlue-50'
                                )}
                                onClick={() => {
                                    onItemSelect(value);
                                    setIsFocused(false);
                                }}
                            >
                                {name}
                            </p>
                        ))
                    ) : null}
                </div>
            </Transition>
        </div>
    );
};

export default MultiSelectComboBox;
