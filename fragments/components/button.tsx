import { PropsWithChildren } from 'adonisjsx'


interface buttonProps  {
    [key: string]: string
}

export default function Button({ children, ...props }: PropsWithChildren<buttonProps>) {
    return <button class="p-2 text-sm bg-black text-white rounded-md cursor-pointer hover:bg-black/80" {...props} safe>{children}</button>
}
