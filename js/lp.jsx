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
  SignupModal,
  Stripe
} from "neal-react";
import { SignupInline } from "./signup-inline.jsx";
import { Team, TeamMember } from "./team.jsx";
import { Navbar, NavItem } from "./navbar.jsx";
import { Footer, FooterAddress } from "./footer.jsx";
import Map from "./map.jsx";

const brandName = "8 Bit Rockstars";
const brand = <span></span>;
const brandEmail = "info@8bitrockr.com";
const brandImg = "img/logo_w.png";

// const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
//   name: "Stripe Integration Included",
//   description: "Like this? Donate $5 <3",
//   panelLabel: "Donate {{amount}}",
//   email: email,
//   amount: 500,
// });


const onSignup = ({ name: name, email: email, phone: phone, phpDeveloper: phpDeveloper, expirence: expirence }) => console.log({
  name: name,
  email: email,
  phone: phone,
  phpDeveloper: phpDeveloper,
  expirence: expirence
});

const businessAddress = (
  <address>
    <strong><a href="http://8bitrockr.com" target="_blank">8 Bit Rockstars </a></strong> <br />
    F12A-R22, Vincom Center, 72 Le Thanh Ton, P. Ben Nghe, <br />
    District 1, Ho Chi Minh City, Vietnam <br />
    +84 8668 19033 
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extrea Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extrea Feature 2": true,
  }),
});

const sampleCode = `<Page>
  <Hero><h1>{ /* Content */ }</h1></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;

// <Section className="subhero">
//   <ImageList centered>
//     <ImageListItem src="img/logo_w.png" url=""/>
//   </ImageList>
//   <h3 className="text-center">Powered By 8 Bit Rockstars</h3>
// </Section>


// <ImageListItem src="img/logo_w.png" url=""/>
// <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
// <NavItem dropdown={true}>
//   <DropdownToggle>Github</DropdownToggle>
//   <DropdownMenu>
//     <a href="https://github.com/dennybritz/neal-react" className="dropdown-item" target="_blank">
//       Neal React
//     </a>
//     <a href="https://github.com/dennybritz/neal-sample" className="dropdown-item" target="_blank">
//       Sample Page
//     </a>
//   </DropdownMenu>
// </NavItem>


// <ImageListItem src="img/press/forbes-logo.png" url="http://forbes.com/"/>
// <ImageListItem src="img/press/theverge-logo.png" url="http://www.theverge.com/"/>
// <ImageListItem src="img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>

//  <Section>
//   <HorizontalSplit padding="md">
//     <div>
//       <p className="lead">Batteries Included</p>
//       <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and its easy to extend.</p>
//     </div>
//     <div>
//       <p className="lead">Third-Party Integrations</p>
//       <p>External integrations like &nbsp;
//         <a href="http://www.google.com/analytics/">Google Analytics</a>,&nbsp;
//         <a href="https://segment.com/">Segment</a>,&nbsp;
//         <a href="https://stripe.com/">Stripe</a> and&nbsp;
//         <a href="http://typeform.com">Typeform</a> are included.
//         No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</p>
//     </div>
//     <div>
//       <p className="lead">Serverless Deployment</p>
//       <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
//     </div>
//   </HorizontalSplit>
// </Section>


// <Section className="nopad-bottom">
//   <Code lang="jsx" block>{sampleCode}</Code>
// </Section>

// <Section>
//   <Team>
//     <TeamMember name="Member 1" title="Co-founder" imageUrl="img/people/grumpycat.jpg">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </TeamMember>
//     <TeamMember name="Member 2" title="Co-founder" imageUrl="img/people/boo.jpg">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </TeamMember>
//     <TeamMember name="Member 3" title="Co-founder" imageUrl="img/people/panda.jpg">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </TeamMember>
//   </Team>
// </Section>

// <img src="img/people/boo.jpg" className="img-responsive" url=""/>

// <Section>
//   <PricingTable>
//     <PricingPlan {... pricingPlan1} />
//     <PricingPlan {... pricingPlan2} />
//     <PricingPlan {... pricingPlan3} />
//   </PricingTable>
// </Section>

// <Section>
//   <CustomerQuotes>
//     <CustomerQuote name="Paul Graham" title="YC" imageUrl="img/people/paulgraham.jpg">
//       <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
//     </CustomerQuote>
//     <CustomerQuote name="Elon Musk" imageUrl="img/people/elonmusk.jpg">
//       <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
//     </CustomerQuote>
//     <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="img/people/reidhoffman.jpg">
//       <p>If you are not embarrassed by the first version of your product, youve launched too late.</p>
//     </CustomerQuote>
//   </CustomerQuotes>
// </Section>

// <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
// <p>
//   <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
// </p>

// <img src="img/php7.png" url="" className="img-responsive m-auto" />

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
            PHP 7 celebration<br /> 
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
            <b>Venue Sponsor: </b> 
            <br />
            <span style={{fontSize: 30}}>DreamPlex Cowrking Space</span>
            </p>
            <p className="lead">
              <img src="img/gettingReady.jpg" url="" className="img-responsive m-auto" />
            </p>
        </HorizontalSplit>
        <br />
      </Section>

      
      <Section id="speakers-sect">
        <h2 className="text-center" id="speakers">Speakers</h2>
        <Team>
          <TeamMember name="Pierre Joye" title="PHP Core Developer" imageUrl="img/people/pierre2.jpg">
            <a href="https://www.linkedin.com/in/pierrejoye" target="_blank">Pierre Joye</a> is a PHP Core Developer and open source contributor for more than a decade. He leads the PHP Windows support team at Microsoft, is the main developer from LibGD, and works on many open source projects. After many years as a freelancer, Pierre now works with the Microsoft OpenSource Technology Center in the US and in Asia.
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
        <p>Please fill your details, and we will contact you back with confermation. </p>
        <SignupInline onSubmit={onSignup}/>
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

 // onMapClick={ () => {} } markers={[]} onMarkerRightclick={ () => {} } 
