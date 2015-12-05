function statisticalCorrelation(){
    var datosX = [186, 189, 190, 192, 193, 193, 198, 201, 203, 205];
    var datosY = [85, 85, 86, 90 ,87 ,91 ,94 , 103, 100, 101]

    var datos = new Array(datosX, datosY);
    var sumX = 0, sumY = 0, index = 0;

    var lenX = datosX.length;
    var lenY = datosY.length;
    var lenXY = lenX + lenY;

    for(index = 0; index < lenX; index++){
        sumX += datosX[index];
    }

    for(index = 0; index < lenY; index++){
        sumY += datosY[index];
    }

    var averageX = sumX / lenX;
    var averageY = sumY / lenY;
    console.log(datosX);
    console.log(averageX);
    console.log("");
    console.log(datosY);
    console.log(averageY);
    console.log("");

    console.log(
        pearsonCorrelation(
            datos, 0,1
        )
    );

}

/**
 *  @fileoverview Pearson correlation score algorithm.
 *  @author matt.west@kojilabs.com (Matt West)
 *  @license Copyright 2013 Matt West.
 *  Licensed under MIT (http://opensource.org/licenses/MIT).
 */


/**
 *  Calculate the person correlation score between two items in a dataset.
 *
 *  @param  {object}  prefs The dataset containing data about both items that
 *                    are being compared.
 *  @param  {string}  p1 Item one for comparison.
 *  @param  {string}  p2 Item two for comparison.
 *  @return {float}  The pearson correlation score.
 */
function pearsonCorrelation(prefs, p1, p2) {
  var si = [];

  for (var key in prefs[p1]) {
    if (prefs[p2][key]) si.push(key);
  }

  var n = si.length;

  if (n == 0) return 0;

  var sum1 = 0;
  for (var i = 0; i < si.length; i++) sum1 += prefs[p1][si[i]];

  var sum2 = 0;
  for (var i = 0; i < si.length; i++) sum2 += prefs[p2][si[i]];

  var sum1Sq = 0;
  for (var i = 0; i < si.length; i++) {
    sum1Sq += Math.pow(prefs[p1][si[i]], 2);
  }

  var sum2Sq = 0;
  for (var i = 0; i < si.length; i++) {
    sum2Sq += Math.pow(prefs[p2][si[i]], 2);
  }

  var pSum = 0;
  for (var i = 0; i < si.length; i++) {
    pSum += prefs[p1][si[i]] * prefs[p2][si[i]];
  }

  var num = pSum - (sum1 * sum2 / n);
  var den = Math.sqrt((sum1Sq - Math.pow(sum1, 2) / n) *
      (sum2Sq - Math.pow(sum2, 2) / n));

  if (den == 0) return 0;

  return num / den;
}
