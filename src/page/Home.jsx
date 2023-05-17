import img from '../assets/mainBack.jpg'
import st from '../style/headerTall.css'
import Login from '../components/home/Login'
import { minScreen } from '../constant/myConstant'

export default function Home() {
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
      //className={st.tall}
      >
        <div className='w-1/4 mx-auto pt-8 '>
          <Login />
        </div>
      </div>
    </>
  )
}
