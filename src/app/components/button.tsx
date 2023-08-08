interface Props {
    content: string
}

export const BlueButton:React.FC<Props> = ( {content} ) => {
    return (
        <button className="text-white px-[20px] py-[15px] text-[12px] bg-DarkBlue font-bold border-0 rounded-[10px] hover:text-black hover:bg-LightBlue tracking-[3px]">{content}</button>
    )
}

export const EmeraldButton:React.FC<Props> = ({content}) => {
    return (
        <button className="text-white px-[20px] py-[15px] text-[12px] bg-DarkBlue font-bold border-0 rounded-[10px] hover:text-black hover:bg-LightBlue tracking-[3px] uppercase">{content}</button>
    )
}

export const GreenButton:React.FC<Props> = ({content}) => {
    return (
        <button className="text-white px-[20px] py-[15px] text-[12px] bg-LightBlue font-bold border-0 rounded-[10px] hover:text-black hover:bg-LightBlue tracking-[3px] uppercase">{content}</button>
    )
}