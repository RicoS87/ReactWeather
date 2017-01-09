// function getTempCallBack (location, callback) {
//   callback(undefined, 29);
//   callback('City not found');
// }
//
// getTempCallBack('Cape Town', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(24);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Cape Town').then(function(temp){
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

function addPromise(num1, num2) {
  return new Promise(function(resolve, reject) {
    if(typeof num1 == 'number' && typeof num2 == 'number')  {
      resolve(num1 + num2);
      console.log(num1 + num2, temp);
    }else {
      reject('Only numbers can be added');
    }
  });
}

addPromise(5, '5').then(function(temp){
  console.log('success', temp);;
}, function(err) {
  console.log('error', err);
});
