import Component from '@ember/component';

export default Component.extend({
  currentRisk: 0.84,
  values: [
  {value: 0.1, color: '#EF1111'},
  {value: 0.15, color: '#F57423'},
  {value: 0.2, color: '#FBD734'},
  {value: 0.25, color: '#85B93D'},
  {value: 0.3, color: '#0F9A45'}],

  didInsertElement() {
    let self = this;
    let parent = $('#risk-score-container')[0];
    let canvas = $('#risk-score-canvas')[0];
    canvas.width = parent.getBoundingClientRect().width;
    canvas.height = parent.getBoundingClientRect().width;

    let startAngle = 3*Math.PI/4;
    let endAngle = 6*Math.PI/4;
    let lastAngle = startAngle;
    let riskAngle = (endAngle * self.currentRisk) + startAngle;
    let radius = (canvas.width/2) - 20;

    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 20;

    self.values.forEach((v) => {
      ctx.beginPath();
      let currentAngle = (endAngle * v.value) + lastAngle;
      ctx.arc(canvas.width/2, canvas.height/2, radius, lastAngle, currentAngle);
      ctx.strokeStyle = v.color;
      ctx.stroke();
      lastAngle = currentAngle;
    })

    ctx.beginPath();
    ctx.strokeStyle ='rgba(0, 2, 69, 0.64)';
    ctx.arc(canvas.width/2, canvas.height/2, radius, riskAngle, Math.PI/2);
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.lineCap="round";
    ctx.beginPath();
    ctx.moveTo((radius - 20) * (Math.cos(riskAngle)) + canvas.width/2, (radius - 20) * (Math.sin(riskAngle)) + canvas.height/2);
    ctx.lineTo((radius + 20) * (Math.cos(riskAngle)) + canvas.width/2, (radius + 20) * (Math.sin(riskAngle)) + canvas.height/2);
    ctx.strokeStyle = '#FFF';
    ctx.stroke();


  }
});
