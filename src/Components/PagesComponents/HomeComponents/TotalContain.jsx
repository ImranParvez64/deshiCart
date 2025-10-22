import React from 'react';
import TrendingItems from './TrendingItems';
import TopRated from './TopRated';
import TopSelling from './TopSelling';

const TotalContain = () => {
    return (
        <div>
        <TrendingItems></TrendingItems>
        <TopRated></TopRated>
        <TopSelling></TopSelling>
        </div>
    );
};
export default TotalContain;