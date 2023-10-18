import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import AddCard from './routes/AddCard.tsx'
import CardContainer from './components/CardContainer.tsx'
import EditCard from './routes/EditCard.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/add-card',
                element: <AddCard />,
            },
            {
                path: '/edit-card/:id',
                element: <EditCard />,
                loader: ({ params }) => {
                    const state = store.getState()
                    const cards = state.cards
                    const id = params.id!
                    const card = cards.find((card) => card.id === parseInt(id))
                    if (card === undefined)
                        throw new Response('Not found', {
                            status: 404,
                            statusText: 'Object not found',
                        })
                    return card
                },
            },
            {
                path: '',
                element: <CardContainer />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='h-screen min-h-screen px-6 py-4 bg-slate-800 text-slate-200'>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    </React.StrictMode>
)
