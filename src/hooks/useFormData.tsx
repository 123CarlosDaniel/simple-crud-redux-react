import { ChangeEvent, useState } from "react";
import { Card } from "../features/card/cardSlice";

export function useFormData(initialValue: Card) {
    const [data, setData] = useState(initialValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    return {data, handleChange}
}