import { PropsWithChildren } from 'adonisjsx'


export default function Button({ children }: PropsWithChildren) {
    return <button>{children}</button>
}