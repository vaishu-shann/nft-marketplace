import React, { useContext } from 'react';
import Banner from '../components/HomeScreen/Banner/Banner';
import TopCreator from '../components/HomeScreen/TopCreators/TopCreator';
import TopNft from '../components/HomeScreen/TopNFT/TopNft';
import Category from '../components/Categories/Category';
import { web3GlobalContext } from "../context/global-context";

function HomePage(props) {
    const { walletAddress } = useContext(web3GlobalContext);

    return (
        <div>
            <Banner />
            <TopCreator />
            <Category />
            <TopNft />
        </div>
    );
}

export default HomePage;