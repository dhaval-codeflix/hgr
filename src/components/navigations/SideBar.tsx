"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import { ROUTER_PATH } from '@/constants/router-paths'
import Link from 'next/link'
import { ActivityIcon, AddOnsIcon, AdminIcon, AssetIcon, BrokerageIcon, GridIcon, MasterIcon, OrgIcon, PermissionIcon, RecordsIcon, ReportIcon, SubscriptionIcon, TemplateIcon, UserIcon } from '@/assets/icons/sidebar'

const SideBar = () => {
    const pathname = usePathname()
    const superAdminSideBarLinks = [
        {
            categoryTitle: 'Analytics',
            links: [
                {
                    name: 'Dashboard',
                    path: ROUTER_PATH.superAdmin.dashboard.path,
                    icon: <GridIcon />
                }
            ]
        },
        {
            categoryTitle: 'Users & Organization',
            links: [
                {
                    name: 'Users',
                    icon: <UserIcon />
                },
                {
                    name: 'Roles & Permission',
                    icon: <PermissionIcon />

                },
                {
                    name: 'Organization',
                    icon: <OrgIcon />
                }
            ]
        },
        {
            categoryTitle: 'Management',
            links: [
                {
                    name: 'Asset Types',
                    path: ROUTER_PATH.superAdmin.assetType.path,
                    icon: <AssetIcon />

                },
                {
                    name: 'Template Center',
                    path: ROUTER_PATH.superAdmin.templateCenter.path,
                    icon: <TemplateIcon />
                },
                {
                    name: 'Master',
                    path: ROUTER_PATH.superAdmin.master.path,
                    icon: <MasterIcon />
                }
            ]
        },
        {
            categoryTitle: 'Administration',
            links: [
                {
                    name: 'Admins',
                    icon: <AdminIcon />

                }
            ]
        }, {
            categoryTitle: 'Financials',
            links: [
                {
                    name: 'Financial Reports',
                    icon: <ReportIcon />
                },
                {
                    name: 'Subscription Package',
                    icon: <SubscriptionIcon />

                },
                {
                    name: 'Add-Ons',
                    icon: <AddOnsIcon />

                }
            ]
        },
        {
            categoryTitle: 'Platform',
            links: [
                {
                    name: 'Brokerage',
                    icon: <BrokerageIcon />

                },
                {
                    name: 'Records',
                    icon: <RecordsIcon />
                }
            ]
        },
        {
            categoryTitle: 'Activity Log',
            links: [
                {
                    name: 'Activity Logs',
                    icon: <ActivityIcon />

                }
            ]
        },
    ]
    return (
        <div className='w-[266px] h-full shrink-0 bg-solid-basic-grayBlue-50 py-4 px-6 overflow-auto'>
            <p className='text-solid-basic-brand-500 text-2xl font-bold leading-5 py-[10px] mb-2'>Administration</p>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                {
                    superAdminSideBarLinks.map((category) => (
                        <div key={category.categoryTitle} className='w-full'>
                            <p className='text-solid-basic-neutral-600 text-xs leading-5 font-semibold px-4 py-2'>{category.categoryTitle}</p>
                            {
                                category.links.map((link: { name: string, icon: React.ReactNode, path?: string }) => (
                                    <Link href={link.path || ""} key={link.name} className={cn('text-solid-basic-neutral-600 hover:bg-solid-basic-grayBlue-100 rounded-[5.6px] text-sm w-full leading-6 cursor-pointer font-semibold px-4 py-2 flex items-center gap-2',
                                        pathname.includes(link.path || "null") && 'bg-solid-basic-grayBlue-100')}>{link.icon}{link.name}</Link>

                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default SideBar