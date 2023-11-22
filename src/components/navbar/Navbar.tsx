import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)
  
    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }
    return (
        <>
            <div className='w-full bg-red-800 text-white flex justify-center py-4'>
                <div className="container flex justify-between items-center text-lg">
                    
                    <div className="flex items-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/1159109846742859776/1176867278353088523/farmacialogo.png?ex=65706e10&is=655df910&hm=7a11289fb71da1556dd326cf6033e6d4393d04d254e2eea2f0f0bcbf67780d2c&"
                            alt="Logo Farmacia Legal"
                            className="h-8 mr-2" 
                        />
                        <Link to='/home' className='text-2xl font-bold'>Farmacia Legal</Link>
                    </div>

                    <div className='flex gap-4'>
                        Remedios
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
