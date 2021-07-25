import React, { useState } from 'react';
import imgs from '../../images'

function Portfolio () {
    return (
        <div id = "work">
            <h2>Work</h2>            
            <div class="info">
                <div class="main-card">
                    <a href = "https://elisonliu97.github.io/Password-Generator-HW/"><img src ={imgs.passgen} /></a>
                    <div class = "card-title">Password Generator</div>
                </div>
                <div class="card">
                    <a href = "https://elisonliu97.github.io/Day-Planner-HW/"><img src ={imgs.dayplanner} /></a>
                    <div class = "card-title">Day Planner</div>
                </div>
                <div class="card">
                    <a href = "https://github.com/elisonliu97/E-Commerce-Back-End-Hw"><img src ="./images/earth-1756274_1920.jpg" /></a>
                    <div class = "card-title">E-Commerce Back End</div>
                </div>
                <div class="card">
                    <a href = "https://github.com/elisonliu97/Employee-Database-HW"><img src ="./images/milky-way-2695569_1920.jpg" /></a>
                    <div class = "card-title">Employee Database</div>
                </div>
                <div class="card">
                    <a href = "https://github.com/elisonliu97/team-profile-generator"><img src ="https://user-images.githubusercontent.com/28275237/122112032-65dfac00-cdee-11eb-9b70-e13a4daff54c.png" /></a>
                    <div class = "card-title">Team Profile Generator</div>
                </div>                
            </div>
        </div>
    )
}

export default Portfolio