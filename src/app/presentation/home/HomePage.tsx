import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CorrespondentAccount from "./CorrespondentAccount"

const HomePage = () => {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <CorrespondentAccount />
            </div>
        </div>
    )
}

export default HomePage