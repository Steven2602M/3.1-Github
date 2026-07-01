import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AgentCard from '../ui/AgentCard'
import { useNavigate } from 'react-router-dom'

export default function ChampionDashboard({handleLogout}) {
  const navigate = useNavigate()
  const [agents, setAgents] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch("https://valorant-api.com/v1/agents")
        
        if (!response.ok) {
          throw new Error("Error al cargar los agentes")
        }

        const result = await response.json()
        setAgents(result.data)

      }catch(err){
        setError("No se han podido cargar los agentes")
      }finally{
        setLoading(false)
      }
    }

    fetchAgents();
  }, [])
  


  return (
    <main className='bg-ValoBlack flex flex-col py-10 w-full min-h-dvh'>
      <header className='flex mb-10 w-full justify-center'>
        <img className='w-[40%]' src="/V_Logotype_White.png" alt="Titulo Valorant" />
        <div onClick={() => handleLogout()} className='absolute right-20 top-10 cursor-pointer text-white'>Logout</div>
      </header>
      <div className='flex flex-col gap-2 items-end mx-auto' > 
        <h3 className='text-white text-3xl font-bold justify-end'>AGENTS</h3>

        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
          {agents.map((agent) => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}
        </div>
      </div>
    </main>
  )
}
