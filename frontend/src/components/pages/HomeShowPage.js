import React, { useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const HomeShowPage = ({ match }) => {

    const dispatch = useDispatch()
    const hDetails = useSelector(state => state.homeDetails)
    // const { loading, error, home} = hDetails
    // useEffect(() => {
    //     dispatch(listOneHome(match.params.id))
    // },
    // [dispatch, match])

    // console.log(home.photos)
    return (
        <>

            {/* { loading

            ?   <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-100"
                        src={hDetails.photos.map(photo => console.log(photo.image))}
                        alt="home photos"
                        />
                        <Carousel.Caption>
                        
                        <p>{null}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            : null
            } */}
        </>
    )
}

export default HomeShowPage
