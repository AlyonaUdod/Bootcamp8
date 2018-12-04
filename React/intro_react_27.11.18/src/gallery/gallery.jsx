import React from 'react';
import './gallery.css'

const gallery = () => {
    let imgArr = [
        { src: "http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg",
          id: 1},
        {src: "https://mirpozitiva.ru/uploads/posts/2016-11/medium/1479734077_kofe10.jpg", 
          id: 2},
        {src:"https://ki.ill.in.ua/m/670x450/24325386.jpg",
          id: 3
        },
        {src:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",
          id: 4
        },
        {src:'http://smexkartinka.ru/uploads/posts/2016-05/1464624221_podborka_dnevnaya_37.jpg',
          id: 5
        },
        {src: "http://jancel.ru/wp-content/uploads/2017/11/Krasivyie-kartinki-dlya-dushi-i-nastroeniya-42-foto-2.jpg",
          id: 6
        }
    ]
    return (
        <div className='gallery'>
           {imgArr.map(el => <img src={el.src} alt='gallery-item' key={el.id}/>)}
        </div>
    );
};

export default gallery;