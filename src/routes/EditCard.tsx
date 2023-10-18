import { useLoaderData, useNavigate } from 'react-router-dom'
import { useFormData } from '../hooks/useFormData'
import { MouseEventHandler } from 'react'
import { Card, deleteCard, updateCard } from '../features/card/cardSlice'
import { useDispatch } from 'react-redux'


export default function EditCard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const card = useLoaderData() as Card

    const {data, handleChange} = useFormData(card)

    const handleFormSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        dispatch(updateCard(data))
        navigate("/")
    }

    const handleDelete = () => {
        dispatch(deleteCard(card.id!))
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
                    <div className='flex justify-center gap-4'>
                    <button
                        onClick={handleFormSubmit}
                        className='px-3 py-1 text-lg font-semibold bg-blue-500 rounded-lg '
                    >
                        Save
                    </button>
                    <button onClick={handleDelete} className='px-3 py-1 text-lg font-semibold bg-red-500 rounded-lg '>
                        Delete
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}
