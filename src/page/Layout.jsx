
import LogoBar from "../component/logoBar/LogoBar"
import NavBar from "../component/navBar/NavBar"
import DataShow from "../component/main/Left/DataShow"
const Layout = ({ children }) => {
    return (
        <>
            <LogoBar />
            <div style={{
                display: 'flex',
            }}>
                <NavBar />
                {children}
            </div>
            <DataShow />
        </>
    )
}

export default Layout