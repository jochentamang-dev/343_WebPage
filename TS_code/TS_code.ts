/**
 * AREA 4
 */
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}
//actual array of the courses
const myCourses: Array<Course> = [{courseNumber: "CIS 163", courseName: "Computer Science II", semesterTaken:"Fall 2020"
}, { courseNumber: "CIS 263", courseName: "Data Structures & Algorithm", semesterTaken: "Winter 2021" }, { courseNumber: "MTH 225", courseName: "Discrete Structures: CS 1", semesterTaken: "Winter 2021" }, { courseNumber: "CIS 241", courseName: "System-Level Programming & Utilities", semesterTaken: "Fall 2021" }, { courseNumber: "MTH 204", courseName: "Linear Algebra I", semesterTaken: "Fall 2021" }, { courseNumber: "CIS 353", courseName: "Database", semesterTaken: "Winter 2022" }, { courseNumber: "MTH 325", courseName: "Discrete Structures: CS 2", semesterTaken: "Winter 2022" }, { courseNumber: "CIS 350", courseName: "Intro. to Software Engineering", semesterTaken: "Fal 2022" }, { courseNumber: "CIS 351", courseName: "Computer Organization and Assembly Language", semesterTaken: "Fall 2022" }, { courseNumber: "CIS 290", courseName: "Professional Responsibilities and Practices", semesterTaken: "Fall 2022" }]

//getting the target div
const area_4 = document.getElementById("area4-table")
//setting up table and header row
const table = document.createElement("table")
const left_header = document.createElement("th").appendChild(document.createTextNode("Course Number"))
const middle_header = document.createElement("th").appendChild(document.createTextNode("Course Name"))
const right_header = document.createElement("th").appendChild(document.createTextNode("Semester Taken"))
const top_row = document.createElement("tr")
top_row.appendChild(left_header)
top_row.appendChild(middle_header)
top_row.appendChild(right_header)
//looping through courses to create row
for (let c of myCourses)
{
    let row = document.createElement("tr")
    let cNum = document.createElement("td")
    cNum.appendChild(document.createTextNode(c.courseNumber))
    row.appendChild(cNum)
    let cName = document.createElement("td")
    cName.appendChild(document.createTextNode(c.courseName))
    row.appendChild(cName)
    let sem = document.createElement("td")
    sem.appendChild(document.createTextNode(c.semesterTaken))
    row.appendChild(sem)
    table.appendChild(row)
}
area_4?.appendChild(table)

/*************
 * AREA 6
 *************/

type Company =
    {
        name: string,           // Ex: "MSFT"
        abbreviation: string,   // Ex: Microsoft
        url: string             // Ex: https://microsoft.com
    }

const myCompanies: Array<Company> = [{ name: "MSFT", abbreviation: "Microsoft", url: "https://www.microsoft.com/en-us/" }, { name: "AMZN", abbreviation: "Amazon", url: "https://www.amazon.com/" }, { name: "NFLX", abbreviation: "Netflix", url: "https://www.netflix.com/" }, { name: "TWT", abbreviation: "Twitter", url: "https://twitter.com" }]

const area_6 = document.getElementById("area_6_list")
const unordered_list = document.createElement("ul")
for (let company of myCompanies)
{
    let list = document.createElement("li")
    let link = document.createElement("a")
    link.href = company.url
    link.appendChild(document.createTextNode(company.name))
    list.appendChild(link)
    unordered_list.appendChild(list)
}


area_6?.appendChild(unordered_list)

/***********
 * AREA 8
 ***********/

type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
}
const socialMedias: Array<SocialMedia> = [{icon: "/img/amazon.jpg", url:"https://www.amazon.com"}, {icon: "/img/fifth-third.png", url:"https://www.53.com/content/fifth-third/en.html"}, {icon: "/img/nike.png", url:"https://www.nike.com/"}, {icon:"/img/twitter.jpg", url:"https://www.twitter.com"}, {icon:"/img/instagram.png", url:"https://www.instagram.com"}]

const area_8 = document.getElementById("area_8")

for (let social of socialMedias)
{
    let link = document.createElement("a")
    link.href = social.url
    let img = document.createElement("img")
    img.src = social.icon
    link.appendChild(img)
    area_8?.appendChild(link)
    
}
  



