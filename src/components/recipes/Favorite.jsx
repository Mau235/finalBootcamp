import { useState } from 'react';
import { start, startOn } from '../icons';

const Icon = { start, startOn }

export default function Favorite({ id, email }) {
  const [look, setLook] = useState(false)

  return (
    <div
      className='absolute right-2 top-2 scale-110 cursor-pointer'
      onClick={handlerStart}
    >
      {look ? (
        <Icon.startOn />
      ) : (
        <Icon.start />
      )}
    </div>
  )
}
