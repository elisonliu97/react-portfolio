import React from 'react';
import imgs from '../../images'
import "./portfolio.css"


function Portfolio() {
    return (
        <div class="portfolio" id="work">
            <h2>Portfolio</h2>
            <p>Click on the bottom left of the card to go to the github repo.</p>
            <div class="card-section">
                <div class="card">
                    <a href="https://elisonliu97.github.io/Password-Generator-HW/"><img src={imgs.passgen} /></a>
                    <a href="https://github.com/elisonliu97/Password-Generator-HW"><div class="card-title">Password Generator</div></a>
                </div>
                <div class="card">
                    <a href="https://elisonliu97.github.io/Day-Planner-HW/"><img src={imgs.dayplanner} /></a>
                    <a href="https://github.com/elisonliu97/Day-Planner-HW"><div class="card-title">Day Planner</div></a>
                </div>
                <div class="card">
                    <a href="https://fitness-tracker-hw-el.herokuapp.com"><img src="https://user-images.githubusercontent.com/28275237/126218466-679b70ad-6962-49d9-8104-0da6bdd359e6.png" /></a>
                    <a href="https://github.com/elisonliu97/Fitness-Tracker-HW"><div class="card-title">Fitness Tracker</div></a>
                </div>
                <div class="card">
                    <a href="https://enigmatic-taiga-76650.herokuapp.com"><img src="https://raw.githubusercontent.com/harviator/project-2-auction-site/main/public/images/screen-shot.png" /></a>
                    <a href="https://github.com/harviator/project-2-auction-site"><div class="card-title">Auction Site</div></a>
                </div>
                <div class="card">
                    <a href="https://github.com/elisonliu97/team-profile-generator"><img src="https://user-images.githubusercontent.com/28275237/122112032-65dfac00-cdee-11eb-9b70-e13a4daff54c.png" /></a>
                    <a href="https://github.com/elisonliu97/team-profile-generator"><div class="card-title">Team Profile Generator</div></a>
                </div>
                <div class="card">
                    <a href="https://tech-blog-el.herokuapp.com/"><img src="https://user-images.githubusercontent.com/28275237/126917164-026cdd11-bd85-4c4f-bc50-2d1deed589c0.png" /></a>
                    <a href="https://github.com/elisonliu97/Tech-Blog-HW"><div class="card-title">Tech Blog</div></a>
                </div>
                <div class="card">
                    <a href="https://budget-tracker-el.herokuapp.com/"><img src="https://user-images.githubusercontent.com/28275237/126215584-5e726bb8-258d-4c74-b882-cb98a7b81aed.png" /></a>
                    <a href="https://github.com/elisonliu97/Budget-Tracker-HW"><div class="card-title">Budget Tracker</div></a>
                </div>
                <div class="card">
                    <a href="https://elisonliu97.github.io/Weather-App-HW/"><img src="https://user-images.githubusercontent.com/28275237/124401372-1a3a6700-dcf7-11eb-8527-d56111b234ce.png" /></a>
                    <a href="https://github.com/elisonliu97/Weather-App-HW"><div class="card-title">Weather App</div></a>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio