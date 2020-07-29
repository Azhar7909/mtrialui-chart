import React from 'react'
import ButtonAppBar from '../components/AppBar'
import Login from './LoginScreen'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'




export default function HomeScreen() {
    return (
        <div>
            <ButtonAppBar />
            <Login />
            <BarChart />
            <PieChart />
        </div>
    )
}
