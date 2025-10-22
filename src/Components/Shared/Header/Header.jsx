import LastHeader from "./HeaderComponents/LastHeader";
import MainHeader from "./HeaderComponents/MainHeader";
import TopHeader from "./HeaderComponents/TopHeader";

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MainHeader></MainHeader>
            <LastHeader></LastHeader>
        </div>
    );
};

export default Header;