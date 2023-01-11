import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <nav>
        <Link to='/users'>Пользователи</Link>
        <Link to='/categories'>Категории</Link>
        <Link to='/ingredients'>Ингредиенты</Link>
      </nav>
    </div>
  )
}
