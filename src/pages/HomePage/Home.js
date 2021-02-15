import React from 'react';
import {homeObjFour, homeObjOne, homeObjTwo, homeObjThree} from './Data';
import { InfoSection } from '../../components';


const Home = () => {
    return (
        <React.Fragment>
            <InfoSection  {...homeObjOne} />
            <InfoSection  {...homeObjTwo} />
            <InfoSection  {...homeObjThree}/>
            <InfoSection  {...homeObjFour} />
        </React.Fragment>
    );
};

export default Home;
