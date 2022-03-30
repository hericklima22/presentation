import "./styles.scss"

export const Home = () => {
  return (
    <div className="container">
      <div className="tittle">
        <div style={{margin: 10}}>
          <a>{"> Nome: Herick de Carvalho Lima"}</a>
        </div>
        <br></br>
        <div style={{margin: 10}}>
          <a>{"> Idade: 22"}</a>
        </div>
        <br></br>
        <div style={{margin: 10}}>
          <a>{"> Main : Desenvolvedor Front-End"}</a>
        </div>
      </div>
    </div>
  )  
}