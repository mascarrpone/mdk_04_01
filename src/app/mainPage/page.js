"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Main() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/login"); // Перенаправляем на страницу логина
    };

    return (
        <div className="h-full flex flex-col">
            <div className="absolute top-4 right-4">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-1 px-4 rounded shadow transition
                    hover:bg-red-400 active:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Выйти
                </button>
            </div>
            <div className="flex">
                <div className="w-1/3 p-6 space-y-4">
                    <img
                        src="/natk.jpg"
                        alt="Фото колледжа"
                        className="w-full h-auto rounded shadow"
                    />
                    <img
                        src="/natk.webp"
                        alt="Фото колледжа"
                        className="w-full h-auto rounded shadow"
                    />
                    <img
                        src="/natk2.jpg"
                        alt="Фото колледжа"
                        className="w-full h-auto rounded shadow"
                    />
                </div>

                <main className="w-2/3 p-6 text-black">
                    <h1 className="text-4xl font-extrabold  text-gray-800 mb-6">
                        История колледжа
                    </h1>
                    <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                        <p>
                            История <span className="font-semibold">Новосибирского авиационного технического колледжа имени Б.С.Галущака </span>
                            начинается <span className="text-blue-600 font-medium">15 ноября 1929 года</span>.
                            Тогда был образован <span
                            className="italic">Новосибирский машиностроительный техникум</span>.
                        </p>

                        <p>
                            В <span className="text-blue-600 font-medium">1931 году</span> техникум получил название
                            <span className="font-medium"> «Новосибирский техникум сельскохозяйственных машин»</span>,
                            а в <span className="text-blue-600 font-medium">1933 году</span> стал
                            <span className="font-medium"> «Новосибирским техникумом машиностроения»</span>.
                        </p>

                        <p>
                            В <span className="text-blue-600 font-medium">1936–1937 годах</span> в Новосибирске на базе
                            завода
                            горного оборудования был создан <span className="font-semibold">авиационный завод</span>.
                            В <span className="text-blue-600 font-medium">ноябре 1937 года</span> с его аэродрома
                            взлетел первый самолёт.
                            Развивающееся предприятие нуждалось в квалифицированных рабочих, техниках, инженерах.
                            Уже в <span className="text-blue-600 font-medium">январе 1937 года </span>
                            <span className="font-semibold">машиностроительный техникум</span> передали в ведение
                            <span className="font-medium">Глававиапрома</span> и переименовали в авиационный техникум.
                            Осенью того же года началась подготовка специалистов по направлениям
                            <span
                                className="font-medium text-green-700"> конструирование и производство самолётов</span>.
                        </p>

                        <p>
                            В <span className="text-blue-600 font-medium">1938–1941 годах</span> для учебного заведения
                            строится новое здание. С началом Великой Отечественной войны многие учащиеся ушли на фронт,
                            а оставшиеся работали в цехах авиационного завода имени <span className="font-semibold">В. П. Чкалова</span>.
                        </p>

                        <p>
                            <span className="text-blue-600 font-medium">7 марта 1991 года </span>
                            решением Госкомитета СССР по народному образованию и Министерства авиационной промышленности
                            <span className="font-medium text-green-700"> Новосибирский авиационный техникум </span>
                            преобразовали в <span
                            className="font-medium text-green-700">авиационный технический колледж</span>.
                        </p>

                        <p>
                            За годы существования колледж подготовил более <span className="font-semibold">20 000 специалистов</span>,
                            работающих во всех сферах экономики, бизнеса и производства.
                        </p>
                    </div>


                </main>
            </div>
        </div>
    );
}
