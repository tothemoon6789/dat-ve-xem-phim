import { Outlet } from 'react-router-dom';
import { Footer } from './_components/Footer';
import Header from './_components/Header/Header';
const HomeTemplate = (props) => {
    return (
        <>
            {/* <div className={`${theme}`}> */}

                <Header/>
                <Outlet />
                <Footer />
            {/* </div> */}
        </>
    );


}

export default (HomeTemplate);