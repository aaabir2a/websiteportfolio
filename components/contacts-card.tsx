"use client";
import { useEffect } from "react";

export default function ContactsCard() {
  useEffect(() => {
    // Initialize Google Map
    if (typeof window !== "undefined") {
      const google = window.google;
      if (google && google.maps) {
        const mapOptions = {
          center: { lat: 40.7128, lng: -74.006 }, // New York coordinates
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          navigationControl: false,
          scrollwheel: false,
          streetViewControl: false,
        };

        const map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );

        const marker = new google.maps.Marker({
          position: { lat: 40.7128, lng: -74.006 },
          map: map,
          title: "Ryan Adlard",
        });
      }
    }
  }, []);

  return (
    <div className="card-inner contacts" id="contacts-card">
      <div className="card-wrap">
        {/* Contacts Info */}
        <div className="content contacts">
          {/* title */}
          <div className="title">Get in Touch</div>

          {/* content */}
          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="map" id="map"></div>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Address . . . . .</strong> California, USA
                  </li>
                  <li>
                    <strong>Email . . . . .</strong> adlard@example.com
                  </li>
                  <li>
                    <strong>Phone . . . . .</strong> +123 654 78900
                  </li>
                  <li>
                    <strong>Freelance . . . . .</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="content contacts">
          {/* title */}
          <div className="title">Contact Form</div>

          {/* content */}
          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="contact_form">
                <form id="cform" method="post">
                  <div className="row">
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <div className="group-val">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <div className="group-val">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="align-left">
                    <a
                      href="#"
                      className="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("cform")?.submit();
                      }}
                    >
                      <span className="text">Send Message</span>
                      <span className="arrow"></span>
                    </a>
                  </div>
                </form>
                <div className="alert-success">
                  <p>Thanks, your message is sent successfully.</p>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
