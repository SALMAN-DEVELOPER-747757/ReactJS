import React from 'react'
import Card from './components/Card'
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaLQi8T6c00NrPX391qJPBSiUcZ0iHUajW-Yti6gmZg&s=10",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior level",
    pay: 120,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFxfgtmC43i_LmI_cLo9Mb4rFbtSFGdUGS8lXA9OAeQ&s=10",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 135,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 110,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 145,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 125,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI Designer",
    tag1: "Part-time",
    tag2: "Mid level",
    pay: 100,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 155,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t27d9PkOhGNfpM2YpbKvcEeJ9qQSox5UMLzV4yjzTg&s=10",
    company: "IBM",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 95,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWzeCGL6YVpDZ1uGNyDuuY7Kf9UUSR_mPlP_138Vnbg&s=10",
    company: "Oracle",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 115,
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzGsfBiKTjQUbKwC2BVBfyWJThIXA-H_jHeBixRW5Eg&s=10",
    company: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part-time",
    tag2: "Senior level",
    pay: 130,
    location: "Islamabad, Pakistan",
  },
];
console.log(jobOpenings);
  // const arr=[
  //   {
  //     userName:'salman',
  //     age:33
  //   }
  //   ,{
  //     userName:'kheyam',
  //     age:88
  //   },
  //   {
  //     userName:'berlin',
  //     age:33
  //   }];
  // arr.map(function(elem){
  //   console.log(elem.userName);
    
  // })
return (
      <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}/>
      })}
  </div>
  )
}

export default App
