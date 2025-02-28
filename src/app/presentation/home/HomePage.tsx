import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CorrespondentAccount from "./CorrespondentAccount"
import items from "../../../assets/mockup_bank.json";

const HomePage = () => {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <CorrespondentAccount items={items} />
            </div>
        </div>
    )
}

export default HomePage