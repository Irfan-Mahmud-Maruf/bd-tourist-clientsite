import AboutUs from "../components/home/AboutUs"
import Hero from "../components/home/Hero"
import HomeBlog from "../components/home/HomeBlog"
import HomeFAQ from "../components/home/HomeFAQ"
import HomeServices from "../components/home/HomeServices"
import Review from "../components/home/Review"
import Layout from "../components/shared/Layout"


const Home = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <HomeServices />
                <AboutUs />
                <HomeBlog />
                <HomeFAQ />
                <Review/>
            </Layout>
        </>
    )
}

export default Home
