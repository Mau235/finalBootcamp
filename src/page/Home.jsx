import { useState } from 'react'
import img from '../assets/mainBack.jpg'
import Login from '../components/home/Login'
import Register from '../components/home/Register'
import { minScreen } from '../constant/myConstant'

export default function Home() {
  const [watch, setWatch] = useState(true)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          minHeight: minScreen
        }}
      >
        <div className='w-1/4 mx-auto pt-8 '>
          {watch ? <Login stateWatch={setWatch} /> : <Register stateWatch={setWatch} />}
        </div>
      </div>
    </>
  )
}
