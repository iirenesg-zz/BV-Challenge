import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  currentRisk: 0.84, //Current score

  didInsertElement() {
    let self = this;
    let parent = $('#risk-score-container')[0];
    let canvas = $('#risk-score-canvas')[0];

    let startAngle = 3*Math.PI/4;
    let endAngle = 6*Math.PI/4;
    let lastAngle = startAngle;
    let riskAngle = (endAngle * self.currentRisk) + startAngle;

    //Values for the risk levels in order (from high risk to low risk)
    //The values must add up to 1
    let values = [
    {value: 0.1, color: '#EF1111'},
    {value: 0.15, color: '#F57423'},
    {value: 0.2, color: '#FBD734'},
    {value: 0.25, color: '#85B93D'},
    {value: 0.3, color: '#0F9A45'}];

    let ctx = canvas.getContext("2d");

    //Callback function - Draws the whole canvas
    function draw() {
      canvas.width = parent.getBoundingClientRect().width;
      canvas.height = parent.getBoundingClientRect().width;   
  
      let centerX = canvas.width/2;
      let centerY = canvas.height/2;
      let radius = centerX - 20;

      ctx.lineWidth = 20;

      //Draws the 5 color arcs
      values.forEach((v) => {
        ctx.beginPath();
        let currentAngle = (endAngle * v.value) + lastAngle;
        ctx.arc(centerX, centerY, radius, lastAngle, currentAngle);
        ctx.strokeStyle = v.color;
        ctx.stroke();
        lastAngle = currentAngle;
      })

      //Fill the remaining arc with a dark color
      ctx.beginPath();
      ctx.strokeStyle ='rgba(0, 2, 69, 0.64)';
      ctx.arc(centerX, centerY, radius, riskAngle, Math.PI/4);
      ctx.stroke();

      //Current risk score selector
      ctx.lineWidth = 10;
      ctx.lineCap="round";
      ctx.beginPath();
      let x = Math.cos(riskAngle);
      let y = Math.sin(riskAngle);
      ctx.moveTo((radius - 20) * (x + centerX), (radius - 20) * (y + centerY));
      ctx.lineTo((radius + 20) * (x + centerX), (radius + 20) * (y + centerY));
      ctx.strokeStyle = '#FFF';
      ctx.stroke();

      lastAngle = startAngle;
    }

    draw();

    //Redraw the canvas on window resize
    $(window).resize(() => {
      draw();
    });
  }
});
