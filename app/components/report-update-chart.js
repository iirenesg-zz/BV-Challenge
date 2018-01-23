import Component from '@ember/component';

export default Component.extend({
  amtTotal: 30,
  amtCurrent: 22,

  didInsertElement() {
    let self = this;
    let parent = $('#report-update-container')[0];
    let canvas = $('#report-update-canvas')[0];
    let strokeWidth = 15;
    if(window.innerWidth > 1024) strokeWidth += 5;
    canvas.width = parent.getBoundingClientRect().width;
    canvas.height = parent.getBoundingClientRect().height;

    let ctx = canvas.getContext("2d");
    ctx.lineWidth = strokeWidth;

    let startAngle = 3*Math.PI/4;
    let endAngle = 9*Math.PI/4;
    let radius = (canvas.width/2) - 35; 
    if(window.innerWidth >= 768 && window.innerWidth < 1200) radius += 10;

    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, radius, startAngle, endAngle);
    ctx.strokeStyle = 'rgba(255,255,255,0.48)';
    ctx.stroke();

    ctx.beginPath();
    let percent = self.amtCurrent/self.amtTotal;
    let currentAngle = ((7*Math.PI/4)*percent) + startAngle;
    ctx.arc(canvas.width/2, canvas.height/2, radius, startAngle, currentAngle);
    ctx.strokeStyle = 'rgba(255,255,255,1)';
    ctx.stroke();
  }
});
