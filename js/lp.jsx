import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  Stripe
} from "neal-react";
import { SignupInline } from "./signup-inline.jsx";
import { Team, TeamMember } from "./team.jsx";
import { Navbar, NavItem } from "./navbar.jsx";
import { Footer, FooterAddress } from "./footer.jsx";
import { AlertModal } from "./alert-modal.jsx";
import Map from "./map.jsx";
import ajax from "./ajax.js";

const brandName = "8 Bit Rockstars";
const brand = <span></span>;
const brandEmail = "info@8bitrockr.com";
const brandImg = "img/logo_w.png";

const onSignup = ({ name: name, email: email, phone: phone, developer: developer, experience: experience }) => {

  var data = {
    name: name,
    email: email,
    phone: phone,
    developer: developer,
    experience: experience
  };

  var url = "https://bs40h9cv2f.execute-api.us-west-2.amazonaws.com/production/sendEmail";

  ajax.get(url, data, function() {
    $('#alert-modal').modal('toggle');
  });

}

const onClosePopup = () => {
  window.location.href = "http://8bitrockr.com";
}

const businessAddress = (
  <address>
    <strong><a href="http://8bitrockr.com" target="_blank">8 Bit Rockstars </a></strong> <br />
    F12A-R22, Vincom Center, 72 Le Thanh Ton, P. Ben Nghe, <br />
    District 1, Ho Chi Minh City, Vietnam <br />
    +84 8668 19033 
  </address>
);


export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><a href="#event" className="nav-link">EVENT</a></NavItem>
        <NavItem><a href="#speakers" className="nav-link">SPEAKERS</a></NavItem>
        <NavItem><a href="#time-and-place" className="nav-link">TIME AND PLACE</a></NavItem>
        <NavItem><a href="#sign-up" className="nav-link" style={{backgroundColor: '#6160a2', color: '#fff', padding: '.425rem 1rem'}}>SIGN UP</a></NavItem>
      </Navbar>

      <Hero backgroundImage="img/background2.jpg" className="text-center">
        <div className="hero-7" >7</div>
        <div className="hero-text">
          <p className="lead"> 
            PHP 7<br />
            Celebration<br />
            IN VIETNAM
          </p>
          <p>
            <a href="#sign-up" className="btn btn-white t-u">
              Register For Free
            </a>
          </p>
        </div>
      </Hero>

      
      <Section className="event-des">
        <h2 className="text-center" id="event">Event</h2>
        <HorizontalSplit padding="sm">
            <p><b>Eleven years after the PHP 5.0 release,</b> a new major version is finally coming our way! PHP 7.0 is scheduled for release before the end of the year, bringing many new features and an impressive performance boost.
            <br />
            <br />
            <b>We want to celebrate the arrival of PHP 7.0,</b> learn more about it, offer a chance to talk with other PHP developers, and enjoy that PHP is still going strong after more than 20 years.
            <br /> 
            <br />
            <b>What about food and drinks? </b>
            <br />
            We will have beers, food and a FREE <b style={{color: "#6160a2"}}>PHP7Rocks</b> T-shirt!
            <br />
            <br />
            </p>
            <p className="lead">
              <img src="img/shirt-top.jpg" url="" className="img-responsive m-auto" />
            </p>
        </HorizontalSplit>
        <br />
      </Section>

      <Section className="event-des">
        <HorizontalSplit padding="sm">
          <p>
            <br />
            <br />
            <b>Venue Sponsor: </b> 
            <br />
            <span style={{fontSize: 30}}>DreamPlex Coworking Space</span>
            <br />
            <a href="http://www.dreamplex.co" target="_blank">www.dreamplex.co</a>
          </p>
          <p className="lead">
            <img src="img/dreamplex-logo.png" url="" className="img-responsive m-auto" />
          </p>
        </HorizontalSplit>
        <br />
      </Section>

      
      <Section id="speakers-sect">
        <h2 className="text-center" id="speakers">Speakers</h2>
        <Team>
          <TeamMember name="Pierre Joye" title="PHP Core Developer" imageUrl="img/people/pierre2.jpg">
            <a href="https://www.linkedin.com/in/pierrejoye" target="_blank">Pierre Joye</a> is a PHP Core Developer and open source contributor for more than a decade. He leads the PHP team at Microsoft, is the main developer from LibGD, and works on many open source projects. After many years as a freelancer, Pierre now works with the Microsoft OpenSource Technology Center in the US and in Asia.
          </TeamMember>
          <TeamMember name="Lars Jankowfsky" title="Founder 8Bit Rockstars" imageUrl="img/people/lars.jpg">
            <a href="https://de.linkedin.com/in/larsjankowfsky" target="_blank">Lars</a> is a successful tech entrepreneur, investor and CTO. He helps tech startups around the world to scale - mostly by creating and scaling powerful tech teams. Lars founded many companies, among them OXID eSales, a German ecommerce market leader, whose clients generate over USD 7 billion gross and swoodoo AG which he later successfully sold to <a href="http://www.kayak.com" target="_blank">kayak.com</a> ,  where he helped the US team to solve the scaling issues and stability problems that arose due to the tremendous success of <a href="http://www.kayak.com" target="_blank">kayak.com</a> , one of the biggest travel websites on Earth.
          </TeamMember>
        </Team>
      </Section>

      
      <Section id="time-sect">
        <h2 className="text-center" id="time-and-place">Time And Place</h2>

        <p className="text-center">
          <b>Ho Chi Minh, Vietnam <br /> Dreamplex - Basement Level</b>
          <br />
          Saturday, December 19, 2015 from 6:00 PM to 9:00 PM (ICT)
        </p>
        <Map />
      </Section>

      
      <Section className="gray">
        <h2 className="text-center" id="sign-up">Sign up</h2>
        <p>Please fill your details, and we will contact you back with confirmation. </p>
        <SignupInline onSubmit={onSignup}/>
        <AlertModal modalId="alert-modal" onSubmit={onClosePopup}/>
      </Section>
      

      <Footer brandName={brandName} email={brandEmail} img={brandImg} 
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/dennybritz/neal-react"
        address={businessAddress}>
          <img src="img/logo_w.png" url=""/>
          <h3 className="text-center">Powered By 8 Bit Rockstars</h3>
      </Footer>
    </Page>
  );
};

