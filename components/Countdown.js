import {useState,useEffect} from 'react'

export default function Countdown({newYear}) {
    const [days , setDays] = useState(0)
    const [hours , setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

useEffect(()=>{
    const timerId = setInterval(() => {
        const now = new Date().getTime()
        const distance = (newYear - now) / 1000
        if(distance > 0){
            const days = Math.floor(distance / 60 / 60 /24)
            const hours = Math.floor(distance / 60 / 60 % 24)
            const minutes = Math.floor((distance / 60) % 60 )
            const seconds = Math.floor(distance % 60)
            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
        }else {
            clearInterval(timerId)
         }
        },1000)
    return ()=> clearInterval(timerId)
},[newYear])

  return (
    <div className='container bg-four'>
        <div className=' flex flex-wrap '>
            <div className='w-1/4 px-4 mt-5 mb-5'>
            <div className='rounded-xl px-4 py-4 bg-white text-center flex items-center justify-center w-full font-bold text-third'>{days} </div>
            <h1 className='text-center text-sm mt-2 font-bold'>Hari</h1>
            </div>
            <div className='w-1/4 px-4 mt-5 mb-5'>
            <div className='rounded-xl px-4 py-4 bg-white text-center flex items-center justify-center w-full font-bold text-third '>{hours} </div>
            <h1 className='text-center text-sm mt-2 font-bold'>Jam</h1>
            </div>
            <div className='w-1/4 px-4 mt-5 mb-5'>
            <div className='rounded-xl px-4 py-4 bg-white text-center flex items-center justify-center w-full font-bold text-third'>{minutes} </div>
            <h1 className='text-center text-sm mt-2 font-bold'>Menit</h1>
            </div>
            <div className='w-1/4 px-4 mt-5 mb-5'>
            <div className='rounded-xl px-4 py-4 bg-white text-center flex items-center justify-center w-full font-bold text-third'>{seconds} </div>
            <h1 className='text-center text-sm mt-2 font-bold'>Detik</h1>
            </div>
        </div>
        
</div>

  )
}
