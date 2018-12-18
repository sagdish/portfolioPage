import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          <div className="row">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Sagdi Formanov<br />
                  150 Mornign Sun Ave <br />
                  Mill Valley, CA 94941 US<br />
                  <span>(415) 748-4885</span>
                </p>
              </div>
              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">2 Days Ago</a></b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      <a href="#">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b><a href="#">3 Days Ago</a></b>
                  </li>
                </ul>
              </div> */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}