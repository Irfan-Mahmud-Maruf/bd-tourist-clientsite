
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HiChevronDown } from "react-icons/hi";

const AboutUs = () => {
    return (
        <section className='be-faq'>
            <Container className="text-center mt-5">
                <h1 >About us</h1>
            </Container>

        <Container>
            <Row className="be-section-header d-flex justify-content-center align-items-center">
                
                {/* <Col lg={6} md={6} sm={12}>
                    <h3>BD Tourist</h3>
                    <br />
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div  className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p>BD Tourist help all the tourist who wanna visit Bangladesh. Welcome visitors at Bangladesh. </p>
                    </div>
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div  className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p></p>
                    </div>
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p>BD Tourist make sure your safety first. You will 24 hours guide. They will update all kind of news about your tour</p>
                    </div>
                    <p>Lets explore the history of Bangladesh and the beauty of Bangladesh with us. </p>
                </Col> */}
                <Col lg={6} md={6} sm={12}>
                <h3 className='mb-3 mt-5'>BD Tourist</h3>
                    <div>
                      <div>
                        <Disclosure>
                          {({ open }) => (
                            <>
                              
                              <Disclosure.Button className="w-100 d-flex justify-content-between align-items-center border-0 px-4 py-2 mb-2">
                                <span>What we do?</span>
                                <HiChevronDown/>
                                
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                              BD Tourist help all the tourist who wanna visit Bangladesh. Welcome visitors at Bangladesh. 
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        <Disclosure>
                          {({ open }) => (
                            <>
                              
                              <Disclosure.Button className="w-100 d-flex justify-content-between align-items-center border-0 px-4 py-2 mb-2">
                                <span>What is our refund policy?</span>
                                <HiChevronDown/>
                                
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                              BD Tourist have flexible packages which suite your budget. We are soft for payment return policy. So not to be worried if anyone miss his tour.
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        <Disclosure>
                          {({ open }) => (
                            <>
                              
                              <Disclosure.Button className="w-100 d-flex justify-content-between align-items-center border-0 px-4 py-2 mb-2">
                                <span>What about safety?</span>
                                <HiChevronDown/>
                                
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                              BD Tourist make sure your safety first. You will 24 hours guide. They will update all kind of news about your tour.
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        
                        <Disclosure>
                          {({ open }) => (
                            <>
                              
                              <Disclosure.Button className="w-100 d-flex justify-content-between align-items-center border-0 px-4 py-2 mb-2">
                                <span>We happy to serve best.</span>
                                <HiChevronDown/>
                                
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                              Lets explore the history of Bangladesh and the beauty of Bangladesh with us. 
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        
                        
                        {/* <Disclosure as="div" className="mt-2">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Do you offer technical support?</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? 'transform rotate-180' : ''
                                  } w-5 h-5 text-purple-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                No.
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure> */}
                      </div>
                    </div>
                </Col>
               
                <Col lg={5} md={5} sm={12}>
                    <img src={`https://img.freepik.com/free-vector/back-back-concept-illustration_114360-5999.jpg?w=740`} alt="" className='w-100'/>
                </Col>
            </Row>
        </Container>
    </section>
    );
};

export default AboutUs;