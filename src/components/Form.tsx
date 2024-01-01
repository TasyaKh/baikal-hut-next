import React, {FC, useState} from 'react';
import Loading from "@/components/other/Loading";
import {useQuery} from "@tanstack/react-query";

interface FormProps {
}

const Form: FC<FormProps> = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [guests, setGuests] = useState(0)
    const [dates, setDates] = useState({from: "", to: ""})

    const {data, isFetching, error, refetch:sendEmail } = useQuery({
        queryFn: async () => {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    phone:phone,
                    guests:guests,
                    dates:dates
                }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке формы');
            }

            return await response.json().then((res) => res.message);
        },
        queryKey: ["email"],
        enabled: false,
    });

    const handleSubmitEvent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await sendEmail();
    }

    return (
        <div className={"place-items-center grid grid-cols-12 "}>
            <h2 className={" text-3xl font-bold text-main-color mb-10 col-span-full "}>
                Оставить информацию (чтобы мы могли с Вами связаться)</h2>

            <div className="w-full max-w-xl col-span-12 ">
                <form className="bg-white shadow-5 rounded-xl px-8 pt-6 pb-8 mb-4  " onSubmit={(e) => handleSubmitEvent(e)}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Имя
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Имя"
                            onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="phone">
                            Телефон
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                          "
                            id="phone" type="tel" placeholder="8-900-000-0000"
                            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" required={true}
                            title={"8-900-000-0000 или 89000000000 или +7"}
                            onChange={(event) => setPhone(event.target.value)}/>

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
                            Число гостей
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="guests" type="number" placeholder="1" min={1} max={99} required={true}
                            onChange={(event) => setGuests(Number(event.target.value))}/>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
                                Прибытие
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="guests" type="datetime-local" placeholder="01.01.20xx"
                                onChange={(event) => setDates({...dates, from: event.target.value})}/>
                        </div>
                        <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="out">
                                Убытие
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="out" type="datetime-local" placeholder="01.01.20xx"
                                onChange={(event) => setDates({...dates, to: event.target.value})}/>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Отправить
                        </button>
                    </div>
                </form>

                {isFetching ? <Loading/> : null}

                {error ?
                    <div className={"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"}>{error.message}</div>
                    : null}

                {data ?
                    <div className={"bg-blue-100 border \border-blue-500 text-blue-700 px-4 py-3"}>{data}</div>
                    : null}
            </div>
        </div>
    );
}

export default Form;
