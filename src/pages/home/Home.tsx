function Home() {

    return (
        <>
            <div className="bg-stone-300 flex justify-center h-screen">
                <div className='container grid grid-cols-1 text-black'>
                    <div className="flex flex-col gap-4 items-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde a Farmácia Legal!
                        </h2>
                        <p className='text-xl'>
                            Temos remédios variados!
                        </p>

                        <div className="flex justify-around gap-4 mt-24">
                            <img
                                src="https://cdn.discordapp.com/attachments/1159109846742859776/1176875727145148487/remedios.png?ex=657075ee&is=655e00ee&hm=8c9a5db19ed055002e5f76cac797d984cc55abfcbe52d05eb9c0556eee001be7&"
                                alt="Imagem Home"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
