import { useNavigate } from 'react-router-dom'
import RickPrime from '../assets/rick_prime.webp'
import { Card } from '../features/card/cardSlice'

function CardElement({ card }: { card: Card }) {
    const navigate = useNavigate()
    return (
        <li
            onClick={() => navigate(`/edit-card/${card.id}`)}
            className='flex items-center px-2 py-4 cursor-pointer hover:bg-slate-600'
        >
            <img
                className='block object-scale-down w-10 h-10 rounded-full shrink-0'
                src={RickPrime}
                alt='rick'
            />
            <div className='flex flex-col gap-2 ml-3 overflow-hidden'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>
                        <span className='text-green-500'>ID</span> :{' '}
                        <span>{card.id}</span>
                    </h3>
                    <h3 className='text-base font-medium text-slate-400'>
                        {card.title}
                    </h3>
                </div>
                <p className='text-sm truncate text-slate-100'>
                    {card.description}
                </p>
            </div>
        </li>
    )
}

export default CardElement
