import React from 'react'
import "./Resume.css"

function Resume() {
  return (
              <div id="resume">
                  <div id="header">
                      <div id="name"><strong>Dominick</strong> Vitelli</div>
                      <div id="role">Software Engineer</div>
                      <div id="pfp">
                          <img src="src/assets/images/dom.jpg" />
                      </div>
                  </div>
                  <div id="content" class="flex flex-row">
                      <div id="primary">
                          <div id="contacts">
                              <div class="contact">
                                  <div class="icon"></div>
                                  <span>Orange County, California</span>
                              </div>
                              <div class="contact">
                                  <div class="icon"></div>
                                  <span>+1 714-264-5216</span>
                              </div>
                              <div class="contact">
                                  <div class="icon"></div>
                                  <span>dominickbvitelli@gmail.com</span>
                              </div>
                          </div>
                          <div class="section">
                              <h1>Skills</h1>
                              <ul>
                                  <li>Javascript</li>
                                  <li>Typescript</li>
                                  <li>React</li>
                                  <li>Redux</li>
                                  <li>C#</li>
                                  <li>.Net</li>
                                  <li>SQL</li>
                                  <li>Git</li>
                                  <li>HTML</li>
                              </ul>
                          </div>
                          <div class="section">
                              <h1>Education</h1>
                              <h3>BS, Computer Science</h3>
                              <span>California Polytechnic University-Pomona</span>
                              <span>December 2020</span>
                          </div>
                      </div>
                      <div id="secondary">

                          <h1>Profile</h1>
                          <p>I am a driven software developer and operations manager with a passion for leveraging technology to drive
                              business
                              success.
                              With a solid background in development, I have a proven track record of delivering high-quality software
                              solutions, building ERP systems and ecommerce optimization.
                          </p>
                          <h1>Projects</h1>
                          <div id="job" class="flex flex-column space-between">
                              <h2>Matchpoint.gg</h2>
                              <h2>matchpoint.gg</h2>
                          </div>
                          <p>Successfully collaborated on Matchpoint.gg, a startup initiative aimed at revolutionizing the Super Smash Bros Ultimate
                              competitive scene through an authentic matchmaking service. Played a role in developing robust API endpoints using
                              Fastify, ensuring seamless communication and data exchange. Additionally, demonstrated expertise in front-end
                              development by implementing features using React and Typescript.</p>

                          <div id="job" class="flex flex-row space-between">
                              <h2>Java Swing SQL Database</h2>
                              <h2>Github Link</h2>
                          </div>
                          <p>I created an interface in Java Swing that can add, search, and delete a query in a SQL database. Enacts singleton design
                              principles to optimize efficiency.</p>

                          <h1>Experience</h1>
                          <div id="job" class="flex flex-column space-between">
                              <h2>Global Service Supply Chain</h2>
                              <h2>October 2022 - Present</h2>
                          </div>
                          <h3>HyperX</h3>
                          <p>Talk about Role</p>
                          <ul>
                              <li>Help establish vendor management, cross-functional collaboration, and implementing best practices to streamline
                                  supply
                                  chain operations and enhance customer satisfaction</li>
                              <li>Leverage analytics to optimize product inventory across global regions, ensuring optimal stock levels to meet
                                  customer
                                  demand.</li>
                          </ul>

                          <div id="job" class="flex flex-column space-between">
                              <h2>Commerce Operations Coordinator</h2>
                              <h2>November 2019 - August 2022</h2>
                          </div>
                          <h3>Team Liquid</h3>
                          <p>Talk about Role</p>
                          <ul>
                              <li>Worked with designers to build out and manage hundreds of product styles in ERP Systems such as AIMS360,
                                  QuickBooks
                                  Commerce, Sync and Shopify</li>
                              <li>Directly managed incoming product to warehouses in North America, China, Brazil and Europe</li>
                              <li>Collaborated with multiple cross-functional teams to establish consistent timely delivery of products and live
                                  product
                                  launches</li>
                              <li>Utilized backend organization skills to sort products for improved user experience</li>
                              <li>Tracked and managed all financial data in preparation for quarterly audit scenarios</li>
                          </ul>
                      </div>
                  </div>
              </div>
          
  )
}

export default Resume