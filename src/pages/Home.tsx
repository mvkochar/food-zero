import React, { useEffect } from 'react'
import './css/Home.css'
import PostsList from '../components/PostsList/PostsList'
import PostsItem from '../components/PostsItem/PostsItem'
import Reservation from '../components/Reservation/Reservation'

type HomeProps = {
  setPageNum: (pageNum: number) => void
}

const Home = ({ setPageNum }: HomeProps) => {
  useEffect(
    () => setPageNum(1), []
  )

  return (
    <>
      <section className='home-menu'>
        <h2 className="home-menu-title">Our Menu</h2>
        <p className="home-menu-desc">This is a section of your menu. Give your section a brief description</p>
        <div className="home-menu-box d-f jc-sb">
          <div className="home-menu-item">
            <h4 className="menu-item-price">$20</h4>
            <h3 className="menu-item-title">Deep Sea Snow White <br /> Cod Fillet</h3>
            <p className="menu-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="home-menu-item">
            <h4 className="menu-item-price">$22</h4>
            <h3 className="menu-item-title">Steak With Rosemary <br /> Butter</h3>
            <p className="menu-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="home-menu-item">
            <h4 className="menu-item-price">$18</h4>
            <h3 className="menu-item-title">Cucumber Salad</h3>
            <p className="menu-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="home-menu-item">
            <h4 className="menu-item-price">$90</h4>
            <h3 className="menu-item-title">Natural Wine Pairing</h3>
            <p className="menu-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <section className='home-chef d-f jc-sb'>
        <div><img src="/images/home-chef.png" alt="home-chef" /></div>
        <div>
          <h2 className="home-chef-title">Excellent <br /> cook</h2>
          <p className="home-chef-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
            Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </p>
        </div>
      </section>
      <section className='home-features d-f jc-sb'>
        <div className="home-features-item">
          <div><img src="/images/features1.png" alt="features1" /></div>
          <h4 className="features-item-title">Premium Quality</h4>
          <p className="features-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
          </p>
        </div>
        <div className="home-features-item">
          <div><img src="/images/features2.png" alt="features2" /></div>
          <h4 className="features-item-title">Seasonal Vegetables</h4>
          <p className="features-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
          </p>
        </div>
        <div className="home-features-item">
          <div><img src="/images/features3.png" alt="features3" /></div>
          <h4 className="features-item-title">Fresh Fruit</h4>
          <p className="features-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
          </p>
        </div>
      </section>
      <section className='home-blog d-f jc-sb'>
        {
          PostsList.filter((elem) => elem.id < 3).map((post) => {
            return (
              <PostsItem
                id={post.id}
                category={post.category}
                image={post.image}
                authorPhoto={post.authorPhoto}
                authorName={post.authorName}
                date={post.date}
                time={post.time}
                comments={post.comments}
                title={post.title}
                description={post.description}
              />
            )
          })
        }
      </section>
      <Reservation/>
      <section className='home-categories'>
        <h2 className="home-categories-title">Calories Energy <br /> Balance</h2>
        <h4 className="home-categories-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <div className="home-categories-box d-f jc-sb">
          <div className="home-categories-item">
            <div className="d-f jc-sb">
              <h4 className="categories-item-name">Starters</h4>
              <a href="" className='d-b'><img src="/images/arrow-right.png" alt="arrow-right" /></a>
            </div>
          </div>
          <div className="home-categories-item">
            <div className="d-f jc-sb">
              <h4 className="categories-item-name">Mains</h4>
              <a href="" className='d-b'><img src="/images/arrow-right.png" alt="arrow-right" /></a>
            </div>
          </div>
          <div className="home-categories-item">
            <div className="d-f jc-sb">
              <h4 className="categories-item-name">Soups</h4>
              <a href="" className='d-b'><img src="/images/arrow-right.png" alt="arrow-right" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className='home-testimonials'>
        <h4 className="home-testimonials-quote">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
          Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.
        </h4>
        <div className="d-f jc-sb">
          <div className="home-testimonials-author d-f align-center">
            <div><img src="/images/testimonials-author1.png" alt="testimonials-author1" /></div>
            <div>
              <h5 className="testimonials-author-name">Jane Doe</h5>
              <div className="testimonials-author-pos">Bloger</div>
            </div>
          </div>
          <div className="home-testimonials-pagination d-f align-center">
            <button className='btn-clear d-b'><img src="/images/arrow-left.png" alt="arrow-left" /></button>
            <h5 className='testimonials-pagination-num'>2 / 3</h5>
            <button className='btn-clear d-b'><img src="/images/arrow-right.png" alt="arrow-right" /></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home