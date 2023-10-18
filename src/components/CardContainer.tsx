import { useAppSelector } from '../hooks/useAppSelector'
import CardElement from './CardElement'


function CardContainer() {
    const cards = useAppSelector((state) => state.cards)
    return (
        <div className='max-w-md px-6 mx-auto my-4 divide-y divide-green-600'>
            {cards.map((card) => (
                <CardElement key={card.id} card={card}></CardElement>
            ))}
        </div>
    )
}

export default CardContainer
