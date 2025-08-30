<!-- question 01 -->
01. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
<!-- answer 01 -->
1. getElementById()
বলতে আমি যেইটুকু বুঝি তা হলো, getElementById() এর মাধ্যমে কোন নির্দিষ্ট id দেওয়া একটি element সিলেক্ট করে। html এর মধ্যে id সাধারণত আলাদা আলাদা নাম দেওয়া হয়। এটি একটি মাত্র element কে রিটার্ন করে।

1.getElementsByClassName()
বলে যা বুঝি, html এ class সাধারণত অনেক জায়গায় ব্যাবহার করা যায় তাই এর মাধ্যমে অনেক গুলো elements কে সিলেক্ট করা যায়। যে কোন একটি class ব্যাবহার করে অন্য সকল একই নামের class গুলোর কাজ করা যায়।
3. querySelector()
বলতে যা বুঝি,এটি সাধারণত matching election কে সিলেক্ট করে। এটি css Selector এর মতো কাজ করে। (id,class,tag,attribute) সব সিলেক্টর গুলোই ব্যাবহার করা যায়।
4. querySelectorAll()
বলতে আমি আসলে জানিই, এটি 
getElementsByClassName() এর মতো একটি selector এর মাধ্যমে একই নামের সব selector এর জন্য কাজ করতে পারে


<!-- question 02 -->
02. How do you **create and insert a new element into the DOM**?

<!-- answer 02 -->
আমারা javascript এ html election বনাতে পরি, এবং সেটা DOM এ দিতে পারি। সাধারণত কোন election তৈরি করতে  document.createElement('tagName') ব্যাবহার করা হয়।  tagName এ আমরা যেই ধরনের element তৈরি করতে চাই যেমন div, p, li, button etc. ব্যাবহার করি।কোন election এর মধ্যে attribute যোগ করার জন্য innerText, innerHtml,setAttribute() ব্যাবহার করা হয়। এবং নতুন election কে DOM এ ঠুকানোর জন্য appendChild(), perpend() ect. ব্যাবহার করা হয়।


<!-- question 03 -->
03. What is **Event Bubbling** and how does it work?
<!-- answer 03 -->
Event Bubbling হলো যখন কোন child element কে কোন event দেয়া হয় যেমন click evet ব্যাবহার করা হয়। এটি প্রথমে child element কে ধরে এবং পর্যায়ক্রমে উপরের দিকে উঠতে থাকে। ঠিক পানিতে বুদবুদ এর মতো উপরে উঠে। child থেকে parent তারপর document এইভাবে উপরে ওঠে।


<!-- question 04 -->
04. What is **Event Delegation** in JavaScript? Why is it useful?
<!-- answer 04 -->
1.Event Delegation 
হলো সরাসরি parent এ listener বসানো হয় এবং, bubbling এর মাধ্যমে  child কে handel করা হয়। এর মাধ্যমে প্রতিটি child element এর জন্য আলাদা listener ব্যাবহার করা লাগে না ফলে আমাদের  code গুলো রিউজেবল হয়ে যায়।  কম code লিখে বেশি কাজ করা যায়। একটি element এর জন্য code লিখে একাধিক জায়গায় ব্যাবহার করা যায়।


<!-- question 05 -->
05. What is the difference between **preventDefault() and stopPropagation()** methods?
<!-- answer 05 -->
1. PreventDefault() 
 ব্যাবহার করে সাধারণত কোন element এর default behavior বন্ধ করে দেয়। যেমন আমরা কোন function এ কোন পেরামিটার দিয়ে রান করি তাহলে এটি inspect এর console এ বার বার রিলোড হয়।  এখানে paremeter.preventDefault() ব্যাবহার করলে reload টি বন্ধ হয়ে যায়।
2. stopPropagation() 
ব্যাবহার করে কোন event এর propagatin বন্ধ করে দেয়। কোন chila এ কোন event ব্যাবহার হলে সেটি বন্ধ করার জন্য stopPropagation() ব্যাবহার করা হয়।
