const jobs = [
    {
        "id": "J001",
        "title": "SDE Intern",
        "company": "Amazon",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["Java", "Data Structures", "Algorithms", "SQL"],
        "source": "LinkedIn",
        "postedDaysAgo": 2,
        "salaryRange": "₹40k–₹60k/month Internship",
        "applyUrl": "https://www.amazon.jobs/en/jobs/SF220013851/software-development-engineer-internship",
        "description": "Join our dynamic team as an SDE Intern and work on challenging projects. You will be responsible for designing, developing, and testing software applications. This is a great opportunity to learn from experienced engineers and make a real impact."
    },
    {
        "id": "J002",
        "title": "Graduate Engineer Trainee",
        "company": "Infosys",
        "location": "Pune",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["C++", "Python", "DBMS", "Problem Solving"],
        "source": "Naukri",
        "postedDaysAgo": 5,
        "salaryRange": "4–6 LPA",
        "applyUrl": "https://careers.infosys.com/jobdesc/12345",
        "description": "Infosys is hiring Graduate Engineer Trainees. As a GET, you will undergo intensive training and work on live projects. We are looking for candidates with strong technical skills and a passion for learning."
    },
    {
        "id": "J003",
        "title": "Junior Backend Developer",
        "company": "Swiggy",
        "location": "Hyderabad",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Node.js", "Express.js", "MongoDB", "REST APIs"],
        "source": "Indeed",
        "postedDaysAgo": 1,
        "salaryRange": "6–10 LPA",
        "applyUrl": "https://careers.swiggy.com/jobs/123",
        "description": "Swiggy is looking for a Junior Backend Developer to join our team. You will be responsible for developing and maintaining the server-side of our web applications. You will work closely with our frontend developers to build a seamless user experience."
    },
    {
        "id": "J004",
        "title": "Frontend Intern",
        "company": "Flipkart",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["HTML", "CSS", "JavaScript", "React"],
        "source": "LinkedIn",
        "postedDaysAgo": 7,
        "salaryRange": "₹25k–₹40k/month Internship",
        "applyUrl": "https://www.flipkartcareers.com/#!/job/34567",
        "description": "Flipkart is seeking a talented Frontend Intern to join our team. You will be working on our user-facing web applications, helping to create a beautiful and intuitive user experience. You will have the opportunity to work with cutting-edge technologies and learn from some of the best engineers in the industry."
    },
    {
        "id": "J005",
        "title": "QA Intern",
        "company": "Wipro",
        "location": "Chennai",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Manual Testing", "Automation Testing", "Selenium", "JIRA"],
        "source": "Naukri",
        "postedDaysAgo": 3,
        "salaryRange": "3–5 LPA",
        "applyUrl": "https://careers.wipro.com/job/54321",
        "description": "Wipro is looking for a QA Intern to join our quality assurance team. You will be responsible for testing our software applications to ensure they meet our high standards of quality. You will learn about different testing methodologies and tools, and you will have the opportunity to work on a variety of projects."
    },
    {
        "id": "J006",
        "title": "Data Analyst Intern",
        "company": "Accenture",
        "location": "Mumbai",
        "mode": "Remote",
        "experience": "Fresher",
        "skills": ["SQL", "Python", "R", "Tableau"],
        "source": "Indeed",
        "postedDaysAgo": 9,
        "salaryRange": "₹20k–₹35k/month Internship",
        "applyUrl": "https://www.accenture.com/in-en/careers/jobdetails?id=12345_india_1",
        "description": "Accenture is hiring a Data Analyst Intern. You will work with our data science team to collect, clean, and analyze data. You will learn how to use various data analysis tools and techniques, and you will have the opportunity to work on real-world business problems."
    },
    {
        "id": "J007",
        "title": "Java Developer (0-1)",
        "company": "TCS",
        "location": "Kolkata",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Java", "Spring", "Hibernate", "Microservices"],
        "source": "LinkedIn",
        "postedDaysAgo": 0,
        "salaryRange": "5–8 LPA",
        "applyUrl": "https://www.tcs.com/careers/job/56789",
        "description": "TCS is looking for a Java Developer with 0-1 years of experience. You will be responsible for developing and maintaining our Java-based applications. You will work with a team of experienced engineers to build high-quality software."
    },
    {
        "id": "J008",
        "title": "Python Developer (Fresher)",
        "company": "Capgemini",
        "location": "Noida",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Python", "Django", "Flask", "SQL"],
        "source": "Naukri",
        "postedDaysAgo": 4,
        "salaryRange": "4–7 LPA",
        "applyUrl": "https://www.capgemini.com/in-en/careers/job/67890",
        "description": "Capgemini is hiring a Python Developer. As a fresher, you will be trained on the latest Python frameworks and technologies. You will work on a variety of projects, from web development to data science."
    },
    {
        "id": "J009",
        "title": "React Developer (1-3)",
        "company": "Razorpay",
        "location": "Bengaluru",
        "mode": "Remote",
        "experience": "1-3",
        "skills": ["React", "Redux", "JavaScript", "REST APIs"],
        "source": "Indeed",
        "postedDaysAgo": 8,
        "salaryRange": "10–18 LPA",
        "applyUrl": "https://razorpay.com/careers/job/78901",
        "description": "Razorpay is looking for a React Developer with 1-3 years of experience. You will be responsible for developing and maintaining our user-facing web applications. You will work with a team of talented engineers to build a world-class product."
    },
    {
        "id": "J010",
        "title": "SDE Intern",
        "company": "PhonePe",
        "location": "Pune",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["Java", "Kotlin", "Android", "iOS"],
        "source": "LinkedIn",
        "postedDaysAgo": 1,
        "salaryRange": "₹35k–₹55k/month Internship",
        "applyUrl": "https://www.phonepe.com/careers/job/89012",
        "description": "PhonePe is hiring an SDE Intern to work on our mobile applications. You will be responsible for developing and testing new features for our Android and iOS apps. You will have the opportunity to learn from experienced mobile developers and make a real impact on our product."
    },
    {
        "id": "J011",
        "title": "Graduate Engineer Trainee",
        "company": "Cognizant",
        "location": "Hyderabad",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["C#", ".NET", "SQL", "Azure"],
        "source": "Naukri",
        "postedDaysAgo": 6,
        "salaryRange": "4–6 LPA",
        "applyUrl": "https://careers.cognizant.com/job/90123",
        "description": "Cognizant is looking for Graduate Engineer Trainees. You will be trained on the latest Microsoft technologies and work on projects for our global clients. We are looking for candidates with strong analytical and problem-solving skills."
    },
    {
        "id": "J012",
        "title": "Junior Backend Developer",
        "company": "Paytm",
        "location": "Noida",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Go", "Gin", "PostgreSQL", "GraphQL"],
        "source": "Indeed",
        "postedDaysAgo": 2,
        "salaryRange": "7–12 LPA",
        "applyUrl": "https://paytm.com/careers/job/1234",
        "description": "Paytm is hiring a Junior Backend Developer to join our team. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J013",
        "title": "Frontend Intern",
        "company": "Zoho",
        "location": "Chennai",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["HTML", "CSS", "JavaScript", "Vue.js"],
        "source": "LinkedIn",
        "postedDaysAgo": 10,
        "salaryRange": "₹20k–₹35k/month Internship",
        "applyUrl": "https://www.zohocorp.com/careers/job/2345",
        "description": "Zoho is looking for a Frontend Intern to work on our web applications. You will be responsible for creating a beautiful and intuitive user interface. You will have the opportunity to work with a variety of frontend technologies and learn from experienced developers."
    },
    {
        "id": "J014",
        "title": "QA Intern",
        "company": "IBM",
        "location": "Bengaluru",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Manual Testing", "API Testing", "Postman", "JIRA"],
        "source": "Naukri",
        "postedDaysAgo": 4,
        "salaryRange": "3–5 LPA",
        "applyUrl": "https://www.ibm.com/in-en/employment/job/3456",
        "description": "IBM is hiring a QA Intern to join our quality assurance team. You will be responsible for testing our software applications to ensure they meet our high standards of quality. You will learn about different testing methodologies and tools, and you will have the opportunity to work on a variety of projects."
    },
    {
        "id": "J015",
        "title": "Data Analyst Intern",
        "company": "Oracle",
        "location": "Hyderabad",
        "mode": "Remote",
        "experience": "Fresher",
        "skills": ["SQL", "Excel", "Power BI", "Statistics"],
        "source": "Indeed",
        "postedDaysAgo": 0,
        "salaryRange": "₹25k–₹40k/month Internship",
        "applyUrl": "https://www.oracle.com/in/careers/job/4567",
        "description": "Oracle is looking for a Data Analyst Intern. You will work with our data science team to collect, clean, and analyze data. You will learn how to use various data analysis tools and techniques, and you will have the opportunity to work on real-world business problems."
    },
    {
        "id": "J016",
        "title": "Java Developer (1-3)",
        "company": "SAP",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Java", "Spring Boot", "Kafka", "Docker"],
        "source": "LinkedIn",
        "postedDaysAgo": 3,
        "salaryRange": "12–20 LPA",
        "applyUrl": "https://jobs.sap.com/job/5678",
        "description": "SAP is hiring a Java Developer with 1-3 years of experience. You will be responsible for developing and maintaining our enterprise applications. You will work with a team of experienced engineers to build scalable and reliable software."
    },
    {
        "id": "J017",
        "title": "Python Developer (0-1)",
        "company": "Dell",
        "location": "Chennai",
        "mode": "Hybrid",
        "experience": "0-1",
        "skills": ["Python", "FastAPI", "PostgreSQL", "AWS"],
        "source": "Naukri",
        "postedDaysAgo": 8,
        "salaryRange": "6–9 LPA",
        "applyUrl": "https://jobs.dell.com/job/6789",
        "description": "Dell is looking for a Python Developer with 0-1 years of experience. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J018",
        "title": "React Developer (Fresher)",
        "company": "Freshworks",
        "location": "Chennai",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["React", "JavaScript", "HTML", "CSS"],
        "source": "Indeed",
        "postedDaysAgo": 5,
        "salaryRange": "5–8 LPA",
        "applyUrl": "https://www.freshworks.com/company/careers/job/7890",
        "description": "Freshworks is hiring a React Developer. As a fresher, you will be trained on the latest frontend technologies and work on our user-facing web applications. We are looking for candidates with a passion for building beautiful and intuitive user interfaces."
    },
    {
        "id": "J019",
        "title": "SDE Intern",
        "company": "Juspay",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["Functional Programming", "Scala", "Haskell", "PureScript"],
        "source": "LinkedIn",
        "postedDaysAgo": 2,
        "salaryRange": "₹50k–₹70k/month Internship",
        "applyUrl": "https://juspay.in/careers/job/8901",
        "description": "Juspay is looking for an SDE Intern to work on our core payments platform. You will have the opportunity to learn about functional programming and build highly reliable and scalable systems. We are for candidates with a strong desire to learn and grow."
    },
    {
        "id": "J020",
        "title": "Graduate Engineer Trainee",
        "company": "CRED",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["Java", "Python", "Data Structures", "Algorithms"],
        "source": "Naukri",
        "postedDaysAgo": 7,
        "salaryRange": "15–25 LPA",
        "applyUrl": "https://careers.cred.club/job/9012",
        "description": "CRED is hiring Graduate Engineer Trainees. You will be part of a team of talented engineers building a product that is used by millions of people. We are looking for candidates who are passionate about technology and want to make a difference."
    },
    {
        "id": "J021",
        "title": "Junior Backend Developer",
        "company": "CodeLeap",
        "location": "Remote",
        "mode": "Remote",
        "experience": "0-1",
        "skills": ["Python", "Django", "PostgreSQL", "Celery"],
        "source": "Indeed",
        "postedDaysAgo": 1,
        "salaryRange": "5–9 LPA",
        "applyUrl": "https://www.codeleap.tech/careers/job/1235",
        "description": "CodeLeap is a fast-growing startup looking for a Junior Backend Developer. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J022",
        "title": "Frontend Intern",
        "company": "InnovateNow",
        "location": "Pune",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["HTML", "CSS", "JavaScript", "Angular"],
        "source": "LinkedIn",
        "postedDaysAgo": 9,
        "salaryRange": "₹15k–₹30k/month Internship",
        "applyUrl": "https://www.innovatenow.com/careers/job/2346",
        "description": "InnovateNow is looking for a Frontend Intern to work on our web applications. You will be responsible for creating a beautiful and intuitive user interface. You will have the opportunity to work with a variety of frontend technologies and learn from experienced developers."
    },
    {
        "id": "J023",
        "title": "QA Intern",
        "company": "TestGrid",
        "location": "Remote",
        "mode": "Remote",
        "experience": "Fresher",
        "skills": ["Manual Testing", "Mobile Testing", "Appium", "JIRA"],
        "source": "Naukri",
        "postedDaysAgo": 3,
        "salaryRange": "3–4 LPA",
        "applyUrl": "https://www.testgrid.io/careers/job/3457",
        "description": "TestGrid is hiring a QA Intern to join our quality assurance team. You will be responsible for testing our mobile applications to ensure they meet our high standards of quality. You will learn about different testing methodologies and tools, and you will have the opportunity to work on a variety of projects."
    },
    {
        "id": "J024",
        "title": "Data Analyst Intern",
        "company": "DataWeave",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["SQL", "Python", "Web Scraping", "Data Cleaning"],
        "source": "Indeed",
        "postedDaysAgo": 6,
        "salaryRange": "₹30k–₹45k/month Internship",
        "applyUrl": "https://dataweave.com/careers/job/4568",
        "description": "DataWeave is looking for a Data Analyst Intern. You will work with our data science team to collect, clean, and analyze data from the web. You will learn how to use various data analysis tools and techniques, and you will have the opportunity to work on real-world business problems."
    },
    {
        "id": "J025",
        "title": "Java Developer (3-5)",
        "company": "Amazon",
        "location": "Hyderabad",
        "mode": "Hybrid",
        "experience": "3-5",
        "skills": ["Java", "Spring", "AWS", "DynamoDB"],
        "source": "LinkedIn",
        "postedDaysAgo": 0,
        "salaryRange": "20–35 LPA",
        "applyUrl": "https://www.amazon.jobs/en/jobs/SF220013852/software-development-engineer-ii",
        "description": "Amazon is hiring a Java Developer with 3-5 years of experience. You will be responsible for designing, developing, and deploying our backend services. You will work with a team of experienced engineers to build highly scalable and reliable systems."
    },
    {
        "id": "J026",
        "title": "Python Developer (1-3)",
        "company": "Flipkart",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Python", "Django", "REST APIs", "MySQL"],
        "source": "Naukri",
        "postedDaysAgo": 5,
        "salaryRange": "12–22 LPA",
        "applyUrl": "https://www.flipkartcareers.com/#!/job/34568",
        "description": "Flipkart is looking for a Python Developer with 1-3 years of experience. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J027",
        "title": "React Developer (0-1)",
        "company": "Wipro",
        "location": "Remote",
        "mode": "Remote",
        "experience": "0-1",
        "skills": ["React", "JavaScript", "HTML", "CSS"],
        "source": "Indeed",
        "postedDaysAgo": 2,
        "salaryRange": "4–7 LPA",
        "applyUrl": "https://careers.wipro.com/job/54322",
        "description": "Wipro is hiring a React Developer. You will be responsible for developing and maintaining our user-facing web applications. We are looking for candidates with a passion for building beautiful and intuitive user interfaces."
    },
    {
        "id": "J028",
        "title": "SDE Intern",
        "company": "Microsoft",
        "location": "Hyderabad",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["C++", "C#", "Data Structures", "Algorithms"],
        "source": "LinkedIn",
        "postedDaysAgo": 8,
        "salaryRange": "₹45k–₹65k/month Internship",
        "applyUrl": "https://careers.microsoft.com/us/en/job/123456",
        "description": "Microsoft is looking for an SDE Intern to work on our core products. You will have the opportunity to work on challenging projects and make a real impact. We are looking for candidates with strong technical skills and a passion for learning."
    },
    {
        "id": "J029",
        "title": "Graduate Engineer Trainee",
        "company": "HCL Tech",
        "location": "Noida",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Java", "SQL", "Testing", "Communication"],
        "source": "Naukri",
        "postedDaysAgo": 4,
        "salaryRange": "3.5–5.5 LPA",
        "applyUrl": "https://www.hcltech.com/careers/job/123456",
        "description": "HCL Tech is hiring Graduate Engineer Trainees. You will be trained on the latest technologies and work on projects for our global clients. We are looking for candidates with strong analytical and problem-solving skills."
    },
    {
        "id": "J030",
        "title": "Junior Backend Developer",
        "company": "Zomato",
        "location": "Gurugram",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq"],
        "source": "Indeed",
        "postedDaysAgo": 1,
        "salaryRange": "8–14 LPA",
        "applyUrl": "https://www.zomato.com/careers/job/123456",
        "description": "Zomato is looking for a Junior Backend Developer to join our team. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J031",
        "title": "Frontend Intern",
        "company": "Techolution",
        "location": "Remote",
        "mode": "Remote",
        "experience": "Fresher",
        "skills": ["HTML", "CSS", "JavaScript", "TypeScript"],
        "source": "LinkedIn",
        "postedDaysAgo": 10,
        "salaryRange": "₹15k–₹25k/month Internship",
        "applyUrl": "https://techolution.com/careers/",
        "description": "Techolution is looking for a Frontend Intern to work on our innovative projects. You will be responsible for creating a beautiful and intuitive user interface. You will have the opportunity to work with a variety of frontend technologies and learn from experienced developers."
    },
    {
        "id": "J032",
        "title": "QA Intern",
        "company": "Mindtree",
        "location": "Bengaluru",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Manual Testing", "SQL", "Communication", "Teamwork"],
        "source": "Naukri",
        "postedDaysAgo": 3,
        "salaryRange": "3–4.5 LPA",
        "applyUrl": "https://www.mindtree.com/careers/job/123456",
        "description": "Mindtree is hiring a QA Intern to join our quality assurance team. You will be responsible for testing our software applications to ensure they meet our high standards of quality. You will learn about different testing methodologies and tools, and you will have the opportunity to work on a variety of projects."
    },
    {
        "id": "J033",
        "title": "Data Analyst Intern",
        "company": "Myntra",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["SQL", "Excel", "Python", "Data Visualization"],
        "source": "Indeed",
        "postedDaysAgo": 7,
        "salaryRange": "₹30k–₹50k/month Internship",
        "applyUrl": "https://careers.myntra.com/job/123456",
        "description": "Myntra is looking for a Data Analyst Intern. You will work with our data science team to collect, clean, and analyze data. You will learn how to use various data analysis tools and techniques, and you will have the opportunity to work on real-world business problems."
    },
    {
        "id": "J034",
        "title": "Java Developer (0-1)",
        "company": "Persistent Systems",
        "location": "Pune",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Java", "Spring", "REST APIs", "SQL"],
        "source": "LinkedIn",
        "postedDaysAgo": 0,
        "salaryRange": "5–7 LPA",
        "applyUrl": "https://www.persistent.com/careers/job/123456",
        "description": "Persistent Systems is looking for a Java Developer with 0-1 years of experience. You will be responsible for developing and maintaining our Java-based applications. You will work with a team of experienced engineers to build high-quality software."
    },
    {
        "id": "J035",
        "title": "Python Developer (Fresher)",
        "company": "LTI",
        "location": "Mumbai",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Python", "SQL", "Problem Solving", "Communication"],
        "source": "Naukri",
        "postedDaysAgo": 6,
        "salaryRange": "4–6 LPA",
        "applyUrl": "https://www.lntinfotech.com/careers/job/123456",
        "description": "LTI is hiring a Python Developer. As a fresher, you will be trained on the latest Python frameworks and technologies. You will work on a variety of projects, from web development to data science."
    },
    {
        "id": "J036",
        "title": "React Developer (1-3)",
        "company": "Udaan",
        "location": "Bengaluru",
        "mode": "Remote",
        "experience": "1-3",
        "skills": ["React", "Redux", "TypeScript", "GraphQL"],
        "source": "Indeed",
        "postedDaysAgo": 4,
        "salaryRange": "14–25 LPA",
        "applyUrl": "https://udaan.com/careers/job/123456",
        "description": "Udaan is looking for a React Developer with 1-3 years of experience. You will be responsible for developing and maintaining our user-facing web applications. You will work with a team of talented engineers to build a world-class product."
    },
    {
        "id": "J037",
        "title": "SDE Intern",
        "company": "Google",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["C++", "Java", "Python", "Data Structures", "Algorithms"],
        "source": "LinkedIn",
        "postedDaysAgo": 9,
        "salaryRange": "₹60k–₹80k/month Internship",
        "applyUrl": "https://careers.google.com/jobs/results/123456/",
        "description": "Google is looking for an SDE Intern to work on our core products. You will have the opportunity to work on challenging projects and make a real impact. We are looking for candidates with strong technical skills and a passion for learning."
    },
    {
        "id": "J038",
        "title": "Graduate Engineer Trainee",
        "company": "Tech Mahindra",
        "location": "Hyderabad",
        "mode": "Hybrid",
        "experience": "Fresher",
        "skills": ["Java", "C++", "SQL", "Networking"],
        "source": "Naukri",
        "postedDaysAgo": 2,
        "salaryRange": "3.5–5 LPA",
        "applyUrl": "https://careers.techmahindra.com/job/123456",
        "description": "Tech Mahindra is hiring Graduate Engineer Trainees. You will be trained on the latest technologies and work on projects for our global clients. We are looking for candidates with strong analytical and problem-solving skills."
    },
    {
        "id": "J039",
        "title": "Junior Backend Developer",
        "company": "Dunzo",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["Go", "Python", "PostgreSQL", "Docker"],
        "source": "Indeed",
        "postedDaysAgo": 5,
        "salaryRange": "9–15 LPA",
        "applyUrl": "https://www.dunzo.com/careers/job/123456",
        "description": "Dunzo is hiring a Junior Backend Developer to join our team. You will be responsible for developing and maintaining our backend services. You will work with a team of experienced engineers to build a scalable and reliable platform."
    },
    {
        "id": "J040",
        "title": "Frontend Intern",
        "company": "Groww",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "Fresher",
        "skills": ["React", "JavaScript", "HTML", "CSS"],
        "source": "LinkedIn",
        "postedDaysAgo": 1,
        "salaryRange": "₹30k–₹50k/month Internship",
        "applyUrl": "https://groww.in/careers/job/123456",
        "description": "Groww is looking for a Frontend Intern to work on our web and mobile applications. You will be responsible for creating a beautiful and intuitive user interface. You will have the opportunity to work with a variety of frontend technologies and learn from experienced developers."
    },
    {
        "id": "J041",
        "title": "Java Developer (3-5)",
        "company": "Intuit",
        "location": "Bengaluru",
        "mode": "Hybrid",
        "experience": "3-5",
        "skills": ["Java", "Spring Boot", "REST APIs", "AWS"],
        "source": "Naukri",
        "postedDaysAgo": 3,
        "salaryRange": "25–40 LPA",
        "applyUrl": "https://www.intuit.com/careers/job/123456/",
        "description": "Intuit is hiring a Senior Java Developer to build world-class financial products. You will own the design and development of microservices in a distributed architecture. This role requires strong problem-solving skills and a passion for high-quality code."
    },
    {
        "id": "J042",
        "title": "QA Engineer (1-3)",
        "company": "PayU",
        "location": "Gurugram",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Automation Testing", "Selenium", "Java", "API Testing", "Postman"],
        "source": "Indeed",
        "postedDaysAgo": 7,
        "salaryRange": "8–15 LPA",
        "applyUrl": "https://careers.payu.com/job/123456",
        "description": "PayU is looking for a skilled QA Engineer to ensure the quality of our payment gateway products. You will be responsible for creating and executing automated test suites. Experience with performance and security testing is a plus."
    },
    {
        "id": "J043",
        "title": "DevOps Engineer (1-3)",
        "company": "Chargebee",
        "location": "Chennai",
        "mode": "Remote",
        "experience": "1-3",
        "skills": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        "source": "LinkedIn",
        "postedDaysAgo": 0,
        "salaryRange": "12–20 LPA",
        "applyUrl": "https://www.chargebee.com/careers/job/123456",
        "description": "Chargebee is seeking a DevOps Engineer to manage our cloud infrastructure. You will be responsible for automating our build, test, and deployment pipelines. You should have a strong understanding of infrastructure as code and CI/CD best practices."
    },
    {
        "id": "J044",
        "title": "Data Scientist (3-5)",
        "company": "Fractal Analytics",
        "location": "Mumbai",
        "mode": "Hybrid",
        "experience": "3-5",
        "skills": ["Python", "R", "Machine Learning", "Deep Learning", "Spark"],
        "source": "Naukri",
        "postedDaysAgo": 5,
        "salaryRange": "20–35 LPA",
        "applyUrl": "https://fractal.ai/careers/job/123456",
        "description": "Fractal Analytics is hiring a Data Scientist to solve complex business problems. You will work on end-to-end data science projects, from data collection to model deployment. You should have a strong background in statistics and machine learning."
    },
    {
        "id": "J045",
        "title": "UX Designer (1-3)",
        "company": "Cleartrip",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Figma", "Sketch", "User Research", "Wireframing", "Prototyping"],
        "source": "Indeed",
        "postedDaysAgo": 8,
        "salaryRange": "10–18 LPA",
        "applyUrl": "https://www.cleartrip.com/careers/job/123456",
        "description": "Cleartrip is looking for a talented UX Designer to create intuitive and engaging user experiences. You will be involved in the entire design process, from user research to high-fidelity prototyping. A strong portfolio is required."
    },
    {
        "id": "J046",
        "title": "Product Manager (3-5)",
        "company": "BookMyShow",
        "location": "Mumbai",
        "mode": "Hybrid",
        "experience": "3-5",
        "skills": ["Product Strategy", "Roadmapping", "Agile", "User Stories", "Analytics"],
        "source": "LinkedIn",
        "postedDaysAgo": 2,
        "salaryRange": "25–45 LPA",
        "applyUrl": "https://in.bookmyshow.com/careers/job/123456",
        "description": "BookMyShow is seeking an experienced Product Manager to lead one of our product lines. You will be responsible for defining the product vision, strategy, and roadmap. You should have a proven track record of shipping successful products."
    },
    {
        "id": "J047",
        "title": "Android Developer (1-3)",
        "company": "Dream11",
        "location": "Mumbai",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Kotlin", "Java", "Android SDK", "MVVM", "Jetpack Compose"],
        "source": "Naukri",
        "postedDaysAgo": 6,
        "salaryRange": "15–28 LPA",
        "applyUrl": "https://www.dream11.com/careers/job/123456",
        "description": "Dream11 is looking for an Android Developer to build and maintain our fantasy sports app. You will be responsible for creating a high-performance, responsive, and beautiful user experience. You should be passionate about mobile development."
    },
    {
        "id": "J048",
        "title": "iOS Developer (1-3)",
        "company": "MakeMyTrip",
        "location": "Gurugram",
        "mode": "Hybrid",
        "experience": "1-3",
        "skills": ["Swift", "Objective-C", "iOS SDK", "SwiftUI", "Combine"],
        "source": "Indeed",
        "postedDaysAgo": 4,
        "salaryRange": "15–28 LPA",
        "applyUrl": "https://careers.makemytrip.com/job/123456",
        "description": "MakeMyTrip is hiring an iOS Developer to work on our travel booking app. You will be responsible for creating a seamless and delightful user experience for our iOS users. You should have a strong understanding of the iOS ecosystem."
    },
    {
        "id": "J049",
        "title": "Full Stack Developer (3-5)",
        "company": "Postman",
        "location": "Bengaluru",
        "mode": "Remote",
        "experience": "3-5",
        "skills": ["Node.js", "React", "JavaScript", "TypeScript", "AWS"],
        "source": "LinkedIn",
        "postedDaysAgo": 1,
        "salaryRange": "30–50 LPA",
        "applyUrl": "https://www.postman.com/careers/job/123456",
        "description": "Postman is looking for a Senior Full Stack Developer to join our team. You will be responsible for building and maintaining our API platform. You will work with a team of talented engineers to build a product that is used by millions of developers."
    },
    {
        "id": "J050",
        "title": "Blockchain Developer (1-3)",
        "company": "Polygon",
        "location": "Remote",
        "mode": "Remote",
        "experience": "1-3",
        "skills": ["Solidity", "Ethereum", "Smart Contracts", "Hardhat", "Web3.js"],
        "source": "Naukri",
        "postedDaysAgo": 9,
        "salaryRange": "20–40 LPA",
        "applyUrl": "https://polygon.technology/careers/job/123456",
        "description": "Polygon is hiring a Blockchain Developer to work on our scaling solutions. You will be responsible for designing and developing smart contracts and other blockchain-based applications. You should have a strong understanding of blockchain technology."
    },
    {
        "id": "J051",
        "title": "Security Engineer (3-5)",
        "company": "PhonePe",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "3-5",
        "skills": ["Application Security", "Network Security", "Penetration Testing", "Cryptography"],
        "source": "Indeed",
        "postedDaysAgo": 3,
        "salaryRange": "25–45 LPA",
        "applyUrl": "https://www.phonepe.com/careers/job/123457",
        "description": "PhonePe is looking for a Security Engineer to protect our systems and data. You will be responsible for identifying and mitigating security vulnerabilities. You should have a strong understanding of security best practices."
    },
    {
        "id": "J052",
        "title": "Cloud Engineer (1-3)",
        "company": "InMobi",
        "location": "Bengaluru",
        "mode": "Hybrid",
        "experience": "1-3",
        "skills": ["GCP", "Azure", "AWS", "Terraform", "Ansible"],
        "source": "LinkedIn",
        "postedDaysAgo": 7,
        "salaryRange": "15–25 LPA",
        "applyUrl": "https://www.inmobi.com/careers/job/123456",
        "description": "InMobi is hiring a Cloud Engineer to manage our multi-cloud environment. You will be responsible for automating our infrastructure and ensuring its reliability. You should have experience with at least one major cloud provider."
    },
    {
        "id": "J053",
        "title": "Site Reliability Engineer (3-5)",
        "company": "Atlassian",
        "location": "Bengaluru",
        "mode": "Remote",
        "experience": "3-5",
        "skills": ["Go", "Python", "Kubernetes", "Prometheus", "Grafana"],
        "source": "Naukri",
        "postedDaysAgo": 1,
        "salaryRange": "35–60 LPA",
        "applyUrl": "https://www.atlassian.com/company/careers/job/123456",
        "description": "Atlassian is looking for a Senior SRE to ensure the reliability of our products. You will be responsible for monitoring, troubleshooting, and automating our systems. You should have a strong background in software engineering and systems administration."
    },
    {
        "id": "J054",
        "title": "Machine Learning Engineer (1-3)",
        "company": "ShareChat",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
        "source": "Indeed",
        "postedDaysAgo": 5,
        "salaryRange": "18–30 LPA",
        "applyUrl": "https://sharechat.com/careers/job/123456",
        "description": "ShareChat is hiring a Machine Learning Engineer to build our content recommendation engine. You will be responsible for developing and deploying machine learning models. You should have a strong understanding of machine learning algorithms and best practices."
    },
    {
        "id": "J055",
        "title": "Business Analyst (0-1)",
        "company": "Deloitte",
        "location": "Hyderabad",
        "mode": "Hybrid",
        "experience": "0-1",
        "skills": ["Requirement Gathering", "Data Analysis", "SQL", "Excel", "Communication"],
        "source": "LinkedIn",
        "postedDaysAgo": 10,
        "salaryRange": "6–9 LPA",
        "applyUrl": "https://www2.deloitte.com/in/en/careers/job/123456.html",
        "description": "Deloitte is looking for a Business Analyst to join our consulting practice. You will work with our clients to understand their business needs and translate them into technical requirements. You should have strong analytical and communication skills."
    },
    {
        "id": "J056",
        "title": "Network Engineer (1-3)",
        "company": "Cisco",
        "location": "Bengaluru",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Routing", "Switching", "Firewalls", "CCNA", "Python"],
        "source": "Naukri",
        "postedDaysAgo": 4,
        "salaryRange": "10–18 LPA",
        "applyUrl": "https://www.cisco.com/c/en_in/about/careers/job/123456.html",
        "description": "Cisco is hiring a Network Engineer to design and manage our internal networks. You will be responsible for configuring and troubleshooting network devices. You should have a strong understanding of networking fundamentals."
    },
    {
        "id": "J057",
        "title": "Technical Writer (1-3)",
        "company": "Oracle",
        "location": "Bengaluru",
        "mode": "Remote",
        "experience": "1-3",
        "skills": ["Technical Writing", "Documentation", "API Documentation", "Markdown", "Git"],
        "source": "Indeed",
        "postedDaysAgo": 2,
        "salaryRange": "8–14 LPA",
        "applyUrl": "https://www.oracle.com/in/careers/job/4568",
        "description": "Oracle is looking for a Technical Writer to create clear and concise documentation for our products. You will work closely with our engineering and product teams to ensure the accuracy of our documentation. You should have excellent writing skills."
    },
    {
        "id": "J058",
        "title": "Database Administrator (3-5)",
        "company": "TCS",
        "location": "Chennai",
        "mode": "Hybrid",
        "experience": "3-5",
        "skills": ["Oracle DBA", "SQL Tuning", "Backup and Recovery", "RAC", "Data Guard"],
        "source": "LinkedIn",
        "postedDaysAgo": 8,
        "salaryRange": "12–20 LPA",
        "applyUrl": "https://www.tcs.com/careers/job/56790",
        "description": "TCS is hiring a Database Administrator to manage our Oracle databases. You will be responsible for ensuring the performance, availability, and security of our databases. You should have strong experience with Oracle database administration."
    },
    {
        "id": "J059",
        "title": "Systems Analyst (1-3)",
        "company": "Capgemini",
        "location": "Pune",
        "mode": "Onsite",
        "experience": "1-3",
        "skills": ["Systems Analysis", "Requirement Gathering", "UML", "SQL", "JIRA"],
        "source": "Naukri",
        "postedDaysAgo": 3,
        "salaryRange": "7–12 LPA",
        "applyUrl": "https://www.capgemini.com/in-en/careers/job/67891",
        "description": "Capgemini is looking for a Systems Analyst to join our team. You will be responsible for analyzing our business processes and designing IT solutions. You should have strong analytical and problem-solving skills."
    },
    {
        "id": "J060",
        "title": "IT Support Engineer (0-1)",
        "company": "Accenture",
        "location": "Mumbai",
        "mode": "Onsite",
        "experience": "0-1",
        "skills": ["IT Support", "Troubleshooting", "Windows", "Active Directory", "Networking"],
        "source": "Indeed",
        "postedDaysAgo": 6,
        "salaryRange": "4–6 LPA",
        "applyUrl": "https://www.accenture.com/in-en/careers/jobdetails?id=12346_india_1",
        "description": "Accenture is hiring an IT Support Engineer. You will be responsible for providing technical assistance to our employees. You should have strong troubleshooting skills and a passion for helping others."
    }
];
(function () {
    const preferences = JSON.parse(localStorage.getItem('jobTrackerPreferences'));
    let savedJobIds = new Set(JSON.parse(localStorage.getItem('savedJobIds')) || []);
    let processedJobs = [];

    const routes = {
        "/": `
          <div class="landing-content">
            <h1>Stop Missing The Right Jobs.</h1>
            <p>Precision-matched job discovery delivered daily at 9AM.</p>
            <a href="/settings.html" class="cta-button">Start Tracking</a>
          </div>
        `,
        "/dashboard": `
          <div class="dashboard-layout">
            <div id="preferences-banner" class="preferences-banner" style="display: none;">
              <p>Set your preferences to activate intelligent matching.</p>
              <a href="/settings.html" class="cta-button">Set Preferences</a>
            </div>
            <div class="filter-bar">
              <h2>Filters</h2>
              <div class="filter-group">
                <input type="search" id="keyword-search" placeholder="Search title, company...">
              </div>
               <div class="filter-group toggle-group">
                <label for="show-matches-toggle">Show only jobs above my threshold</label>
                <input type="checkbox" id="show-matches-toggle" class="toggle-switch">
              </div>
              <div class="filter-group">
                <label for="location-filter">Location</label>
                <select id="location-filter">
                  <option value="">All</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="mode-filter">Mode</label>
                <select id="mode-filter">
                  <option value="">All</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="experience-filter">Experience</label>
                <select id="experience-filter">
                  <option value="">All</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="source-filter">Source</label>
                <select id="source-filter">
                  <option value="">All</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="sort-by">Sort by</label>
                <select id="sort-by">
                  <option value="latest">Latest</option>
                  <option value="match-score">Match Score</option>
                  <option value="salary">Salary</option>
                </select>
              </div>
            </div>
            <div id="job-cards-container" class="job-cards-container"></div>
          </div>
        `,
        "/saved": `
          <div class="saved-jobs-layout">
            <h2>Saved Jobs</h2>
            <div id="saved-job-cards-container" class="job-cards-container"></div>
          </div>
        `,
        "/digest": `
          <div class="digest-layout">
            <div id="digest-content"></div>
          </div>
        `,
        "/proof": `
          <div class="proof-layout">
            <div class="proof-header">
              <h2>Project 1 — Job Notification Tracker</h2>
              <div id="project-status-badge" class="project-status-badge"></div>
            </div>
            
            <div class="proof-section">
              <h3>A) Step Completion Summary</h3>
              <div id="step-completion-list" class="step-completion-list"></div>
            </div>
            
            <div class="proof-section">
              <h3>B) Artifact Collection</h3>
              <div class="artifact-inputs">
                <div class="form-group">
                  <label for="lovable-link">Lovable Project Link *</label>
                  <input type="url" id="lovable-link" placeholder="https://lovable.dev/projects/..." />
                  <span class="validation-message" id="lovable-validation"></span>
                </div>
                
                <div class="form-group">
                  <label for="github-link">GitHub Repository Link *</label>
                  <input type="url" id="github-link" placeholder="https://github.com/username/repo" />
                  <span class="validation-message" id="github-validation"></span>
                </div>
                
                <div class="form-group">
                  <label for="deployed-link">Deployed URL (Vercel or equivalent) *</label>
                  <input type="url" id="deployed-link" placeholder="https://your-app.vercel.app" />
                  <span class="validation-message" id="deployed-validation"></span>
                </div>
                
                <button id="save-artifacts-btn" class="cta-button">Save Artifact Links</button>
              </div>
            </div>
            
            <div class="proof-section">
              <h3>Final Submission</h3>
              <div id="submission-status" class="submission-status"></div>
              <button id="copy-submission-btn" class="action-btn view-btn" disabled>Copy Final Submission</button>
            </div>
            
            <div id="shipped-message" class="shipped-message" style="display: none;">
              <p>✓ Project 1 Shipped Successfully.</p>
            </div>
          </div>
        `,
        "/jt/07-test": `
          <div class="test-checklist-layout">
            <h2>Test Checklist</h2>
            <div id="test-summary" class="test-summary"></div>
            <div id="test-checklist" class="test-checklist"></div>
            <button id="reset-tests-btn" class="action-btn view-btn">Reset Test Status</button>
          </div>
        `,
        "/jt/08-ship": `
          <div class="ship-layout">
            <div id="ship-content"></div>
          </div>
        `
    };

    function calculateMatchScore(job, prefs) {
        if (!prefs) return 0;

        let score = 0;
        const { roleKeywords, preferredLocations, preferredMode, experienceLevel, skills: userSkills } = prefs;

        if (roleKeywords.some(kw => job.title.toLowerCase().includes(kw.toLowerCase()))) {
            score += 25;
        }
        if (roleKeywords.some(kw => job.description.toLowerCase().includes(kw.toLowerCase()))) {
            score += 15;
        }
        if (preferredLocations.includes(job.location)) {
            score += 15;
        }
        if (preferredMode.includes(job.mode)) {
            score += 10;
        }
        if (job.experience === experienceLevel) {
            score += 10;
        }
        if (job.skills.some(s => userSkills.includes(s))) {
            score += 15;
        }
        if (job.postedDaysAgo <= 2) {
            score += 5;
        }
        if (job.source === 'LinkedIn') {
            score += 5;
        }

        return Math.min(score, 100);
    }

    function processJobs() {
        processedJobs = jobs.map(job => ({
            ...job,
            matchScore: calculateMatchScore(job, preferences)
        }));
    }

    function getScoreBadgeClass(score) {
        if (score >= 80) return 'green';
        if (score >= 60) return 'amber';
        if (score >= 40) return 'neutral';
        return 'subtle';
    }

    function createJobCard(job) {
        const isSaved = savedJobIds.has(job.id);
        const scoreBadge = preferences ? `<span class="match-score-badge ${getScoreBadgeClass(job.matchScore)}">${job.matchScore}</span>` : '';
        return `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-card-header">
                    <h3>${job.title}</h3>
                    ${scoreBadge}
                    <span class="source-badge ${job.source.toLowerCase()}">${job.source}</span>
                </div>
                <p class="company">${job.company}</p>
                <p class="meta-info">${job.location} &bull; ${job.mode}</p>
                <p class="meta-info">Experience: ${job.experience}</p>
                <p class="salary">${job.salaryRange}</p>
                <div class="job-card-footer">
                    <span class="posted-date">${job.postedDaysAgo} days ago</span>
                    <div class="card-actions">
                        <button class="action-btn view-btn">View</button>
                        <button class="action-btn save-btn ${isSaved ? 'saved' : ''}">${isSaved ? 'Saved' : 'Save'}</button>
                        <a href="${job.applyUrl}" target="_blank" class="action-btn apply-btn">Apply</a>
                    </div>
                </div>
            </div>`;
    }

    function renderJobCards(jobsToRender) {
        const container = document.getElementById('job-cards-container');
        if (!container) return;

        if (jobsToRender.length > 0) {
            container.innerHTML = jobsToRender.map(createJobCard).join('');
        } else {
            container.innerHTML = `<div class="empty-state"><p>No roles match your criteria. Adjust filters or lower threshold.</p></div>`;
        }
    }

    function populateFilters() {
        const locations = [...new Set(jobs.map(j => j.location))];
        const modes = [...new Set(jobs.map(j => j.mode))];
        const experiences = [...new Set(jobs.map(j => j.experience))];
        const sources = [...new Set(jobs.map(j => j.source))];

        const locationFilter = document.getElementById('location-filter');
        const modeFilter = document.getElementById('mode-filter');
        const experienceFilter = document.getElementById('experience-filter');
        const sourceFilter = document.getElementById('source-filter');

        if (locationFilter) locations.forEach(l => locationFilter.innerHTML += `<option value="${l}">${l}</option>`);
        if (modeFilter) modes.forEach(m => modeFilter.innerHTML += `<option value="${m}">${m}</option>`);
        if (experienceFilter) experiences.forEach(e => experienceFilter.innerHTML += `<option value="${e}">${e}</option>`);
        if (sourceFilter) sources.forEach(s => sourceFilter.innerHTML += `<option value="${s}">${s}</option>`);
    }

    function applyFilters() {
        const keyword = document.getElementById('keyword-search').value.toLowerCase();
        const location = document.getElementById('location-filter').value;
        const mode = document.getElementById('mode-filter').value;
        const experience = document.getElementById('experience-filter').value;
        const source = document.getElementById('source-filter').value;
        const sortBy = document.getElementById('sort-by').value;
        const showMatchesOnly = document.getElementById('show-matches-toggle').checked;

        let filteredJobs = processedJobs.filter(job => {
            const keywordMatch = !keyword || job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword);
            const locationMatch = !location || job.location === location;
            const modeMatch = !mode || job.mode === mode;
            const experienceMatch = !experience || job.experience === experience;
            const sourceMatch = !source || job.source === source;
            const scoreMatch = !showMatchesOnly || (preferences && job.matchScore >= preferences.minMatchScore);

            return keywordMatch && locationMatch && modeMatch && experienceMatch && sourceMatch && scoreMatch;
        });

        if (sortBy === 'latest') {
            filteredJobs.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
        } else if (sortBy === 'match-score') {
            filteredJobs.sort((a, b) => b.matchScore - a.matchScore);
        } else if (sortBy === 'salary') {
            // Simple salary sort, assuming LPA or monthly for now. This can be improved.
            const extractSalary = (range) => {
                const match = range.match(/(\d+)/);
                return match ? parseInt(match[1], 10) : 0;
            };
            filteredJobs.sort((a, b) => extractSalary(b.salaryRange) - extractSalary(a.salaryRange));
        }

        renderJobCards(filteredJobs);
    }

    function setupDashboardListeners() {
        const keywordSearch = document.getElementById('keyword-search');
        const showMatchesToggle = document.getElementById('show-matches-toggle');
        const filters = ['location-filter', 'mode-filter', 'experience-filter', 'source-filter', 'sort-by'];

        if (keywordSearch) keywordSearch.addEventListener('input', applyFilters);
        if (showMatchesToggle) showMatchesToggle.addEventListener('change', applyFilters);
        filters.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', applyFilters)
        });

        document.getElementById('job-cards-container')?.addEventListener('click', handleCardActions);
    }

    function handleCardActions(event) {
        const target = event.target;
        const card = target.closest('.job-card');
        if (!card) return;

        const jobId = card.dataset.jobId;

        if (target.classList.contains('view-btn')) {
            showModal(jobId);
        } else if (target.classList.contains('save-btn')) {
            toggleSaveJob(jobId, target);
        }
    }

    function showModal(jobId) {
        const job = jobs.find(j => j.id === jobId);
        if (!job) return;
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
                    <h2>${job.title}</h2>
                    <p class="company">${job.company}</p>
                    <p>${job.description}</p>
                    <div class="skills-container">
                        <strong>Skills:</strong>
                        ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                `;
        document.getElementById('modal-container').style.display = 'flex';
    }

    function toggleSaveJob(jobId, button) {
        if (savedJobIds.has(jobId)) {
            savedJobIds.delete(jobId);
            button.textContent = 'Save';
            button.classList.remove('saved');
        } else {
            savedJobIds.add(jobId);
            button.textContent = 'Saved';
            button.classList.add('saved');
        }
        localStorage.setItem('savedJobIds', JSON.stringify([...savedJobIds]));

        if (normalizePath(window.location.pathname) === '/saved') {
            renderSavedJobs();
        }
    }

    function renderSavedJobs() {
        const container = document.getElementById('saved-job-cards-container');
        if (!container) return;

        const savedJobs = processedJobs.filter(job => savedJobIds.has(job.id));

        if (savedJobs.length > 0) {
            container.innerHTML = savedJobs.map(createJobCard).join('');
        } else {
            container.innerHTML = `<div class="empty-state"><p>You haven't saved any jobs yet.</p></div>`;
        }
        container.addEventListener('click', handleCardActions);
    }

    function getTodayDateKey() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function generateDigest() {
        if (!preferences) {
            return null;
        }

        // Sort by match score (descending) then by postedDaysAgo (ascending)
        const sortedJobs = [...processedJobs].sort((a, b) => {
            if (b.matchScore !== a.matchScore) {
                return b.matchScore - a.matchScore;
            }
            return a.postedDaysAgo - b.postedDaysAgo;
        });

        // Take top 10
        const top10 = sortedJobs.slice(0, 10);

        const digest = {
            date: getTodayDateKey(),
            jobs: top10
        };

        // Save to localStorage
        const digestKey = `jobTrackerDigest_${getTodayDateKey()}`;
        localStorage.setItem(digestKey, JSON.stringify(digest));

        return digest;
    }

    function loadTodayDigest() {
        const digestKey = `jobTrackerDigest_${getTodayDateKey()}`;
        const stored = localStorage.getItem(digestKey);
        return stored ? JSON.parse(stored) : null;
    }

    function formatDateForDisplay(dateKey) {
        const [year, month, day] = dateKey.split('-');
        const date = new Date(year, month - 1, day);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function createDigestJobCard(job, index) {
        return `
            <div class="digest-job-item">
                <div class="digest-job-number">${index + 1}</div>
                <div class="digest-job-details">
                    <h3>${job.title}</h3>
                    <p class="company">${job.company}</p>
                    <p class="meta-info">${job.location} • ${job.mode} • ${job.experience}</p>
                    <div class="digest-job-footer">
                        <span class="match-score-badge ${getScoreBadgeClass(job.matchScore)}">Match: ${job.matchScore}</span>
                        <a href="${job.applyUrl}" target="_blank" class="action-btn apply-btn">Apply Now</a>
                    </div>
                </div>
            </div>
        `;
    }

    function digestToPlainText(digest) {
        let text = `TOP 10 JOBS FOR YOU — 9AM DIGEST\n`;
        text += `${formatDateForDisplay(digest.date)}\n\n`;
        text += `═══════════════════════════════════════\n\n`;

        digest.jobs.forEach((job, index) => {
            text += `${index + 1}. ${job.title}\n`;
            text += `   Company: ${job.company}\n`;
            text += `   Location: ${job.location}\n`;
            text += `   Experience: ${job.experience}\n`;
            text += `   Match Score: ${job.matchScore}\n`;
            text += `   Apply: ${job.applyUrl}\n\n`;
        });

        text += `═══════════════════════════════════════\n`;
        text += `This digest was generated based on your preferences.\n`;

        return text;
    }

    function copyDigestToClipboard(digest) {
        const text = digestToPlainText(digest);
        navigator.clipboard.writeText(text).then(() => {
            alert('Digest copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy digest. Please try again.');
        });
    }

    function createEmailDraft(digest) {
        const subject = encodeURIComponent('My 9AM Job Digest');
        const body = encodeURIComponent(digestToPlainText(digest));
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }

    function renderDigest() {
        const container = document.getElementById('digest-content');
        if (!container) return;

        // Check if preferences are set
        if (!preferences) {
            container.innerHTML = `
                <div class="digest-blocking-message">
                    <h2>Set Preferences First</h2>
                    <p>Set preferences to generate a personalized digest.</p>
                    <a href="/settings.html" class="cta-button">Go to Settings</a>
                </div>
            `;
            return;
        }

        // Check if digest already exists for today
        let digest = loadTodayDigest();
        const isNewDigest = !digest;

        container.innerHTML = `
            <div class="digest-header">
                <h2>Daily Digest</h2>
                ${!digest ? `
                    <button id="generate-digest-btn" class="cta-button">Generate Today's 9AM Digest (Simulated)</button>
                ` : ''}
            </div>
            <div id="digest-display"></div>
        `;

        if (digest) {
            displayDigest(digest);
        }

        // Add event listener for generate button
        const generateBtn = document.getElementById('generate-digest-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                digest = generateDigest();
                if (digest) {
                    displayDigest(digest);
                    // Remove the generate button
                    document.querySelector('.digest-header').innerHTML = `<h2>Daily Digest</h2>`;
                }
            });
        }
    }

    function displayDigest(digest) {
        const displayContainer = document.getElementById('digest-display');
        if (!displayContainer) return;

        if (!digest.jobs || digest.jobs.length === 0) {
            displayContainer.innerHTML = `
                <div class="digest-no-matches">
                    <p>No matching roles today. Check again tomorrow.</p>
                </div>
            `;
            return;
        }

        displayContainer.innerHTML = `
            <div class="digest-email-card">
                <div class="digest-email-header">
                    <h1>Top 10 Jobs For You — 9AM Digest</h1>
                    <p class="digest-date">${formatDateForDisplay(digest.date)}</p>
                </div>
                <div class="digest-jobs-list">
                    ${digest.jobs.map((job, index) => createDigestJobCard(job, index)).join('')}
                </div>
                <div class="digest-email-footer">
                    <p>This digest was generated based on your preferences.</p>
                    <p class="digest-demo-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
                </div>
                <div class="digest-actions">
                    <button id="copy-digest-btn" class="action-btn view-btn">Copy Digest to Clipboard</button>
                    <button id="email-digest-btn" class="action-btn save-btn">Create Email Draft</button>
                </div>
            </div>
        `;

        // Add event listeners for action buttons
        document.getElementById('copy-digest-btn')?.addEventListener('click', () => {
            copyDigestToClipboard(digest);
        });

        document.getElementById('email-digest-btn')?.addEventListener('click', () => {
            createEmailDraft(digest);
        });
    }


    // Test Checklist System
    const testItems = [
        { id: 'test-1', label: 'Preferences persist after refresh', tooltip: 'Set preferences in Settings, refresh the page, and verify they are still there' },
        { id: 'test-2', label: 'Match score calculates correctly', tooltip: 'Check that jobs matching your preferences show higher scores' },
        { id: 'test-3', label: '"Show only matches" toggle works', tooltip: 'Toggle the filter on Dashboard and verify only high-scoring jobs appear' },
        { id: 'test-4', label: 'Save job persists after refresh', tooltip: 'Save a job, refresh the page, and check it\'s still in Saved Jobs' },
        { id: 'test-5', label: 'Apply opens in new tab', tooltip: 'Click Apply on any job and verify it opens in a new browser tab' },
        { id: 'test-6', label: 'Status update persists after refresh', tooltip: 'Update any job status, refresh, and verify the status is maintained' },
        { id: 'test-7', label: 'Status filter works correctly', tooltip: 'Filter jobs by status and verify only matching jobs appear' },
        { id: 'test-8', label: 'Digest generates top 10 by score', tooltip: 'Generate digest and verify it shows the 10 highest-scoring jobs' },
        { id: 'test-9', label: 'Digest persists for the day', tooltip: 'Generate digest, refresh page, and verify the same digest appears' },
        { id: 'test-10', label: 'No console errors on main pages', tooltip: 'Open browser console and navigate through all pages checking for errors' }
    ];

    function getTestStatus() {
        const stored = localStorage.getItem('jobTrackerTestStatus');
        return stored ? JSON.parse(stored) : {};
    }

    function saveTestStatus(status) {
        localStorage.setItem('jobTrackerTestStatus', JSON.stringify(status));
        updateShipLinkState();
    }

    function toggleTestItem(testId) {
        const status = getTestStatus();
        status[testId] = !status[testId];
        saveTestStatus(status);
        renderTestChecklist();
    }

    function resetTestStatus() {
        if (confirm('Are you sure you want to reset all test statuses?')) {
            localStorage.removeItem('jobTrackerTestStatus');
            renderTestChecklist();
            updateShipLinkState();
        }
    }

    function getTestProgress() {
        const status = getTestStatus();
        const completed = testItems.filter(item => status[item.id]).length;
        const total = testItems.length;
        return { completed, total };
    }

    function allTestsPassed() {
        const { completed, total } = getTestProgress();
        return completed === total;
    }

    function updateShipLinkState() {
        const shipLink = document.getElementById('ship-link');
        if (!shipLink) return;

        if (allTestsPassed()) {
            shipLink.classList.remove('locked');
            shipLink.style.opacity = '1';
            shipLink.style.pointerEvents = 'auto';
        } else {
            shipLink.classList.add('locked');
            shipLink.style.opacity = '0.5';
            shipLink.style.pointerEvents = 'none';
        }
    }

    function renderTestChecklist() {
        const summaryContainer = document.getElementById('test-summary');
        const checklistContainer = document.getElementById('test-checklist');

        if (!summaryContainer || !checklistContainer) return;

        const { completed, total } = getTestProgress();
        const status = getTestStatus();

        // Render summary
        summaryContainer.innerHTML = `
            <div class="test-progress">
                <h3>Tests Passed: ${completed} / ${total}</h3>
                ${completed < total ? `
                    <p class="test-warning">⚠️ Resolve all issues before shipping.</p>
                ` : `
                    <p class="test-success">✅ All tests passed! You're ready to ship.</p>
                `}
            </div>
        `;

        // Render checklist
        checklistContainer.innerHTML = testItems.map(item => `
            <div class="test-item ${status[item.id] ? 'checked' : ''}">
                <label class="test-item-label">
                    <input 
                        type="checkbox" 
                        id="${item.id}" 
                        ${status[item.id] ? 'checked' : ''}
                        class="test-checkbox"
                    />
                    <span class="test-label-text">${item.label}</span>
                </label>
                <button class="test-tooltip-btn" title="${item.tooltip}" aria-label="How to test">?</button>
            </div>
        `).join('');

        // Add event listeners
        testItems.forEach(item => {
            const checkbox = document.getElementById(item.id);
            if (checkbox) {
                checkbox.addEventListener('change', () => toggleTestItem(item.id));
            }
        });

        // Add tooltip click handlers
        document.querySelectorAll('.test-tooltip-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                alert(testItems[index].tooltip);
            });
        });

        // Reset button
        const resetBtn = document.getElementById('reset-tests-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetTestStatus);
        }

        updateShipLinkState();
    }

    function renderShipPage() {
        const container = document.getElementById('ship-content');
        if (!container) return;

        if (!allTestsPassed()) {
            container.innerHTML = `
                <div class="ship-blocked">
                    <h2>🔒 Ship Locked</h2>
                    <p>Complete all test checklist items to unlock shipping.</p>
                    <a href="/jt/07-test" class="cta-button">Go to Test Checklist</a>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="ship-ready">
                    <h2>🚀 Ready to Ship!</h2>
                    <p>All tests have passed. Your Job Notification Tracker is ready for deployment.</p>
                    <div class="ship-actions">
                        <button class="cta-button">Deploy to Production</button>
                        <button class="action-btn view-btn">View Deployment Checklist</button>
                    </div>
                </div>
            `;
        }
    }


    // Proof & Submission System
    const projectSteps = [
        { id: 'step-1', name: 'Route skeleton created', key: 'routeSkeleton' },
        { id: 'step-2', name: 'Preferences system implemented', key: 'preferences' },
        { id: 'step-3', name: 'Match scoring algorithm built', key: 'matchScoring' },
        { id: 'step-4', name: 'Dashboard filters working', key: 'dashboardFilters' },
        { id: 'step-5', name: 'Save/Apply functionality added', key: 'saveApply' },
        { id: 'step-6', name: 'Daily digest engine created', key: 'digestEngine' },
        { id: 'step-7', name: 'Test checklist implemented', key: 'testChecklist' },
        { id: 'step-8', name: 'Proof & submission system', key: 'proofSystem' }
    ];

    function getArtifactLinks() {
        const stored = localStorage.getItem('jobTrackerArtifacts');
        return stored ? JSON.parse(stored) : { lovable: '', github: '', deployed: '' };
    }

    function saveArtifactLinks(links) {
        localStorage.setItem('jobTrackerArtifacts', JSON.stringify(links));
    }

    function getStepCompletionStatus() {
        const stored = localStorage.getItem('jobTrackerStepCompletion');
        if (stored) return JSON.parse(stored);

        // Default: mark first 7 steps as completed (assuming they're done)
        return {
            routeSkeleton: true,
            preferences: true,
            matchScoring: true,
            dashboardFilters: true,
            saveApply: true,
            digestEngine: true,
            testChecklist: true,
            proofSystem: true
        };
    }

    function validateUrl(url) {
        if (!url || url.trim() === '') return false;
        try {
            const urlObj = new URL(url);
            return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
        } catch {
            return false;
        }
    }

    function allArtifactsProvided() {
        const links = getArtifactLinks();
        return validateUrl(links.lovable) && validateUrl(links.github) && validateUrl(links.deployed);
    }

    function isProjectShipped() {
        return allTestsPassed() && allArtifactsProvided();
    }

    function getProjectStatus() {
        if (isProjectShipped()) return 'Shipped';

        const links = getArtifactLinks();
        const hasAnyLink = links.lovable || links.github || links.deployed;
        const { completed } = getTestProgress();

        if (hasAnyLink || completed > 0) return 'In Progress';
        return 'Not Started';
    }

    function renderStepCompletion() {
        const container = document.getElementById('step-completion-list');
        if (!container) return;

        const stepStatus = getStepCompletionStatus();

        container.innerHTML = projectSteps.map(step => {
            const isCompleted = stepStatus[step.key];
            return `
                <div class="step-item ${isCompleted ? 'completed' : 'pending'}">
                    <span class="step-status-icon">${isCompleted ? '✓' : '○'}</span>
                    <span class="step-name">${step.name}</span>
                    <span class="step-status-label">${isCompleted ? 'Completed' : 'Pending'}</span>
                </div>
            `;
        }).join('');
    }

    function renderProjectStatusBadge() {
        const badge = document.getElementById('project-status-badge');
        if (!badge) return;

        const status = getProjectStatus();
        badge.className = `project-status-badge status-${status.toLowerCase().replace(' ', '-')}`;
        badge.textContent = status;
    }

    function loadArtifactInputs() {
        const links = getArtifactLinks();

        const lovableInput = document.getElementById('lovable-link');
        const githubInput = document.getElementById('github-link');
        const deployedInput = document.getElementById('deployed-link');

        if (lovableInput) lovableInput.value = links.lovable || '';
        if (githubInput) githubInput.value = links.github || '';
        if (deployedInput) deployedInput.value = links.deployed || '';
    }

    function validateAndSaveArtifacts() {
        const lovableInput = document.getElementById('lovable-link');
        const githubInput = document.getElementById('github-link');
        const deployedInput = document.getElementById('deployed-link');

        const lovableVal = document.getElementById('lovable-validation');
        const githubVal = document.getElementById('github-validation');
        const deployedVal = document.getElementById('deployed-validation');

        let isValid = true;

        // Validate Lovable link
        if (!validateUrl(lovableInput.value)) {
            lovableVal.textContent = '✗ Invalid URL format';
            lovableVal.className = 'validation-message error';
            isValid = false;
        } else {
            lovableVal.textContent = '✓ Valid';
            lovableVal.className = 'validation-message success';
        }

        // Validate GitHub link
        if (!validateUrl(githubInput.value)) {
            githubVal.textContent = '✗ Invalid URL format';
            githubVal.className = 'validation-message error';
            isValid = false;
        } else {
            githubVal.textContent = '✓ Valid';
            githubVal.className = 'validation-message success';
        }

        // Validate Deployed link
        if (!validateUrl(deployedInput.value)) {
            deployedVal.textContent = '✗ Invalid URL format';
            deployedVal.className = 'validation-message error';
            isValid = false;
        } else {
            deployedVal.textContent = '✓ Valid';
            deployedVal.className = 'validation-message success';
        }

        if (isValid) {
            saveArtifactLinks({
                lovable: lovableInput.value,
                github: githubInput.value,
                deployed: deployedInput.value
            });
            alert('✓ Artifact links saved successfully!');
            updateSubmissionStatus();
            renderProjectStatusBadge();
            showShippedMessageIfReady();
        }
    }

    function updateSubmissionStatus() {
        const statusContainer = document.getElementById('submission-status');
        const copyButton = document.getElementById('copy-submission-btn');

        if (!statusContainer || !copyButton) return;

        const shipped = isProjectShipped();
        const testsPass = allTestsPassed();
        const artifactsProvided = allArtifactsProvided();

        if (shipped) {
            statusContainer.innerHTML = `
                <p class="status-ready">✓ All requirements met. Ready to submit!</p>
            `;
            copyButton.disabled = false;
        } else {
            const missing = [];
            if (!testsPass) missing.push('Complete all 10 test checklist items');
            if (!artifactsProvided) missing.push('Provide all 3 artifact links');

            statusContainer.innerHTML = `
                <p class="status-pending">Requirements pending:</p>
                <ul class="requirements-list">
                    ${missing.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            copyButton.disabled = true;
        }
    }

    function showShippedMessageIfReady() {
        const shippedMessage = document.getElementById('shipped-message');
        if (!shippedMessage) return;

        if (isProjectShipped()) {
            shippedMessage.style.display = 'block';
        } else {
            shippedMessage.style.display = 'none';
        }
    }

    function copyFinalSubmission() {
        const links = getArtifactLinks();

        const submissionText = `------------------------------------------
Job Notification Tracker — Final Submission

Lovable Project:
${links.lovable}

GitHub Repository:
${links.github}

Live Deployment:
${links.deployed}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced
------------------------------------------`;

        navigator.clipboard.writeText(submissionText).then(() => {
            alert('✓ Final submission copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy submission. Please try again.');
        });
    }

    function renderProofPage() {
        renderStepCompletion();
        renderProjectStatusBadge();
        loadArtifactInputs();
        updateSubmissionStatus();
        showShippedMessageIfReady();

        // Add event listeners
        const saveBtn = document.getElementById('save-artifacts-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', validateAndSaveArtifacts);
        }

        const copyBtn = document.getElementById('copy-submission-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', copyFinalSubmission);
        }
    }


    function renderRoute(pathname) {
        const routeContentEl = document.getElementById("route-content");
        const currentPath = routes[pathname] ? pathname : "/";
        routeContentEl.innerHTML = routes[currentPath];
        updateActiveLink(currentPath);

        if (currentPath === '/dashboard') {
            const banner = document.getElementById('preferences-banner');
            if (!preferences && banner) {
                banner.style.display = 'block';
            }
            populateFilters();
            applyFilters();
            setupDashboardListeners();
        } else if (currentPath === '/saved') {
            renderSavedJobs();
        } else if (currentPath === '/digest') {
            renderDigest();
        } else if (currentPath === '/proof') {
            renderProofPage();
        } else if (currentPath === '/jt/07-test') {
            renderTestChecklist();
        } else if (currentPath === '/jt/08-ship') {
            renderShipPage();
        }
    }

    function updateActiveLink(currentPath) {
        const nav = document.getElementById("site-nav");
        const brandLink = document.querySelector(".brand");
        const navLinks = Array.from(nav.querySelectorAll("a"));
        const allLinks = [...navLinks, brandLink];
        allLinks.forEach((link) => {
            const route = link.getAttribute("data-route");
            if (route) {
                const isActive = route === currentPath;
                link.classList.toggle("is-active", isActive);
                link.setAttribute("aria-current", isActive ? "page" : "false");
            }
        });
    }

    function normalizePath(pathname) {
        if (!pathname || pathname === "/index.html") return "/";
        return pathname.replace(/\/+$/, "") || "/";
    }

    function handleLinkClick(event) {
        event.preventDefault();
        const nextPath = event.currentTarget.getAttribute("data-route");

        // Enforce ship lock
        if (nextPath === '/jt/08-ship' && !allTestsPassed()) {
            alert('🔒 Complete all test checklist items before accessing the Ship page.');
            return;
        }

        history.pushState({}, "", nextPath);
        renderRoute(nextPath);
        const nav = document.getElementById("site-nav");
        const toggle = document.querySelector(".menu-toggle");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    function init() {
        processJobs();

        const nav = document.getElementById("site-nav");
        const toggle = document.querySelector(".menu-toggle");
        const brandLink = document.querySelector(".brand");
        const navLinks = Array.from(nav.querySelectorAll("a[data-route]"));
        const modalContainer = document.getElementById('modal-container');
        const modalClose = document.getElementById('modal-close');

        modalClose.addEventListener('click', () => modalContainer.style.display = 'none');
        window.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        });

        navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
        brandLink.addEventListener("click", handleLinkClick);

        toggle.addEventListener("click", () => {
            const willOpen = !nav.classList.contains("is-open");
            nav.classList.toggle("is-open", willOpen);
            toggle.setAttribute("aria-expanded", String(willOpen));
        });

        window.addEventListener("popstate", () => renderRoute(normalizePath(window.location.pathname)));

        updateShipLinkState();
        renderRoute(normalizePath(window.location.pathname));
    }

    init();
})();