
import { useNavigate } from "react-router-dom";

const Page = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => navigate('/Login')}>Login</button>
        </div>
    )
}

export default Page
