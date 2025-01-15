import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div style={{padding: '32px', width: '100%', overflow: 'scroll', height: 'calc(100vh - 125px)',backgroundPosition: 'center'}}>

          <h1>Pagina Home</h1>
          <ul>
              <li>
                  <Link to='/quiz'>Quiz Arcate</Link>
                  <Link to='/secondQuiz'>Quiz Cannoni</Link>
              </li>
 
          </ul>
        </div>

    )
  }
  
  export default Home;
  