import MainView from '../components/MainView'
import HomeInstagram from '../components/Home/HomeInstagram'
import HomeProducts from '../components/Home/HomeProducts'
import HomeSlider from '../components/Home/HomeSlider'
import HomeTestimonials from '../components/Home/HomeTestimonials'
import LazyLoading from '../components/LazyLoading'

import homeProducts from '../data/homeProducts'

export default () => (
  <MainView>
    <HomeSlider />
    <HomeProducts />
    <hr />
    <HomeTestimonials />
    <LazyLoading>
      <>
        <hr />
        <HomeInstagram />
      </>
    </LazyLoading>
  </MainView>
)

const FacebookReview = () => <div />
