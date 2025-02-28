import Flag from "react-world-flags";

interface CardProps {
    title: string;
    value: string;
    currency?: string;
    bgColor: string;
    fontColor: string,
    transactionId: string,
    countryCode: string;
}

const Card = ({ title, value, currency, countryCode, bgColor, fontColor, transactionId }: CardProps) => {
    return (
        <div style={{ backgroundColor: bgColor }} className={`p-4 rounded-2xl text-white w-60 shadow-md`}>
            <div className="flex flex-row">
                <Flag code={countryCode} className=" rounded-full w-5 h-5 object-cover" />
                <div className="flex flex-col ml-2">
                    <div style={{ color: fontColor }} className={`text-sm font-medium [color:${bgColor}] font-bold`}>{title}</div>
                    <div className="text-sm text-gray-500 line-clamp-1">{transactionId}</div>
                    <div className="text-xl font-bold text-black">{value} {currency}</div>
                </div>
            </div>
        </div>
    );
};
export default Card;