import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentCard({agent}) {
  return (
    <Link to={`/agent/${agent.uuid}`}>
        <article className='bg-ValoGray rounded-2xl  w-80 p-4 text-ValoWhite cursor-pointer hover:ring-2 hover:ring-ValoRed'>
            <img src={agent.fullPortrait} alt="" className='h-64'/>
            <h3 className='mt-3 text-3xl font-bold'>{agent.displayName}</h3>
            <div className='flex gap-2 items-center'>
                <img className='w-4' src={agent.role.displayIcon} alt="" />
                <p className='text-ValoRed'>{agent.role.displayName}</p>
            </div>
            <p className='mt-3'>Abilities</p>
            <p className='mt-4 text-ValoRed'>Github</p>
            <p className='mt-2'text-ValoRed>Cambio 2</p>
           
            <div className='flex mt-3 gap-2'>
                {agent.abilities.map((ability, index) => (
                    <div key={index} className='flex h-10 bg-ValoBlack rounded p-1 '>
                        {ability.displayIcon ? (
                            <img 
                            src={ability.displayIcon} 
                            alt={ability.displayName} />
                        ) : (
                            <span> - </span>
                        )}
                    </div>
                ))}
            </div>
        </article>
    </Link>
  )
}
