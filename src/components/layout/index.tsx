
import Header from '../header'
import Container from '../container'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'

export const Layout = () => {
    return (
        <>
            <Container>
                <Header />
                <div className="">
                    <Outlet />
                </div>
            </Container>
            <Footer />
        </>


    )
}



