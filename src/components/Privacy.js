import React from 'react';

export default class Privacy extends React.Component{
    render(){
        return(
            <div className=" d-flex flex-column mx-5 mt-5 text-left" >
            <div className="Subhead">
                <div className="Subhead-heading">Mission Statement</div>
                </div>
                <p>
                Here at Hackornaut, our mission is to help inform and secure our user's privacy.  This website is designed with that goal in mind.                 </p>
                <div className="Subhead">
                <div className="Subhead-heading">Key Features</div>
                </div>
                <p>
                Users can view an index of all breached sites.  Users can search their email to view all breaches associated with that particular email account.  Users can create an account to save their searches.                 
                </p>
                <div className="Subhead">
                <div className="Subhead-heading">5 Ways to Keep Your Emails Secure</div>
                </div>
                <p>
                1.	Use two-factor authentication
                The basic principle of two-factor authentication is simple: combine something you know with something you have. One example is a debit card, which requires you to have both your physical card and your PIN to verify your identity. By enabling two-factor authentication (or two-step verification), you aren’t putting all of your faith in a password. 
                </p>
                <p>
                2.	Limit Forwarding
                When we’re sent a message we want to share, we often click “Forward” without thinking about the consequences. Where is the message going? Who will see it? Where will it be stored? If your email is hosted on a corporate server, it is likely there are certain security measures in place to protect any sensitive information contained in your private email. When someone forwards an internal email to a recipient outside of your company, however, you are exposing that data to potentially unsecured, unencrypted servers.
                </p>
                <p>
                3.	Set expiration dates on your messages
                Inboxes are rarely cleaned up, that means that any sensitive information you send to a client could very well be sitting there months later. At that point, you no longer control the fate of your data. Set an expiration date on your email, so that after a certain date, it will no longer be readable by the recipient (or anyone else, for that matter).
                </p>
                <p>
                4.	Understand your service provider’s TOS
                Your email provider’s terms of service will tell you what kind of security they are offering you. Are they encrypting messages on their server? Do they have protections against brute-force attacks? Is there any guarantee that your data is being protected?  You’ll likely realize that keeping your private email secure is entirely up to you.
                </p>
                <p>
                5.	Encrypt your email 
                The best way to keep your private email away from prying eyes and hackers is to use encryption. Encryption protects your private email by jumbling up your messages, making them impossible to decipher unless you explicitly authorize someone to read them.
                </p>

                <div className="Subhead">
                <div className="Subhead-heading">Creators</div>
                </div>
                <p> Alicia Chao </p>
                <p> Allen Zhang </p>
                <p> Eric Stukenberg </p>

            </div>
        )
    }
}