"use client";

import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"So what do SEO packages entail?"}
            answer={
              "Our SEO services also include keyword research, on page optimization, web optimizing, backlinking and performance tracking. They complement each other in the aim of optimizing the search ranking of the web page, further boosting the organic traffic, and facilitating the development of the company."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"What will be included in SMM packages?"}
            answer={
              "Our SMM packages include content creation, Content posting methodology, Targeting the viewer, Engagement Measure, and Campaigns! We develop social media strategies and marketing tactics that you can use to grow the visibility of your brand, attract customers and boost quality website traffic on various platforms."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What things do PPC packages include?"}
            answer={
              "Our PPC packages include ad creation, bid strategy, PPC optimization, and conversion tracking. All campaigns are continuously monitored to optimize results, to lower ad spend and to maximize ROI on your ad dollars."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"What do ORM packages contain?"}
            answer={
              "Talk about reputation management, monitoring and strategies. If you're looking to keep a steady eye on how your brand is being perceived online, improve customers' feedback, respond to negative comments and reinforce your brand's image to gain your audience's trust, our ORM services are for you."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
          <Accordian
            question={"What does Web Hosting entail?"}
            answer={
              "We provide space on the server, security, web backups, database, support and uptime monitoring with our web hosting packages. With 24/5 technical support, we provide your website the greatest degree of security, speed, reliability and accessibility that is possible."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"What elements are involved in Web Development?"}
            answer={
              "All web design, development, testing, deployment and integration are included in our web design services. We create responsive, high functioning web pages that provide a fantastic user experience and will support your business goals."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
