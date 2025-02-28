import StyleableProps from "@/app/interfaces/StyleableProbs"

interface SectionNameTextProps extends StyleableProps {
    text: string
}

const SectionNameText = ({className, text}: SectionNameTextProps) => {
    return (
        <h3 className={`text-black text-lg font-bold ${className}`}>{text}</h3>
    )
}

export default SectionNameText