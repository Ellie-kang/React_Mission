import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import MovieModal from './MovieModal';
import "./Row.css";

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default function Row({ isLargeRow, title, id, fetchUrl }) {
    // 영화 정보 가져오기
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
      };

    // UI 생성
  return (
    <section className="row">
        {/** TITLE */}
        <h2>{title}</h2>
        <div className="slider">
            <div className="slider__arrow-left">
                <span className='swiper-button-prev'>
                    {"<"}   
                </span>
            </div>
            <div id={id} className="row__posters">
            
            <Swiper 
            slidesPerView={5}
            spaceBetween={10}
            slidesPerGroup={5} // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
            loop={true}
            navigation={{  // 버튼 사용자 지정
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            >

                {/** SEVERAL ROW__POSTER */}
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original/${
                                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            loading="lazy"
                            alt={movie.name}
                            // 해당 영화 클릭 시 모달 open
                            onClick={() => handleClick(movie)}
                        />
                    </SwiperSlide>
                ))}
            
            </Swiper>

            </div>
            
            <div className="slider__arrow-right">
                <span className='swiper-button-next'>
                  {">"}
                </span>
            </div>
        </div>
        
            
                {modalOpen && (
                        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                    )
                }
    </section>
  );
}
