import { ReactNode, ComponentPropsWithoutRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={ `h-10 text-sm bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${ className }` } { ...props }>
            { children }
        </button>
    )
}