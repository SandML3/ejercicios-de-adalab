'use strict'

const userInfo = {};
const job = 'developer';

userInfo.firstName = 'Sandra';
userInfo.lastName = 'Martín';
userInfo.age = 31;
userInfo['job'] = job;


console.log(userInfo);

userInfo.firstName = 'Pepita';
console.log(userInfo);

userInfo.age += 1;
console.log(userInfo);