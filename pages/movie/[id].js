import React from 'react';
import Menu from '../../components/Menu'
import Router, {useRouter} from 'next/router'

export default () => {

  const goToHome = () => {
    Router.push('/')
  }

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Menu />
      <h2 style={{ textAlign: "center" }} >Estas Viendo...</h2>
      <h1 style={{ textAlign: "center" }} >{id}</h1>
      <div style={{textAlign: "center"}}>
        <button onClick={goToHome}>Ir a inicio</button>
      </div>
    </div>
  )
}