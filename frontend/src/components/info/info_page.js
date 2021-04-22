import React from 'react';
import { Link } from 'react-router-dom'

const InfoPage = (props) => {
  
  return (
    <div className="info-page">
      <a 
        className="external-link"
        rel="noreferrer" 
        href="https://github.com/andy-h-2016/arium" 
        target="_blank"><h1 className="about-header">Arium</h1>
      </a>
      <div className="about-info">
        <div className="about-body">Arium is a health promoting app that keeps track of your daily water consumption, furthers universal access to clean water, and provides an engaging user experience.</div>
        <div className="about-body">The benefits of drinking a healthy amount of water on a daily basis are numerous and often underappreciated. Water is vital to the functioning of almost every system in the human body and without water we would simply perish.</div>
        <div className="about-body">Arium's primary goal is to promote the healthy consumption of water by not only our users but also by people all across the world. When a user consumes a glass of water and records it in their log, we will donate an equivalent amount of water to a person living in poverty and in need of clean water.</div>
        <div className="about-body">In addition to health promotion and fighting global thirst we also endevour to provide an enjoyable user experience. Similar to a bonsai or aquarium our app creates a digital world for our users to take care of through their water recording actions. We hope that the world they are nourshing reminds them of both their own bodies and the people around the world they are helping.</div>
      </div>
      <div className="about-devs">
        <h3 className="all-devs">Meet Our Developers</h3>
        <div className="dev-info">
          <p>
            <a 
              rel="noreferrer"
              href="https://github.com/andy-h-2016" 
              target="_blank">
              <i className="fab fa-github fa-2x"></i>
            Andy Huang Team Lead
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              href="https://github.com/mdean7"
              target="_blank">
              <i className="fab fa-github fa-2x"></i>
            Michael Dean Frontend Lead
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              href="https://github.com/lijasontse/"
              target="_blank">
              <i className="fab fa-github fa-2x"></i>
              Jason Li Backend Lead
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              href="https://github.com/sdean14"
              target="_blank">
              <i className="fab fa-github fa-2x"></i>
              Satomi Dean Frontend/Backend Flex
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoPage;