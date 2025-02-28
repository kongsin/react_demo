import StyleableProps from "@/app/interfaces/StyleableProbs"

interface BadgeComponentProps extends StyleableProps {
    fontColor?: string,
    backgroundColor?: string,
    text: string
}

const BadgeComponent = ({fontColor = "text-cyan-500", backgroundColor = "bg-customs-cyan-150", text}: BadgeComponentProps) => {
    return (
        <h3 className={`rounded-md ${fontColor} ${backgroundColor} text-xs px-3 py-1 font-bold mx-3 text-center`}>{text}</h3>
    )
}

export default BadgeComponent