import './style.css'

type MsgProps = {
    message: string
}

export function WarningMessage({message}: MsgProps) {
    return <span className="warning">{message}</span>
}