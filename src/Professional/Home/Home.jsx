import './Home.css'

export const Home = () => {
  return (
    <div>
      <div className="home-div" id="home">
        <div className="home-item">About</div>
        <div className="home-item">React</div>
        <div className="home-item">CSS</div>
        <div className="home-title">
          <div className='lines'>
            <h1 className='name-header'>CONROY LEE</h1>
            <span className='title-span'>Frontend Developer</span>
            <h1 className='slogan'>
              This website is built with <span>React</span> and <span>CSS</span>
            </h1>
          </div>
        </div>
        <div className="home-item">Python</div>
        <div className="home-item">Video Editing</div>
        <div className="home-item">Visual Art</div>
      </div>
        <h1 className='reminder giggle'>I am still building this site!</h1>
    </div>
  )
}
