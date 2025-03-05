//1. ATM Withdrawal System.

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    return balance - amount;
}
function AtmWithdrawal() {
    const balance = 10000;
    const amount = parseFloat(document.getElementById('atmAmount').value);
    const pin = document.getElementById('atmpin').value;
    const enteredPin = document.getElementById('atmEnteredPin').value;
    const result = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById('atmResult').innerText = result;
}


//2. Online Shopping Discount & Free Shipping

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }
    let finalAmount = orderAmount - (orderAmount * discount);
    if (finalAmount < 50) {
        finalAmount += 10;
    }
    return finalAmount.toFixed(2);
}

function CalculateFinalAmount() {
    const orderAmount = parseFloat(document.getElementById('orderAmount').value);
    const result = calculateFinalAmount(orderAmount);
    document.getElementById('shoppingAmmount').innerText = result;
}


//3.Student Grading System with Extra Credit

function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    return "F";
}
function CalculateGrade() {
    const marks = parseFloat(document.getElementById('stu_marks').value);
    const attendance = parseFloat(document.getElementById('attendance').value);
    const result = calculateGrade(marks, attendance);
    document.getElementById('gResult').innerText = result;
}

//4.Smart Traffic Light System

function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    else if (density === "Moderate Traffic") return 40;
    return 20;
}
function TrafficLightControl() {
    const density = document.getElementById('trafficDensity').value;
    const result = trafficLightControl(density);
    document.getElementById('trafficResult').innerText = result;
}

//5.Movie Ticket Pricing with Time and Age Discount

function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) {
        price *= 0.8;
    }
    if (age < 12) {
        price *= 0.6;
    } else if (age > 60) {
        price *= 0.7;
    }
    return price.toFixed(2);
}
function CalculateTicketPrice() {
    const age = parseInt(document.getElementById('age').value);
    const showTime = parseInt(document.getElementById('showTime').value);
    const result = calculateTicketPrice(age, showTime);
    document.getElementById('ticketPrice').innerText = result;
}

//6.Job Application Filter

function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree" ;
}
function IsEligibleForJob() {
    const age = parseInt(document.getElementById('jobAge').value);
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = document.getElementById('qualification').value;
    const result = isEligibleForJob(age, experience, qualification);
    document.getElementById('jobResult').innerText = result;
}

//7.E-commerce Coupon Redemption

function applyCoupon(orderAmount, couponCode) {
    let finalAmount = orderAmount;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalAmount -= finalAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
    } else {
        return "Invalid coupon or conditions not met";
    }
    return finalAmount.toFixed(2);
}
function ApplyCoupon() {
    const orderAmount = parseFloat(document.getElementById('couponOrderAmount').value);
    const couponCode = document.getElementById('couponCode').value;
    const result = applyCoupon(orderAmount, couponCode);
    document.getElementById('couponResult').innerText = result;
}

//8.Fitness Membership Plan

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic") {
        return "Basic Plan: $20/month";
    } else if (planType === "Premium" && wantsTrainer) {
        return "Premium Plan: $50/month with Personal Trainer";
    } else if (planType === "VIP" && wantsTrainer && wantsDietPlan) {
        return "VIP Plan: $80/month with Trainer and Diet Plan";
    }
    return "Invalid plan selection";
}
function ChoosePlan() {
    const planType = document.getElementById('planType').value;
    const wantsTrainer = document.getElementById('wantsTrainer').checked;
    const wantsDietPlan = document.getElementById('wantsDietPlan').checked;
    const result = choosePlan(planType, wantsTrainer, wantsDietPlan);
    document.getElementById('planResult').innerText = result;
}

//9.Electricity Bill Calculation with Peak Hours

function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    let totalBill = units * rate;
    if (timeOfDay < 8 || timeOfDay >= 20) {
        totalBill *= 1.1;
    }
    return totalBill.toFixed(2);
}
function testCalculateElectricityBill() {
    const units = parseFloat(document.getElementById('units').value);
    const timeOfDay = parseInt(document.getElementById('timeOfDay').value);
    const result = calculateElectricityBill(units, timeOfDay);
    document.getElementById('billResult').innerText = result;
}

//10.Flight Ticket Booking System

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    if (classType === "Business") {
        baseFare += 200;
    } else if (classType === "First") {
        baseFare += 500;
    }
    if (luggageWeight > 20) {
        baseFare += Math.ceil((luggageWeight - 20) / 10) * 50; 
    }
    if (isStudent) {
        baseFare *= 0.85;
    } else if (isSenior) {
        baseFare *= 0.90;
    }
    return baseFare.toFixed(2);
}
function CalculateFlightFare() {
    const classType = document.getElementById('classType').value;
    const luggageWeight = parseFloat(document.getElementById('luggageWeight').value);
    const isStudent = document.getElementById('isStudent').checked;
    const isSenior = document.getElementById('isSenior').checked;
    const result = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
    document.getElementById('flightResult').innerText = result;
}
