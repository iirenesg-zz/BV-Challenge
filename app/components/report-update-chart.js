import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  amtTotal: 30, //Total amount of days in the cycle
  amtCurrent: 22, //Amount of remaining days in the cycle

  didInsertElement() {
    let self = this;
    let parent = $('#report-update-container')[0];
    let canvas = $('#report-update-canvas')[0];
    let ctx = canvas.getContext("2d");

    let strokeWidth = 15;
    let startAngle = 3*Math.PI/4;
    let endAngle = 9*Math.PI/4;

    //Callback function - Draws the whole canvas
    function draw() {
      if(window.innerWidth > 1024) strokeWidth = 20;
      canvas.width = parent.getBoundingClientRect().width;
      canvas.height = parent.getBoundingClientRect().height;
      
      let centerX = canvas.width/2;
      let centerY = canvas.height/2;
      let radius = centerX - 35; 
      if(window.innerWidth < 480 || window.innerWidth >= 768 && window.innerWidth < 1200) radius += 10;

      ctx.lineWidth = strokeWidth;

      //Draws the full arc 
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.strokeStyle = 'rgba(255,255,255,0.48)';
      ctx.stroke();

      //Draws the current arc (Ramaining days) on top 
      ctx.beginPath();
      let percent = self.amtCurrent/self.amtTotal;
      let currentAngle = ((7*Math.PI/4)*percent) + startAngle;
      ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
      ctx.strokeStyle = '#FFF';
      ctx.stroke();
    }

    draw();

    //Redraw the canvas on window resize
    Ember.$(window).resize(() => {
      draw();
    });
  }
});
