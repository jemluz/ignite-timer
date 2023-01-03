import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>

      <nav>
        <NavLink to="/" title="Contador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Contador">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
