import React from 'react'
import { CircularProgress } from '@material-ui/core'
import './styles/loading.css'

export default function Loading() {
    return (
        <div className="loading">
            <CircularProgress />
        </div>
    )
}
