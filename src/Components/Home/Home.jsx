import React, { useEffect, useState } from 'react'
import Rows from './Rows/Rows.jsx'
import './home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);



  const url = 'http://api.themoviedb.org/3';
  const apikey = '7bc61c8c09edf4fd8dbf6050fcda38e8';

  const imgUrl = "https://image.tmdb.org/t/p/original";
  const upcoming = "upcoming";
  const nowPlaying = "now_playing";
  const popular = "popular";
  const topRated = "top_rated";

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingMovies(results);
    }

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setNowPlayingMovies(results);
    }

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=2`);
      setPopularMovies(results);
    }
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      setTopRatedMovies(results);
    }
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
      setGenre(genres);
      console.log(genres);
    }
    getAllGenre();
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, [])

  


  return (
    <section className='home'>
      <div className="banner"
       style={{backgroundImage:popularMovies[19]
       ?`url(${`${imgUrl}/${popularMovies[19].poster_path}`})`
      :"rgb(16, 16, 16)",
      }}>

        {popularMovies[19] && <h1>{popularMovies[19].original_title}</h1>}
        {popularMovies[19] && <p>{popularMovies[19].overview}</p>}
        <div>

        <button><BiPlay/> Play</button>
        <button>My List <AiOutlinePlus/></button>
        </div>
      </div>
      <Rows title={"Upcoming on Netflix"} arr={upcomingMovies} />
      <Rows title={"Now Playing"} arr={nowPlayingMovies} />
      <Rows title={"Popular"} arr={popularMovies} />
      <Rows title={"Top Rated"} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home;
