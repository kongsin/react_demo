import StyleableProps from "@/app/interfaces/StyleableProbs"

const FlexSpace = ({className}: StyleableProps) => {
    return (
        <div className={`flex flex-grow ${className}`} />
    )
}

export default FlexSpace