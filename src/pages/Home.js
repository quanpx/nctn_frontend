import React from 'react';
import Auctions from "../components/auction/Auctions";
import CustomFooter from "../components/CustomFooter";
import Description from "../components/Description";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <Description />
            <Auctions />
            <CustomFooter/>
        </div>
    )

}
export default Home;