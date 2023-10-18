import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/useAppSelector';
import { incrementar } from '../features/tasks/taskSlice'
import { increment } from '../features/counter/counterSlice';

export default function ShowState() {
    const task = useAppSelector((state) => state.task)
    const counter = useAppSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col space-y-2 w-min'>
                    <span className='block px-3 py-1 text-white bg-green-800 rounded-full w-min'>
                        {task}
                    </span>
                    <button
                        className='block px-4 py-1 text-white bg-yellow-900 rounded-full'
                        onClick={() => dispatch(incrementar())}
                    >
                        Incrementar
                    </button>
                </div>
                <div className='flex flex-col space-y-2 w-min'>
                    <span className='block px-3 py-1 text-white bg-green-800 rounded-full w-min'>{counter.id}</span>
                    <button onClick={()=> dispatch(increment())}>Incrementar2</button>
                </div>
            </div>
        </>
    )
}
