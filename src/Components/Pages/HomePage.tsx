import React from "react"
import GridSection from "../Subpages/Grid"
import Hero from "../Subpages/Hero"
import Principles from "../Subpages/Principles"
const HomePage: React.FC = () => {

  return (
    <>
      <Hero/>
      <GridSection/>
      <Principles/>
    </>
  )
}

export default HomePage