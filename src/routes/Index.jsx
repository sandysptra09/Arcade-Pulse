import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import NotFound from "../NotFound/NotFound";
import News from "../views/Games/News/News";
import MMORPG from "../views/Games/ByCategory/MMORPG";
import Shooter from "../views/Games/ByCategory/Shooter";
import Anime from "../views/Games/ByCategory/Anime";
import Strategy from "../views/Games/ByCategory/Strategy";
import Fantasy from "../views/Games/ByCategory/Fantasy";
import WebBrowser from "../views/Games/ByPlatform/WebBrowser";
import PCWindows from "../views/Games/ByPlatform/PCWindows";
import TermsOfUse from "../views/Legal/TermsOfUse";
import PrivacyPolicy from "../views/Legal/PrivacyPolicy";
import CookiesPolicy from "../views/Legal/CookiesPolicy";
import HelpFAQ from "../views/Legal/HelpFAQ";
import Community from "../views/Community/Community";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ForgetPassword from "../views/Auth/ForgetPassword";
import DescriptionGame from "../views/Games/DescriptionGames";
import User from "../views/User/User";
import Wishlist from "../views/Wishlist/Wishlist";
import Cart from "../views/Cart/Cart";

export default function RoutesPath() {
    return (
        <Router>
            <Routes>
                {/* Route Home */}
                <Route exact path="/" Component={Home} />

                {/* Route Game */}
                <Route path="/game/:gameId" Component={DescriptionGame} />


                {/* Route Browse Game */}
                <Route path="/games/mmorpg" Component={MMORPG} />
                <Route path="/games/shooter" Component={Shooter} />
                <Route path="/games/anime" Component={Anime} />
                <Route path="/games/strategy" Component={Strategy} />
                <Route path="/games/fantasy" Component={Fantasy} />

                {/* Route Game By Platform */}
                <Route path="/games/platform/web-browser" Component={WebBrowser} />
                <Route path="/games/platform/pc-(windows)" Component={PCWindows} />

                {/* Route News */}
                <Route path="/news" Component={News} />

                {/* Route Community */}
                <Route path="/community" Component={Community} />

                {/* Route Auth page */}
                <Route path="/auth/login" Component={Login} />
                <Route path="/auth/register" Component={Register} />
                <Route path="/auth/forget-password" Component={ForgetPassword} />

                {/* Route User page */}
                <Route path="/user" Component={User} />

                {/* Route Wishlist page */}
                <Route path="/wishlist" Component={Wishlist} />

                {/* Route Cart page */}
                <Route path="/cart" Component={Cart} />

                {/* Route page Not Found */}
                <Route path="*" Component={NotFound} />

                {/* Route page Legal Service */}
                <Route path="/terms-of-use" Component={TermsOfUse} />
                <Route path="/privacy-policy" Component={PrivacyPolicy} />
                <Route path="/cookies-policy" Component={CookiesPolicy} />
                <Route path="/help-faq" Component={HelpFAQ} />
            </Routes>
        </Router>
    )
}