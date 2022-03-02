import { Container, Row } from "react-bootstrap";
import { BsEnvelopeFill, BsFacebook, BsGithub, BsGoogle, BsHouseFill, BsInstagram, BsLinkedin, BsPrinterFill, BsTelephoneFill, BsTwitter } from "react-icons/bs";



const Footer = () => {
    return (
        <>
          <footer className="text-center text-lg-start">
    
            <Container className="p-5 pb-0">
                <Row>
                  <div className="col-md-4 col-lg-4 col-sm-12 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      BD Tourist
                    </h6>
                    <p>
                      BD Tourist help all the tourist who wanna visit Bangladesh. Welcome visitors at Bangladesh.
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-4 col-sm-12 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><BsHouseFill className="me-3"/> Dhaka, Bangladesh.</p>
                    <p><BsEnvelopeFill className="me-3"/> info@bdtourist.com</p>
                    <p><BsTelephoneFill className="me-3"/> + 01 234 567 88</p>
                    <p><BsPrinterFill className="me-3"/> + 01 234 567 88</p>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                    <a 
                       className="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsFacebook/></a>
                    <a
                       class="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsTwitter/></a>
                    <a
                       class="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsGoogle/></a>
                    <a
                       class="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsInstagram/></a>
                    <a
                       class="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsLinkedin/></a>
                    <a
                       class="btn btn-primary m-1 rounded-circle"
                       href="#!"
                       role="button"
                       ><BsGithub/></a>
                  </div>
                </Row>
            </Container>
            <hr />
            <div class="text-center p-3">
              © 2020 Copyright:
              <span className="text-muted">BD Tourist</span>
            </div>
          </footer>
        </>
    )
}

export default Footer