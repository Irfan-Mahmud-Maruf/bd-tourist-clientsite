import React from 'react'
import Footer from './Navigation/Footer'
import Navigation from './Navigation/Navigation'

const Layout = ({className, children}) => {
    return (
        <>
            <div className="page ">
                <header>
                    <Navigation />
                </header>

                <main className={className}>
                    {children}
                </main>
                
                <Footer />
            </div>
            
        </>
    )
}

export default Layout
