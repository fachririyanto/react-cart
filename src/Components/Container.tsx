import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="mx-auto px-4 max-w-[1200px]">
            { children }
        </div>
    )
}

export function BlockContainer({ children }: ContainerProps) {
    return (
        <div className="relative py-10 md:py-16 lg:py-20">
            { children }
        </div>
    )
}