import React, { useState, useEffect } from 'react';
import "./Nav.css"

export default function Nav() {
  const [show, handleShow] = useState(false);

  // 스크롤 시 NavBar 색깔 변경
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // 50이 이상 스크롤 시 검은 색이 된다.
      if (window.scrolly > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
  <nav className={`nav ${show && "nav__black"}`}>
      <img
        // 넷플릭스 로고 이미지 생성
        alt="Netflix logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"  
        // 넷플릭스 이미지를 클릭하면 리로드
        onClick={() => window.location.reload()}
      />
      <img 
        alt="User logged"
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDlfMTIy%2FMDAxNTk5NjYxMDE4ODIw.mus0_ksM8rA2zZzHQdPbhAR1CQXTGi7z2ZU_URDXSrMg.T-l30M1gBE80NudRntBioAk56thYVhyJOaE9Lqt1EB8g.JPEG.mckko%2F%25B0%25E6%25B3%25B2_ci_%25B7%25CE%25B0%25ED_%25B5%25F0%25C0%25DA%25C0%25CE.jpg&type=sc960_832"
        className="nav__avatar"
      />
  </nav>
  );
};
