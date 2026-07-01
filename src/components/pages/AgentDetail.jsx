import { useState, useEffect } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function AgentDetail() {
  const {id} = useParams()
  const navigate = useNavigate()

  const [agent, setAgent] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAgentDetail = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch(`https://valorant-api.com/v1/agents/${id}`)
        
        if (!response.ok) {
          throw new Error("Error al cargar los agentes")
        }

        const result = await response.json()
        setAgent(result.data)

      }catch(err){
        setError("No se han podido cargar los agentes")
      }finally{
        setLoading(false)
      }
    }

    fetchAgentDetail();
  }, [])

  if (loading){
    return <div className='bg-ValoBlack min-h-screen text-white p-24 flex justify-center'>Cargando...</div>
  }

  return (
    <main className='bg-ValoBlack flex flex-col py-10 w-full min-h-dvh px-60'>
      <header className='flex mb-10 w-full justify-center'>
        <img className='w-[40%]' src="/V_Logotype_White.png" alt="Titulo Valorant" />
      </header>
      <section className='flex gap-2 justify-between' > 
        <Link onClick={() => navigate(-1)} className='text-white text-3xl font-bold justify-end'>← BACK</Link>
        <h3 className='text-white text-3xl font-bold justify-end'>AGENT DETAIL</h3>
      </section>

      <section className='flex'>
        <div className='w-[60%]'>
          <img src={agent.fullPortrait} alt="Imagen del personaje" className='h-full object-contain'/>
        </div>
        <article className='bg-ValoGray w-full rounded-3xl p-8 text-white gap-4 flex flex-col'>
          <div className='flex items-center gap-4'>
            <img src={agent.displayIcon} alt="Logo del personaje" className='w-24 rounded-full border-3' />
            <h1 className='text-6xl'>{agent.displayName}</h1>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-5xl'>Role -</h2>
            <h2 className='text-5xl'>{agent.role.displayName}</h2>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-3xl text-gray-400'>Description</h3>
            <h3 className='text-lg'>{agent.description}</h3>
          </div>

          <div className='flex flex-row gap-4'>
            <h3 className='text-3xl text-gray-400'>Developer name -</h3>
            <h3 className='text-3xl'>{agent.developerName}</h3>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>Abilities</h2>
            
            <div className='flex gap-4'>
              {agent.abilities.map((ability, index) => (
                <img src={ability.displayIcon} alt="Imagenes de habilidad" key={index} className='w-12' />
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
