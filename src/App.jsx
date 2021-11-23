import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Link } from "react-router-dom";
import PageWrapper from "./components/common/PageWrapper";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";

class App extends Component {
    render () {
        return (
            <div>
                <PageWrapper>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/team' element={<Team />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </PageWrapper>
            </div>
        )
    }
}

export default App