import { useState, useRef, useEffect, FormEvent } from 'react';
import './Weather.module.scss'; // Certifique-se de que o caminho está correto para o seu arquivo SCSS

interface WeatherData {
    main: {
        temp: number;
    };
    name: string;
    weather: {
        icon: string;
    }[];
}

export function Weather() {
    const [cidade, setCidade] = useState<string>('São Paulo');
    const [clima, setClima] = useState<number>(0);
    const [icon, setIcon] = useState<string>('');
    const cidadePesquisar = useRef<HTMLInputElement>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=14d8bf5aa8a007e675f048834b8ce15f&lang=pt_br&units=metric`);
                const dados: WeatherData = await response.json();

                if (response.ok) {
                    setClima(Math.round(dados.main.temp));
                    setCidade(dados.name);
                    setIcon(`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`);
                } else {
                    console.error('Erro ao buscar dados:', dados);
                }
            } catch (error) {
                console.error('Erro ao conectar à API:', error);
            }
        }
        fetchWeather();
    }, [cidade]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const novaCidade = cidadePesquisar.current?.value;
        if (novaCidade) {
            setCidade(novaCidade);
        }
    };

    return (
        <main>
            <h1>Condições do Tempo</h1>
            <section className="input-form">
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <input type="text" id="input-localizacao" ref={cidadePesquisar} />
                    <button type="submit" id="button-localizacao">Pesquisar</button>
                </form>
            </section>
            <section id="tempo-info">
                <div className="tempo-dados">
                    <h2>{cidade}</h2>
                    <span>{clima}°</span>
                </div>
                <img src={icon} alt="foto clima" />
            </section>
        </main>
    );
}
