import { useDispatch } from 'react-redux'
import { useFormData } from '../hooks/useFormData'
import { addCard } from '../features/card/cardSlice'
import { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { increment } from '../features/counter/counterSlice'

export default function AddCard() {
    const { data, handleChange } = useFormData({title: "", description: ""})
    const counter = useAppSelector(state => state.counter)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFormSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        dispatch(addCard({...data, id: counter.id}))
        dispatch(increment())
        navigate("/")
    }

    return (
        <>
            <h2 className='mt-8 text-xl font-semibold text-center'>
                Adding Card
            </h2>
            <div className='max-w-md mx-auto mt-10'>
                <form className='flex flex-col gap-4'>
                    <div className='grid grid-cols-2 text-lg gap-y-4 gap-x-2'>
                        <label
                            className='px-2 text-lg font-semibold text-end'
                            htmlFor='title'
                        >
                            Title
                        </label>
                        <input
                            className='px-2 py-1 rounded-lg outline-none text-slate-800'
                            type='text'
                            id='title'
                            name='title'
                            value={data.title}
                            onChange={handleChange}
                        />
                        <label
                            className='px-2 text-lg font-semibold text-end'
                            htmlFor='description'
                        >
                            Description
                        </label>
                        <textarea
                            className='px-2 py-1 rounded-lg outline-none resize-none text-slate-800'
                            id='description'
                            rows={4}
                            name='description'
                            value={data.description}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleFormSubmit} className='block px-3 py-1 mx-auto text-lg font-semibold bg-blue-500 rounded-lg w-min'>
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
