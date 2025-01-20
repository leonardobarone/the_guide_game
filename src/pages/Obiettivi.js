import styled from "styled-components";

const Obiettivi = () => {
    return (<Wrapper>
      <div className="container" style={{marginTop: '50px', marginBottom: '75px'}}>
        <div className="card">
          <div className="body">
            <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
            <div className="tag">
              <div className="ciao">
                tag
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src="https://picsum.photos/id/237/250" alt="" />
            <div className="tag">tag</div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src="https://picsum.photos/id/237/250" alt="" />
            <div className="tag">tag</div>
          </div>
        </div>
      </div>
    </Wrapper>
    )
  }
  
  export default Obiettivi;
  
  const Wrapper = styled.section`
  .container {
    height: calc(100vh - 125px);
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    .card {
      border: 1px solid black;
      flex-basis: 50%;
      height: 50%;
      .body {
        width: 100%;
        height: 100%;
        padding: 7.5px;
        position: relative;
        .tag {
          .ciao {
            border: 1px solid black;
            padding: 5px 20px;
          }
          position: absolute;
          top: 7.5px;
          right: 7.5px;
          background-color: pink;
          padding: 3px 10px;
          z-index: 3;
          text-align: center;
          border-bottom: 0.5 solid black;
          border-left: 0.5 solid black;
          border-radius: 0 0 0 1.25rem;
          &::after {
            width: 1.125rem;
            height: 1.125rem;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 1.90rem;
            right: 0rem;
            border-top-right-radius: 0.700rem;
            box-shadow: 0rem -0.400rem pink;

          }
          &::before {
            width: 1.125rem;
            height: 1.125rem;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 0rem;
            left: -1rem;
            border-top-right-radius: 0.700rem;
            box-shadow: 0rem -0.4rem pink;

          }
        }
        img {
          border-radius: 15px;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  `