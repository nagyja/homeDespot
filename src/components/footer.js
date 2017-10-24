import React, { Component } from 'react';

class Footer extends Component { //extends react based component, requiring {Component} as part of the React import.
constructor (props){
    super(props);
    this.state = { term: 'initial value'};
  }

  render() {
    return (
    	<Row>
    		<div className="col-lg-12" style="background-color:#eee;">
          		<p style="text-align:left;"><strong>More saving. More doing.<span>®</span></strong>			
          			<span style="float:right;">Need Help? Please call us at:
    					<a href="tel:+1-800-466-3337" title="Call The Home Depot" style="text-decoration: none;">
    						<strong>1-800-HOME-DEPOT</strong> (1-800-466-3337)
    					</a>
    				</span>
    			</p>
    		</div>  		
    	</Row>
    	<Row>
    		<ServiceFooter/>
    	</Row>
    	<Row>
    		<h3>Our Other Sites</h3>
    	</Row>
    	<Row>
    		<div>
    			<a href="http://www.homedepot.ca/" title="The Home Depot Canada">The Home Depot Canada</a>
    			<a href="http://www.homedepot.com.mx/" title="The Home Depot Mexico">The Home Depot Mexico</a>
    			<a href="https://www.blinds.com/" title="Blinds.com">Blinds.com</a>
    			<a href="https://www.proreferral.com/" title="Pro Referral">Pro Referral</a>
    		</div>
    	</Row>
    	<Row>
    		<Legal/>
		</Row>
    );
  }
}


let ServiceFooter = React.createClass({
	render(){
		return(
			<CustomerServ/>
			<Resource/>
			<About/>
			<Other/>
		)
	}
})
let CustomerServ = React.createClass({
	render(){
		return(
			<div>
	    		<h3>Customer Service</h3>
	    		<ul>
      				{props.serves.map((serve)=>
      				<ul href={serve.serveLinks} title={serve.text}>{serve.text}</ul>
      				)}
       			</ul>
			</div>
		)
	}
})
const serves = [
	{serveLinks:"https://secure2.homedepot.com/account/view/order/tracking", text:"Check Order Status"},
	{serveLinks:"www.homedepot.com/c/Credit_Center", text:"Pay Your Credit Card"},
	{serveLinks:"www.homedepot.com/c/Customer_Support_Answers#cancel", text:"Order Cancellation"},
	{serveLinks:"www.homedepot.com/c/Return_Policy", text:"Returns"},
	{serveLinks:"www.homedepot.com/c/About_Your_Online_Order", text:"Shipping &amp; Delivery"},
	{serveLinks:"www.homedepot.com/c/Product_Recalls", text:"Product Recalls"},
	{serveLinks:"www.homedepot.com/c/customer_service", text:"Help &amp; FAQs"}
];
let Resource = React.createClass({
	render(){
		return(
			<div>
				<h3>Resources</h3>
				<ul>
      				{props.resources.map((serve)=>
      				<ul href={resource.resourceLinks} title={resource.text}>{resource.text}</ul>
      				)}
       			</ul>
			</div>
		)
	}
})
const resources=[
	{resourceLinks:"www.homedepot.com/c/Savings_Center", text:"Specials &amp; Offers"},
	{resourceLinks:"www.homedepot.com/c/diy_projects_and_ideas", text:"DIY Projects &amp; Ideas"},
	{resourceLinks:"www.homedepot.com/c/tool_and_truck_rental", text:"Truck &amp; Tool Rental"},
	{resourceLinks:"www.homedepot.com/services/", text:"Home Services"},
	{resourceLinks:"www.homedepot.com/c/Moving_Guide", text:"Moving Services"},
	{resourceLinks:"http://www.homedepotmeasures.com", text:"Real Estate Floor Plan Services"},
	{resourceLinks:"www.homedepot.com/c/The_Home_Depot_Protection_Plans", text:"Protection Plans"},
	{resourceLinks:"http://www6.homedepot.com/rebatefinder/index.html", text:"Rebate Center"},
	{resourceLinks:"www.homedepot.com/c/Gift_Cards", text:"Gift Cards"}
];
let About = React.createClass({
	render(){
		return(
			<div>
				<h3>About Us</h3>
				<ul>
      				{props.abouts.map((serve)=>
      				<ul href={about.aboutLinks} title={about.text}>{about.text}</ul>
      				)}
       			</ul>
			</div>
		)
	}
})
const abouts=[
	{aboutLinks:"http://careers.homedepot.com", text:"Careers"},
	{aboutLinks:"https://corporate.homedepot.com", text:"Corporate Information"},
	{aboutLinks:"http://builtfromscratch.homedepot.com", text:"Digital Newsroom"},
	{aboutLinks:"http://www.homedepotfoundation.org", text:"Home Depot Foundation"},
	{aboutLinks:"http://ir.homedepot.com", text:"Investor Relations"},
	{aboutLinks:"www.homedepot.com/c/Government_Customers", text:"Government Customers"},
	{aboutLinks:"www.homedepot.com/c/suppliers_and_providers", text:"Suppliers &amp; Providers"},
	{aboutLinks:"www.homedepot.com/c/SF_MS_The_Home_Depot_Affiliate_Program", text:"Affiliate Program"},
	{aboutLinks:"http://ecooptions.homedepot.com", text:"Eco Options"}
];
let Other = React.createClass({
	render(){
		return(
			<div>
				<Financing/>
				<Signup/>
				<Social/>
			</div>
		)
	}
})
let Financing = React.createClass({
	render(){
		return(
			<div style="background-color:#eee;">
				<div>
					<img src="/public/assets/financing" width="40"/>
					<p>Special Financing Available everyday*</p>
				</div>
				<a href="www.homedepot.com/c/Credit_Center" title="Pay &amp; Manage Your Card">Pay &amp; Manage Your Card</a><br/>
				<a href="www.homedepot.com/c/Consumer_Credit_Card" title="Credit Offers">Credit Offers</a>
			</div>
		)
	}
})
let Signup = React.createClass({
	render(){
		return(
			<div>
				<p>Get $5 off when you sign up for<br/>
				emails with savings and tips.</p>
				<form>
					<input type="email" placeholder="Enter Email Address" size="20"/>
					<button type="submit"><span>GO</span></button>
				</form>
			</div>
		)
	}
})
let Social = React.createClass({
	render(){
		return(
			{props.socials.map((social)=>
				<a href={social.socialLinks} title={social.title}>
					<img border="0" src={social.source} width="52" height="52"/>
				</a>
			)}
		)
	}
});
const socials = [
	{source:"/public/assets/socIconFB", socialLinks: "https://www.facebook.com/homedepot", title:"Home Depot on Facebook"},
	{source:"/public/assets/socIconTW", socialLinks: "https://twitter.com/HomeDepot", title:"Home Depot on Twitter"},
	{source:"/public/assets/socIconPN", socialLinks: "http://pinterest.com/homedepot/", title:"Home Depot on Pinterest"},
	{source:"/public/assets/socIconBL", socialLinks: "http://ext.homedepot.com/community/blog/", title:"Home Depot Blog"},
	{source:"/public/assets/socIconYT", socialLinks: "http://www.youtube.com/user/homedepot", title:"Home Depot on Youtube"},
	{source:"/public/assets/socIconAP", socialLinks: "www.homedepot.com/c/SF_Mobile_Shopping", title:"Home Depot Mobile Apps"}
];

let Legal = React.createClass({
	render(){
    	return (
    		<p>© 2000-2017 Home Depot Product Authority, LLC. All Rights Reserved. Use of this site is subject to certain 
    			<a href="www.homedepot.com/c/Terms_of_Use">Terms Of Use</a>
    		</p>
    		<p>Local store prices may lety from those displayed. Products shown as available are normally stocked but inventory levels cannot be guaranteed</p>
    		<p>For screen reader problems with this website, please call 1-800-466-3337.</p>

      		<ul>
      			{props.legals.map((legal)=>
      				<ul href={legal.legalLinks} title={legal.text}>{legal.text}</ul>
      			)}
       		</ul>
    	);
    	}
    }		
});
const legals = [
	{legalLinks:"www.homedepot.com/c/Privacy_Security", text:"Privacy &amp; Security Statement"},
	{legalLinks:"www.homedepot.com/c/Privacy_Security#Information_Collected", text:"Cookie Usage"},
	{legalLinks:"www.homedepot.com/c/Manage_Privacy_Preferences", text:"Manage Privacy Preferences"},
	{legalLinks:"www.homedepot.com/c/California_Privacy_Rights", text:"California Privacy Rights"},
	{legalLinks:"www.homedepot.com/c/California_Supply_Chain_Act", text:"California Supply Chain Act"},
	{legalLinks:"www.homedepot.com/c/site_map", text:"Site Map"},
	{legalLinks:"www.homedepot.com/l/storeDirectory", text:"Store Directory"},
	{legalLinks:"www.homedepot.com", text:"Mobile Site"}
];


export default Footer;