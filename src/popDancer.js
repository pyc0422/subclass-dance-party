var MakePopDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('popDancer');
  var $pop = this.$node;
  this.$node.mouseover(function() {
    // $pop.css('width', '0');
    // $pop.css('height', '0');
    // $pop.css('border-left', '30px solid transparent');
    // $pop.css('border-right', '30px solid transparent');
    $pop.css('border-bottom', '60px solid brown');
    //$pop.css('position', 'absolute');
  });
  this.$node.mouseleave(function() {
    // $pop.css('width', '0');
    // $pop.css('height', '0');
    // $pop.css('border-left', '30px solid transparent');
    // $pop.css('border-right', '30px solid transparent');
    $pop.css('border-bottom', '60px solid powderblue');
   // $pop.css('position', 'absolute');
  });
};


MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.animate({
  //   'left': '100%'
  // }, 2000, 'swing');
  // this.$node.animate({
  //   'left': '0px'
  // }, 2000, 'swing');

};


// MakePopDancer.prototype.setStyle = function() {
//   var style = {
//     'width': 0,
//     'height': 0,
//     'border-left': '30px solid transparent',
//     'border-right': '30px solid transparent',
//     'border-bottom': '60px solid blue',
//     'position': 'absolute'
//   };
//   this.$node.css(style);
// };


