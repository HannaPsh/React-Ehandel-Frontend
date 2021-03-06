import React, { Component } from 'react'
import Modal from 'react-modal';
import Consent from "react-cookie-consent";

export default class CookieConsent extends Component {

    constructor() {
        super();
    
        this.state = {
        showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

  render() {
    return (
      <div><Consent 
         
      debug={false}
     expires={365}
     style={{background:'#203040', textAlign:'left'}}
     buttonStyle={{color:'black', background:'white',fontSize:'14px'}}
     buttonClasses="btnConsent"
     contentClasses="contentConsent"
     enableDeclineButton flipButtons>
      This site uses cookies. See our <button onClick={this.handleOpenModal}>Privacy policy</button> for more.
      </Consent>
      <Modal isOpen={this.state.showModal}>
      <button onClick={this.handleCloseModal}>Close</button>

      <h2>
  Cookie Policy of ICONIC
</h2>
      This document informs Users about the technologies that help this Website to achieve the purposes described below. Such technologies allow the Owner to access and store information (for example by using a Cookie) or use resources (for example by running a script) on a User’s device as they interact with this Website.

For simplicity, all such technologies are defined as "Trackers" within this document – unless there is a reason to differentiate.
For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this document, the term Cookies is only used where it is specifically meant to indicate that particular type of Tracker.

Some of the purposes for which Trackers are used may also require the User's consent. Whenever consent is given, it can be freely withdrawn at any time following the instructions provided in this document.

This Website uses Trackers managed directly by the Owner (so-called “first-party” Trackers) and Trackers that enable services provided by a third-party (so-called “third-party” Trackers). Unless otherwise specified within this document, third-party providers may access the Trackers managed by them.
The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime set by the Owner or the relevant provider. Some of them expire upon termination of the User’s browsing session.
In addition to what’s specified in the descriptions within each of the categories below, Users may find more precise and updated information regarding lifetime specification as well as any other relevant information – such as the presence of other Trackers - in the linked privacy policies of the respective third-party providers or by contacting the Owner.
    </Modal>


      </div>
    )
  }
};

