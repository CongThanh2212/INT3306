import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./homePage/login"
import Management from "./management/management"
import Producer from "./producer/producer"
import Service from "./service/service"
import Agent from "./agent/agent"

class App extends React.Component {

    render() {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/management/*" element={<Management />} />
                <Route path="/producer/*" element={<Producer />} />
                <Route path="/service/*" element={<Service />} />
                <Route path="/agent/*" element={<Agent />} />
            </Routes>
        )
    }
}

export default App