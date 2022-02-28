import Hero from "../components/home/Hero"
import HomeBlog from "../components/home/HomeBlog"
import HomeFAQ from "../components/home/HomeFAQ"
import HomeServices from "../components/home/HomeServices"
import Layout from "../components/shared/Layout"


const Home = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <HomeServices />
                <HomeBlog />
                <HomeFAQ />
            </Layout>
        </>
    )
}

export default Home
