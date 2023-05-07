"use client" // client side components

import SearchableGrid from "./problems/components/SearchableGrid"
import { problemsData } from "./problems/data/data"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Problems</h1>

      <SearchableGrid data={problemsData}/>
    </main>
  )
}

export default Home
