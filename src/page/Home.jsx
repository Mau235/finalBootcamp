import img from '../assets/mainBack.jpg'
import st from '../style/headerTall.css'
export default function Home() {
  return (
    <>
      <div
        className={st.tall}
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
      >

      </div>
    </>
  )
}
