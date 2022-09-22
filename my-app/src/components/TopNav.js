import logo from "./notebook/img/2u-logo.png";

function TopNavigationMenu({windowSize, OpenClose, navigation}){
    return (
        <div className="topNav">
        <img className="logo" src={logo}></img>
        <p>Negotiating an employment contract</p>
        {windowSize === true ? "" : <OpenClose navigation={navigation} />}
      </div>
    )
}

export default TopNavigationMenu;