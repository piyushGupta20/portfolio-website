import React from 'react'


const navname=[
    {
        id:1,
        name:"Home",
    },
    {
        id:2,
        name:"About",
    },
    {
        id:4,
        name:"Qualification",
    },
    {
        id:5,
        name:"Projects",
    },
    {
        id:3,
        name:"Contact Me",
    },
    
]


// PORES am cr ML Sete CARL bc MLL ae) oe coe PA Le Da CL eon oe a Led ho Re AUT Lele oa
// Dire eet lah mee)

 
function Navbar() {
  return (
    <div className=' max-w-screen p-2 bg-gradient-to-br from-gray-700 to-gray-800 h-fit' >
    {/* <div className=' max-w-screen p-2 bg-gradient-to-br from-color:FFC727 to-blue-700 h-fit' > */}
        <div className='flex items-center justify-center my-6'>
        {
            navname.map((name)=>(
                <button key={name.id} className='text-yellow-400 text-lg font-medium mx-2' onClick={()=>{alert(`${name.name}`)}}>{name.name}</button>
            ))
        }
   </div>
    </div>
  )
}

export default Navbar