import styles from './Blog.module.css'
import CardBlog from '../../common/CardBlog/CardBlog'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, cPage } from '../../../redux/postActions'

export default function Blog() {
  const apiRes = require('./mock_posts.json')
  const { current } = useSelector((state) => state.post)
  const { allPosts } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  const itemsPage = 2
  const totalPages = Math.ceil(allPosts.length / itemsPage)
  const arrayPages = []
  const orderPosts = [...allPosts].sort((a, b) => a.id_post - b.id_post)
  const lastOne = orderPosts.slice(orderPosts.length - 3)

  console.log(lastOne)

  for (let i = 0; i < totalPages; i++) {
    arrayPages.push(i + 1)
  }

  const nextHandler = () => {
    const totalItems = allPosts.length
    const nexPage = current + 1
    const firstIndex = current * itemsPage

    if (firstIndex >= totalItems - 2) {
      return
    }

    dispatch(cPage(nexPage))
  }

  const prevHandler = () => {
    const prevPage = current - 1 //1

    if (prevPage < 0) {
      return
    }

    dispatch(cPage(prevPage))
  }

  const pageHandler = (event) => {
    dispatch(cPage(event.target.name - 1))
  }

  const firstHandler = () => {
    dispatch(cPage(0))
  }

  const lastHandler = () => {
    dispatch(cPage(Math.ceil(allPosts.length / 2) - 1))
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  for (let i = 0; i < lastOne.length; i++) {
    let active = true
    return (
      <div className={`${styles.divCarousel} carousel-item {active}`}>
        <img
          src={elem.image}
          className={`${styles.image} "d-block w-100"`}
          alt='...'
        />
        <div className={`carousel-caption d-none d-md-block`}>
          <h2 className={styles.textCarousel}>"{elem.title}"</h2>
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className={styles.divMain}>
        <div
          id='carouselExampleCaptions'
          className={`carousel slide`}
          data-bs-ride='carousel'
        >
          <div className={`carousel-indicators`}>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className={`active`}
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className={`carousel-inner`}>
            {/* {lastOne.map(elem => {
            return(
              <div className={`${styles.divCarousel} carousel-item active`}>
            <img src={elem.image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{elem.title}"</h2>
            </div>
            </div>
            )
          })} */}

            {}
            <div className={`${styles.divCarousel} carousel-item active`}>
              <img
                src={apiRes.response[1].image}
                className={`${styles.image} "d-block w-100"`}
                alt='...'
              />
              <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>
                  "{apiRes.response[1].name}"
                </h2>
              </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
              <img
                src={apiRes.response[2].image}
                className={`${styles.image} "d-block w-100"`}
                alt='...'
              />
              <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>
                  "{apiRes.response[2].name}"
                </h2>
              </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
              <img
                src={apiRes.response[0].image}
                className={`${styles.image} "d-block w-100"`}
                alt='...'
              />
              <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>
                  "{apiRes.response[0].name}"
                </h2>
              </div>
            </div>
          </div>
          <button
            className={`carousel-control-prev`}
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className={`carousel-control-prev-icon`}
              aria-hidden='true'
            ></span>
            <span className={`visually-hidden`}>Previous</span>
          </button>
          <button
            className={`carousel-control-next`}
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className={`carousel-control-next-icon`}
              aria-hidden='true'
            ></span>
            <span className={`visually-hidden`}>Next</span>
          </button>
        </div>
        <section>
          <div className={styles.divCardsBlog}>
            {allPosts.slice(current * 2, current * 2 + 2).map((elem) => {
              return (
                <div key={elem.id_post}>
                  <CardBlog
                    id={elem.id_post}
                    title={elem.title}
                    summary={elem.summary}
                    content={elem.content}
                    image={elem.image}
                    date={elem.date}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <div className={styles.divPag}>
        <button className='page-link' onClick={firstHandler}>
          First
        </button>
        <button className='page-link' onClick={prevHandler}>
          Prev
        </button>
        <div className={styles.divPag}>
          {arrayPages
            .slice(current - 2 < 0 ? 0 : current - 2, current)
            .map((ele) =>
              ele < 2 ? (
                <button
                  className='page-link'
                  name={ele}
                  onClick={pageHandler}
                  key={ele}
                >
                  {ele}
                </button>
              ) : (
                <button
                  className='page-link'
                  name={ele}
                  onClick={pageHandler}
                  key={ele}
                >
                  {ele}
                </button>
              )
            )}
          {arrayPages.slice(current, current + 3).map((ele) =>
            ele < 2 ? (
              <button
                className='page-link'
                name={ele}
                onClick={pageHandler}
                key={ele}
              >
                {ele}
              </button>
            ) : (
              <button
                className='page-link'
                name={ele}
                onClick={pageHandler}
                key={ele}
              >
                {ele}
              </button>
            )
          )}
        </div>
        <button className='page-link' onClick={nextHandler}>
          Next
        </button>
        <button className='page-link' onClick={lastHandler}>
          Last
        </button>
      </div>
    </section>
  )
}
