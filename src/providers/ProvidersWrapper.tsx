'use client'
import React, { Fragment } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { Tooltip } from 'react-tooltip'

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <Tooltip
                place='top'
                id="tooltip"
                style={{
                    backgroundColor: '#132647',
                    fontSize: 12,
                    zIndex: 100,
                    color: 'white',
                    borderRadius: '5.6px',
                }}
                opacity={1}

            />
            <Tooltip
                place='top'
                id="white-tooltip"
                style={{
                    backgroundColor: 'white',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    fontSize: 12,
                    zIndex: 100,
                    color: 'black',
                    borderRadius: '5.6px',
                }}
                opacity={1}

            />
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        </Fragment>
    )
}

export default ProvidersWrapper