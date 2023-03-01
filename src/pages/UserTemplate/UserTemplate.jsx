import { parseJSON } from 'jquery';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Content from './components/content/content';
import { Footer } from './components/footer';
import { Header } from './components/header';

const UserTemplate = (props) => {
    const userLocal = localStorage.getItem('movie-user')
    if (!userLocal) return <Navigate to='/login' />

    const userInfo = parseJSON(userLocal)
    console.log(userInfo);
    return (
        <>
            <div className="container">
                <Header userInfo={userInfo} />
                <Content bearer={userInfo.accessToken}/>
                <Footer/>
            </div>
            {/* <UpdateUser /> */}
        </>
    );



}
export default UserTemplate;