import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/Body';
import ExploreCategories from '../components/ExploreCategories';

import { Link } from 'react-router-dom'
import Headers from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Footer1 from "../Common/Footer/Footer1"
import Footer2 from "../Common/Footer/Footer2"
import Scroll from "./scroll"
// Importing all files
import TopCarousel from './reusable components/landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div style={{ overflowX : "hidden"}}>
          <TopCarousel />
          <ExploreCategories />
          <Body />
          
        </div>
    )
}
